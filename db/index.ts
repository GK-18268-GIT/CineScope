// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "1.1.1.1"]);

import { MongoClient } from "mongodb";

const DB_OPTIONS = {}

const MONGODB_URI = process.env.MONGODB_URI || "";

const client = new MongoClient(MONGODB_URI, DB_OPTIONS);

export const db = client.db("sample_mflix");