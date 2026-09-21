import { describe, it, expect } from "vitest";
import { skillCategories } from "./skills";

describe("skillCategories", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(skillCategories)).toBe(true);
    expect(skillCategories.length).toBeGreaterThan(0);
  });

  it("each category has required fields", () => {
    for (const cat of skillCategories) {
      expect(typeof cat.id).toBe("string");
      expect(typeof cat.name).toBe("string");
      expect(Array.isArray(cat.skills)).toBe(true);
      expect(typeof cat.order).toBe("number");
    }
  });

  it("each category has at least one skill", () => {
    for (const cat of skillCategories) {
      expect(cat.skills.length).toBeGreaterThan(0);
    }
  });

  it("each skill has a name", () => {
    for (const cat of skillCategories) {
      for (const skill of cat.skills) {
        expect(typeof skill.name).toBe("string");
        expect(skill.name.length).toBeGreaterThan(0);
      }
    }
  });

  it("skill levels are between 1 and 5", () => {
    for (const cat of skillCategories) {
      for (const skill of cat.skills) {
        if (skill.level !== undefined) {
          expect(skill.level).toBeGreaterThanOrEqual(1);
          expect(skill.level).toBeLessThanOrEqual(5);
        }
      }
    }
  });

  it("has unique category ids", () => {
    const ids = skillCategories.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
