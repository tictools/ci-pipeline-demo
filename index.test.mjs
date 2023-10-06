import { strict as assert } from "node:assert";
import test from "node:test";
import { concatenate } from "./index.mjs";

test("test demo", (t) => {
  const word1 = "Hello";
  const word2 = "World";

  const EXPECTED_RESULT = "Contenating... Hello World";

  assert.equal(concatenate(word1, word2), EXPECTED_RESULT);
});
