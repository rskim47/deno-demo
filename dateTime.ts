import {
  dayOfYear,
} from "https://deno.land/std@0.68.0/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-02-02")));
console.log(dayOfYear(new Date()));
