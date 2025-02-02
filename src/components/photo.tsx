import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Container} from "@mui/material";

const Photo = () => {
    interface Photo {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }

    const [photos, setPhotos] = useState<Photo[]>([]);

    const fetchPhotos = async () => {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/photos");
            setPhotos(result.data.slice(0, 20));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                Photo Gallery
            </Typography>

            <Grid container spacing={5} justifyContent="center">
                {photos.map((photo) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                        <Card
                            sx={{
                                borderRadius: 2, 
                                boxShadow: 2, 
                                transition: "all 0.2s ease-in-out",
                                "&:hover": { boxShadow: 5 },
                            }}
                        >
                            <CardMedia component="img" height="300" image="https://as2.ftcdn.net/v2/jpg/11/07/06/69/1000_F_1107066933_5onu5bR9uioAG8rUt1gnB3MKPAPcVyjK.jpg" alt={photo.title} />

                            <CardContent sx={{backgroundColor: "gray", color: "white"}}>
                                <Typography variant="subtitle1" fontWeight="bold" sx={{ textAlign: "left" }}>
                                    {photo.title.length > 30 ? photo.title.slice(0, 30) + "..." : photo.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Photo;
