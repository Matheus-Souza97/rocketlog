// import { PrismaClient } from "@prisma/client/extension";
// import { log } from "node:console";

// export const prisma = new PrismaClient({
//   log: process.env.NODE_ENV === "production" ? [] : ["query"]
// })

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter, log: process.env.NODE_ENV === "production" ? [] : ["query"]});

export { prisma };