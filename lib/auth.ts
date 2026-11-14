import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { client, db } from "@/db"; // your mongodb client

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: { 
    enabled: true, 
  }, 

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    freshAge: 0
  },
  plugins: [nextCookies()],

});