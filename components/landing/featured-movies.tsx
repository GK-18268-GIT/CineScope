import { Button } from "@/components/ui/button";
import { MovieList } from "./movies-list";


export default function FeaturedMovies() {
    return(
        <section id="featured-movies" className="container max-w-350 px-4 mx-auto min-h-screen w-full">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
                    <p className="text-muted-foreground">Explore the latest and greatest movies that are making waves in the cinema world.</p>
                </div>

                {/* View All Buttons */}
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md shadow-2xs cursor-pointer">
                    View All
                </Button>

            </div>

            <div className="space-y-6">
                    {/* TODO: Movie Search Filter */}
                    <div className="w-full h-30.5 bg-purple-400 rounded-b-lg"></div>

                    {/* Movies List */}
                    <MovieList />
                </div>

        </section>
    )
} 