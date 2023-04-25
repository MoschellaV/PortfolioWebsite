import React, { useState, useEffect } from "react";
import { useScrollY } from "@/context/providers";
import { Typography, Box, Button, Link, Hidden, Drawer, List, ListItem, useTheme, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavContactButton = ({ children, ...props }) => {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: !props.darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                color: props.darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                "&:hover": {
                    backgroundColor: props.darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                    color: !props.darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                },
                borderRadius: "0",
                margin: "0 0 0 2.5vw",
                padding: "1rem",
                textTransform: "none",
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

const NavLink = ({ children, ...props }) => {
    const theme = useTheme();

    return (
        <Link
            variant="h6"
            component="a"
            sx={{
                color: props.darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                textDecoration: "none",
                margin: "0 2.5vw",
                "&:hover": {
                    cursor: "pointer",
                    opacity: 0.7,
                },
            }}
            {...props}
        >
            {children}
        </Link>
    );
};

const DrawerOptions = ({ navItems, setDrawerOpen, darkNav }) => {
    return (
        <Box>
            <List sx={{ display: "flex", flexDirection: "column", margin: "0 2rem 0 0" }}>
                {navItems.map(({ label, location }) => (
                    <ListItem key={label} sx={{ marginBottom: "1rem" }}>
                        <NavLink darkNav={darkNav} variant="h6" href={location} onClick={() => setDrawerOpen(false)}>
                            {label}
                        </NavLink>
                    </ListItem>
                ))}
                <ListItem sx={{ margin: 0 }}>
                    <NavContactButton darkNav={!darkNav} href="#contact" onClick={() => setDrawerOpen(false)}>
                        <NavLink
                            component="p"
                            darkNav={!darkNav}
                            variant="h6"
                            sx={{
                                margin: "normal",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
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
        color: darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.7,
        },
    };

    const navItems = [
        {
            label: "Home",
            location: "#home",
        },
        {
            label: "About",
            location: "#about",
        },
        {
            label: "Experience",
            location: "#experience",
        },
        {
            label: "Projects",
            location: "#projects",
        },
    ];

    return (
        <Box component="nav" sx={{ position: "fixed", top: "0", width: "100%", zIndex: 100 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "2rem 0 2rem 3rem" }}>
                <Typography variant="h4" component="a" href="#home" sx={{ ...NameLogoSX }}>
                    Vince
                    <br /> Moschella
                </Typography>
                <Hidden mdDown>
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        {navItems.map(({ label, location }) => {
                            return (
                                <NavLink darkNav={darkNav} key={label} variant="h6" href={location}>
                                    {label}
                                </NavLink>
                            );
                        })}
                        <NavContactButton darkNav={!darkNav} href="#contact">
                            <NavLink
                                component="p"
                                variant="h6"
                                sx={{
                                    margin: "normal",
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
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
                                color: darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
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
                                backgroundColor: darkNav ? theme.palette.secondary.main : theme.palette.primary.main,
                            },
                        }} // Set the background color here
                    >
                        <IconButton
                            onClick={handleDrawerToggle}
                            aria-label="close"
                            sx={{ margin: "2rem 1rem 0rem auto" }}
                        >
                            <CloseIcon
                                sx={{
                                    fontSize: "35px",
                                    color: darkNav ? theme.palette.primary.main : theme.palette.secondary.main,
                                }}
                            />
                        </IconButton>
                        <DrawerOptions navItems={navItems} setDrawerOpen={setDrawerOpen} darkNav={darkNav} />
                    </Drawer>
                </Hidden>
            </Box>
        </Box>
    );
};

export default Navbar;
