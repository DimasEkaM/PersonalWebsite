import { describe, it, expect } from "vitest";
import { educations } from "./education";

describe("educations", () => {
  it("is an array", () => {
    expect(Array.isArray(educations)).toBe(true);
  });

  it("each education has required fields", () => {
    for (const edu of educations) {
      expect(typeof edu.id).toBe("string");
      expect(typeof edu.institution).toBe("string");
      expect(typeof edu.degree).toBe("string");
      expect(typeof edu.field).toBe("string");
      expect(typeof edu.startYear).toBe("number");
      expect(typeof edu.endYear).toBe("number");
      expect(typeof edu.order).toBe("number");
    }
  });

  it("start year is before end year", () => {
    for (const edu of educations) {
      expect(edu.startYear).toBeLessThanOrEqual(edu.endYear);
    }
  });

  it("years are reasonable (1900-2100)", () => {
    for (const edu of educations) {
      expect(edu.startYear).toBeGreaterThanOrEqual(1900);
      expect(edu.startYear).toBeLessThanOrEqual(2100);
      expect(edu.endYear).toBeGreaterThanOrEqual(1900);
      expect(edu.endYear).toBeLessThanOrEqual(2100);
    }
  });

  it("GPA is between 0 and 4 when present", () => {
    for (const edu of educations) {
      if (edu.gpa !== undefined) {
        expect(edu.gpa).toBeGreaterThanOrEqual(0);
        expect(edu.gpa).toBeLessThanOrEqual(4);
      }
    }
  });

  it("has unique ids", () => {
    const ids = educations.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
