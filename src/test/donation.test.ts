import { describe, expect, it } from "vitest";
import { DONATION_AMOUNTS, formatFcfa } from "@/lib/site-data";

describe("Donation amounts", () => {
  it("offers presets of 5 000, 10 000, 25 000 and 50 000 FCFA", () => {
    expect(DONATION_AMOUNTS).toEqual([5000, 10000, 25000, 50000]);
  });
  it("displays amounts in FCFA", () => {
    expect(formatFcfa(25000)).toBe("25 000 FCFA");
  });
});
