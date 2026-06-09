import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { scheduleSplineLoad } from "./splineLoadQueue";

const MODEL_LOADERS = {
  CallMeMaybe: () => import("../3dModels/ProjectModels/CallMeMaybe"),
  DropModel: () => import("../3dModels/ProjectModels/CallMeMaybe copy"),
  HabitStep: () => import("../3dModels/ProjectModels/HabitStep"),
  RingClone: () => import("../3dModels/ProjectModels/RingClone"),
  PortfolioWebsite: () => import("../3dModels/ProjectModels/PortfolioWebsite"),
  CraftACard: () => import("../3dModels/ProjectModels/CraftACard"),
  SortingBars: () => import("../3dModels/ProjectModels/SortingBars"),
  GameController: () => import("../3dModels/ProjectModels/GameController"),
};

const modelComponents = new Map();
const modelLoadPromises = new Map();

function loadProjectModel(modelKey, loadOrder) {
  if (modelLoadPromises.has(modelKey)) {
    return modelLoadPromises.get(modelKey);
  }

  const loadModel = MODEL_LOADERS[modelKey];
  if (!loadModel) {
    return Promise.reject(new Error(`Unknown model: ${modelKey}`));
  }

  let resolveLoad;
  let rejectLoad;
  const promise = new Promise((resolve, reject) => {
    resolveLoad = resolve;
    rejectLoad = reject;
  });

  modelLoadPromises.set(modelKey, promise);

  scheduleSplineLoad(() => loadModel(), loadOrder)
    .then((module) => {
      modelComponents.set(modelKey, module.default);
      resolveLoad(module);
      return module;
    })
    .catch((error) => {
      modelLoadPromises.delete(modelKey);
      rejectLoad(error);
    });

  return promise;
}

export default function LazySplineModel({
  modelKey,
  loadOrder,
  heroLoaded,
  scrolledPastHero,
  queueInitialBatch = false,
}) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [Model, setModel] = useState(
    () => modelComponents.get(modelKey) ?? null,
  );

  const readyToLoad =
    heroLoaded && scrolledPastHero && (queueInitialBatch || inView);

  useEffect(() => {
    if (!heroLoaded || !scrolledPastHero || queueInitialBatch) return;

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [heroLoaded, scrolledPastHero, queueInitialBatch]);

  useEffect(() => {
    if (!readyToLoad || !modelKey) return;

    if (modelComponents.has(modelKey)) {
      setModel(() => modelComponents.get(modelKey));
      return;
    }

    let cancelled = false;

    loadProjectModel(modelKey, loadOrder)
      .then((module) => {
        if (!cancelled) {
          setModel(() => module.default);
        }
      })
      .catch(() => {
        modelLoadPromises.delete(modelKey);
      });

    return () => {
      cancelled = true;
    };
  }, [readyToLoad, modelKey, loadOrder]);

  return (
    <Box ref={containerRef} sx={{ width: "100%", height: "100%" }}>
      {Model ? <Model /> : null}
    </Box>
  );
}
