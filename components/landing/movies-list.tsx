// import { MOVIES_DATA } from "@/lib/data";
import { MovieCard } from "./movie-card";
import { getMovies } from "@/actions/movies";

export async function MovieList() {
    const movies = await getMovies();

    console.log("Movies", movies)

    return (
        <>
            <div className="text-muted-foreground text-sm">
                Showing 5 of 100 movies
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <MovieCard key={`movie-${movie._id}`} movie={movie} />
                ))}
            </div>

        </>
    )
}