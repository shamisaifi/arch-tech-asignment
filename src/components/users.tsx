import { useEffect, useState } from "react";
import axios from "axios";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Typography,
    Box
} from "@mui/material";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: { name: string };
    address: { city: string; street: string };
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get<User[]>(
                `${import.meta.env.VITE_API_KEY}/users`
            );
            setUsers(response.data.slice(0, 50));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box sx={{ width: "90%", maxWidth: "1200px", mx: "auto", mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Users List
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, maxHeight: "70vh" }}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Username</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Email</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Phone</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Website</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Company</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Address</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.id}
                                hover
                            >
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.id}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.name}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.username}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.email}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.phone.slice(0, 12)}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.website}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>{user.company.name}</TableCell>
                                <TableCell sx={{ fontSize: "1.1rem", fontWeight: "400" }}>
                                    {user.address.street}, {user.address.city}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Users;
