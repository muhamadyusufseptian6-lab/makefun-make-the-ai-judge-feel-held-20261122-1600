import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Somewhere, a cat is asleep in a patch of afternoon sun, and the light has " +
  "nowhere else it needs to be. You may be like that cat for a while — warm, " +
  "unhurried, watched over by nothing but the quiet room. The day will keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
