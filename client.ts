import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter, Point } from "./server";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/trpc",
      /*transformer: {
        serialize: () => {},
        deserialize: () => {},
      },
      */
    }),
  ],
});

export async function test() {
  const result = await trpc.getPoint.query();
  const point: Point = result.point;
  return result;
}
