import Head from "next/head";
import styles from "@/styles/Hero.module.css";
import { HeroModel } from "@/components";

export default function Home() {
    return (
        <>
            <Head>
                <title>Vince Moschella</title>
                <meta name="description" content="Vince Moschella Portfolio Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <HeroModel />
                <h1>vince</h1>
            </main>
        </>
    );
}
