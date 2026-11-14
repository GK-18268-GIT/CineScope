import { NextResponse } from "next/server";
// import { MOVIES_DATA } from "@/lib/data";
import { db } from "@/db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || "50";
  try {
    const movies = await db
      .collection("movies")
      .find()
      .limit(parseInt(limit))
      .sort({release: -1})
      .toArray()
      .catch((error) => {
        console.log("Database query failed:", error);
        throw new Error("Failed to retrieve movies from the database.");
      });

    return NextResponse.json({
      message: "Movies retrieve successfully.",
      success: true,
      movies,
    });
  } catch (error) {
    console.log("Error retriving movies:", (error as Error).message);
    return NextResponse.json(
      {
        message: "Failed to retrieve movies.",
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
