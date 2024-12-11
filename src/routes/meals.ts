import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "crypto";

export async function mealsRoutes(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      isOnDietMeal: z.boolean(),
    });

    const { name, description, isOnDietMeal } = createMealBodySchema.parse(
      request.body
    );

    await knex("meals").insert({
      id: randomUUID(),
      name,
      description,
      date: new Date(),
      isOnDietMeal,
    });

    return reply.status(201).send();
  });
}
