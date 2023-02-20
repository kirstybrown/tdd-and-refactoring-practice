import { Product } from "../src/Product";

describe("Product should", () => {
  // TODO: Product spec
  test("TODO: name it later",async () => {
    const product = new Product(10);

    expect(product.total()).toBe(12.1);
  })

  test("TODO: name it later, second test",async () => {
    const product = new Product(20);

    expect(product.total()).toBe(24.2);
  })
});

test("test framework working", async () => {
  expect(true).toBe(true);
});
