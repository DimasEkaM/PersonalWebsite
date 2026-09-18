import { describe, it, expect } from "vitest";
import { experiences } from "./experience";

describe("experiences", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it("each experience has required fields", () => {
    for (const exp of experiences) {
      expect(typeof exp.id).toBe("string");
      expect(typeof exp.company).toBe("string");
      expect(typeof exp.role).toBe("string");
      expect(typeof exp.startDate).toBe("string");
      expect(typeof exp.endDate).toBe("string");
      expect(Array.isArray(exp.bullets)).toBe(true);
      expect(typeof exp.order).toBe("number");
    }
  });

  it("each experience has at least one bullet", () => {
    for (const exp of experiences) {
      expect(exp.bullets.length).toBeGreaterThan(0);
    }
  });

  it("start dates follow YYYY-MM format", () => {
    for (const exp of experiences) {
      expect(exp.startDate).toMatch(/^\d{4}-\d{2}$/);
    }
  });

  it("end dates follow YYYY-MM format or are 'Present'", () => {
    for (const exp of experiences) {
      if (exp.endDate !== "Present") {
        expect(exp.endDate).toMatch(/^\d{4}-\d{2}$/);
      }
    }
  });

  it("has unique ids", () => {
    const ids = experiences.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("tech arrays contain only strings when present", () => {
    for (const exp of experiences) {
      if (exp.tech) {
        expect(exp.tech.length).toBeGreaterThan(0);
        for (const t of exp.tech) {
          expect(typeof t).toBe("string");
        }
      }
    }
  });
});
