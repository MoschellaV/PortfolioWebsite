import React, { useState, useEffect } from "react";
import { useScrollY } from "@/context/providers";
import { Typography, Box, Button, Link, Hidden, Drawer, List, ListItem, useTheme, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavContactButton = ({ children, darkNav, onClick }) => {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: !darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                color: darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                "&:hover": {
                    backgroundColor: darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                    color: !darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                },
                borderRadius: "0",
                margin: "0 0 0 2.5vw",
                padding: "1rem",
                textTransform: "none",
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

const NavLink = ({ children, isButtonText, variant, component, onClick, darkNav }) => {
    const theme = useTheme();

    return (
        <Link
            variant={variant}
            component={component}
            sx={{
                color: isButtonText ? "inherit" : darkNav ? theme.palette.black.main : theme.palette.secondary.main,
                textDecoration: "none",
                margin: isButtonText ? 0 : "0 2.5vw",
                "&:hover": {
                    cursor: "pointer",
                    opacity: !isButtonText && 0.6,
                },
            }}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

const DrawerOptions = ({ navItems, setDrawerOpen, darkNav, smoothScrollTo }) => {
    return (
        <Box>
            <List sx={{ display: "flex", flexDirection: "column", margin: "0 2rem 0 0" }}>
                {navItems.map(({ label, location }) => (
                    <ListItem key={label} sx={{ marginBottom: "1rem" }}>
                        <NavLink
                            darkNav={darkNav}
                            variant="h6"
                            onClick={() => {
                                setDrawerOpen(false);
                                setTimeout(() => {
                                    smoothScrollTo(location);
                                }, 50);
                            }}
                        >
                            {label}
                        </NavLink>
                    </ListItem>
                ))}
                <ListItem sx={{ margin: 0 }}>
                    <NavContactButton
                        darkNav={!darkNav}
                        onClick={() => {
                            setDrawerOpen(false);
                            setTimeout(() => {
                                smoothScrollTo("contact");
                            }, 50);
                        }}
                    >
                        <NavLink isButtonText={true} component="p" variant="h6">
                            Reach out
                        </NavLink>
                    </NavContactButton>
                </ListItem>
            </List>
        </Box>
    );
};

const Navbar = () => {
    const theme = useTheme();
    const scrollY = useScrollY();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [darkNav, setDarkNav] = useState(false);

    useEffect(() => {
        setDarkNav(scrollY >= 1000);
    }, [scrollY]);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const NameLogoSX = {
        color: darkNav ? theme.palette.black.main : theme.palette.secondary.main,
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.7,
        },
    };

    const navItems = [
        {
            label: "Home",
            location: "home",
        },
        {
            label: "About",
            location: "about",
        },
        {
            label: "Experience",
            location: "experience",
        },
        {
            label: "Projects",
            location: "projects",
        },
    ];

    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };

    return (
        <Box
            component="nav"
            sx={{
                position: "fixed",
                top: "0",
                width: "100%",
                zIndex: 100,
            }}
            className={darkNav ? "glass-bg" : ""}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: { xs: "0.5rem 0 0.5rem 1.25rem", md: "1rem 0 1rem 3rem" },
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <Typography
                        variant="h4"
                        component="a"
                        onClick={() => smoothScrollTo("home")}
                        sx={{ ...NameLogoSX }}
                    >
                        VM
                    </Typography>
                </Box>
                <Hidden mdDown>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {navItems.map(({ label, location }) => {
                            return (
                                <NavLink
                                    darkNav={darkNav}
                                    key={label}
                                    variant="h6"
                                    onClick={() => smoothScrollTo(location)}
                                >
                                    {label}
                                </NavLink>
                            );
                        })}
                        <NavContactButton darkNav={!darkNav} onClick={() => smoothScrollTo("contact")}>
                            <NavLink isButtonText={true} component="p" variant="h6">
                                Reach out
                            </NavLink>
                        </NavContactButton>
                    </Box>
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        edge="start"
                        color="#inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ mr: "1rem" }}
                    >
                        <MenuIcon
                            sx={{
                                fontSize: "35px",
                                color: darkNav ? theme.palette.black.main : theme.palette.secondary.main,
                            }}
                        />
                    </IconButton>
                    <Drawer
                        anchor={"right"}
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        PaperProps={{
                            sx: {
                                backgroundColor: darkNav ? theme.palette.secondary.main : theme.palette.black.main,
                            },
                        }} // set the background color here
                    >
                        <IconButton
                            onClick={handleDrawerToggle}
                            aria-label="close"
                            sx={{ margin: "2rem 1rem 0rem auto" }}
                        >
                            <CloseIcon
                                sx={{
                                    fontSize: "35px",
                                    color: darkNav ? theme.palette.black.main : theme.palette.secondary.main,
                                }}
                            />
                        </IconButton>
                        <DrawerOptions
                            navItems={navItems}
                            setDrawerOpen={setDrawerOpen}
                            darkNav={darkNav}
                            smoothScrollTo={smoothScrollTo}
                        />
                    </Drawer>
                </Hidden>
            </Box>
        </Box>
    );
};

export default Navbar;
