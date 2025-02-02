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
    Box,
} from "@mui/material";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function Todos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get<Todo[]>(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setTodos(response.data.slice(0, 30));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box sx={{ width: "90%", maxWidth: "900px", mx: "auto", mt: 4, }}>
            <Typography variant="h4" align="center" gutterBottom>
                Todo List
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, maxHeight: "70vh" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead sx={{backgroundColor: "gray"}}>
                        <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo) => (
                            <TableRow key={todo.id} hover>
                                <TableCell sx={{fontSize: "1.2rem"}}>{todo.id}</TableCell>
                                <TableCell sx={{fontSize: "1.2rem"}} >{todo.title}</TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "inline-block",
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 2,
                                            fontWeight: "bold",
                                            color: todo.completed ? "#155724" : "#721c24",
                                            bgcolor: todo.completed ? "#d4edda" : "#f8d7da",
                                        }}
                                    >
                                        {todo.completed ? "Conpleted" : "Pending"}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Todos;
