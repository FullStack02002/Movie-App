import { movies } from "@/data/movies";

const delay = (ms: number) => {
    new Promise(resolve => setTimeout(resolve, ms));
}



export const getAllMoviesApi = async () => {
    await delay(8000);
    return movies;
}

export const getMovieByIdAPI = async (id: number) => {
    await delay(500);
    const movie = movies.find(m => m.id === id);
    if (!movie) throw new Error("Movie not found")
    return movie;
}


export const getMoviesByTypeAPI = async (type: string) => {
    await delay(700);
    return movies.filter(m => m.type === type);
};