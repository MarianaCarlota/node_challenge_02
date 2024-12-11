import { env } from "./env";
import { app } from "./app";
import fastify from "fastify";
import knex from "knex";

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });

// const app = fastify();

// app.get("/hello", async function () {
//   const tables = await knex("sqlite_schema").select("*");
//   return tables;
// });

// app
//   .listen({
//     port: 3333,
//   })
//   .then(() => {
//     console.log("Server running");
//   });
