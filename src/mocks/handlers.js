import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_LOCALAPI, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          task: "descansar",
        },
        {
          id: 2,
          task: "dormir",
        },
      ])
    );
  }),
];
