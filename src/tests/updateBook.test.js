import { describe, it, expect, beforeAll } from "vitest";
import { bookDefaultExpects } from "./utils/bookDefaultExpects";
import { errorDefaultExpects } from "./utils/errorDefaultExpects";
import { request } from "./setupFiles";

describe("update book", () => {
   beforeAll(async () => {
      await request.post("/products").send({
         name: "Harry Potter",
         pages: 325,
         category: "fantasia",
      });
   });

   it("should be able to update a book correctly", async () => {
      const data = await request
         .patch("/products/1")
         .send({
            pages: 450,
         })
         .expect(200)
         .then((response) => response.body);

      bookDefaultExpects(data);

      expect(data.pages).toBe(450);
   });

   it("should throw error when the id is incorrect", async () => {
      const data = await request
         .patch("/products/2")
         .send({
            pages: 450,
         })
         .expect(404)
         .then((response) => response.body);

      errorDefaultExpects(data);
   });
});
