import { z } from "zod";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create({
  /*
  transformer: {
    serialize: () => {},
    deserialize: () => {},
  },
  */
});

export const Point = z
  .tuple([z.number(), z.number(), z.number()])
  .brand("Point");
export type Point = z.infer<typeof Point>;

export const appRouter = t.router({
  getPoint: t.procedure.query(async () => {
    return {
      point: [1, 2, 3] as Point,
    };
  }),
});

export type AppRouter = typeof appRouter;
