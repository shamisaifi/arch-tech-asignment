import { Link } from "react-router-dom";
import { AppBar, Toolbar, ListItemButton, ListItemText, Box, Paper } from "@mui/material";

const Navbar = () => {
    const navItems = ["Todos", "Photos", "Users"];

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Paper
                elevation={4}
                sx={{
                    width: { xs: "80%", sm: "80%", md: "40%" },
                    borderRadius: 15,
                    backgroundColor: "white",
                    overflow: "hidden",
                }}
            >
                <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
                    <Toolbar >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                            {navItems.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/${item.toLowerCase() === "todos" ? "" : item.toLowerCase()}`}
                                    sx={{
                                        color: "black",
                                        textAlign: "center",
                                        borderRadius: 20,
                                        paddingX: { xs: 2, sm: 3, md: 4 },
                                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.4rem" },
                                        "&:hover": { backgroundColor: "#f0f0f0" },
                                    }}
                                >
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Paper>
        </Box>
    );
};

export default Navbar;
