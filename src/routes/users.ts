import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "crypto";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string(),
    });

    const { name, email } = createUserBodySchema.parse(request.body);

    await knex("meals").insert({
      id: randomUUID(),
      name,
      email,
    });

    return reply.status(201).send();
  });
}
