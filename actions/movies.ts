"use server"

import { MovieActionResponse } from "./type";

export async function getMovies() {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/v1/movies?limit=18`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: { revalidate: 60 }

        });

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const {movies}: MovieActionResponse = await response.json();

        return movies;

    } catch(error) {
        console.log("Error fetching movies: " ,error)
        return [];
    }
}