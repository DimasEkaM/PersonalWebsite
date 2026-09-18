import { describe, it, expect } from "vitest";
import { projects } from "./projects";

describe("projects", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("each project has required fields", () => {
    for (const p of projects) {
      expect(typeof p.id).toBe("string");
      expect(typeof p.title).toBe("string");
      expect(typeof p.description).toBe("string");
      expect(typeof p.category).toBe("string");
      expect(Array.isArray(p.technologies)).toBe(true);
      expect(typeof p.order).toBe("number");
    }
  });

  it("categories are valid enum values", () => {
    const validCategories = ["web", "mobile", "fullstack", "cms"];
    for (const p of projects) {
      expect(validCategories).toContain(p.category);
    }
  });

  it("each project has at least one technology", () => {
    for (const p of projects) {
      expect(p.technologies.length).toBeGreaterThan(0);
    }
  });

  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("featured flag is boolean when present", () => {
    for (const p of projects) {
      if (p.featured !== undefined) {
        expect(typeof p.featured).toBe("boolean");
      }
    }
  });

  it("highlights are strings when present", () => {
    for (const p of projects) {
      if (p.highlights) {
        for (const h of p.highlights) {
          expect(typeof h).toBe("string");
        }
      }
    }
  });
});
