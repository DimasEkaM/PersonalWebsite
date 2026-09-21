import { describe, it, expect } from "vitest";
import { profile } from "./profile";
import type { Profile } from "@/types";

describe("profile", () => {
  it("is a valid Profile object", () => {
    const p: Profile = profile;
    expect(p).toBeDefined();
  });

  it("has required string fields", () => {
    expect(typeof profile.name).toBe("string");
    expect(typeof profile.title).toBe("string");
    expect(typeof profile.shortSummary).toBe("string");
    expect(typeof profile.longBio).toBe("string");
    expect(typeof profile.location).toBe("string");
    expect(typeof profile.phone).toBe("string");
    expect(typeof profile.email).toBe("string");
  });

  it("has a valid email format", () => {
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("has valid URL fields", () => {
    expect(profile.linkedIn).toMatch(/^https?:\/\//);
    expect(profile.github).toMatch(/^https?:\/\//);
    if (profile.resumePdf) {
      expect(profile.resumePdf).toMatch(/^https?:\/\//);
    }
  });

  it("has a valid availability value", () => {
    const validValues = ["open", "open-to-offers", "not-open"];
    expect(validValues).toContain(profile.availability);
  });

  it("has a non-empty name", () => {
    expect(profile.name.length).toBeGreaterThan(0);
  });

  it("has a non-empty title", () => {
    expect(profile.title.length).toBeGreaterThan(0);
  });

  it("has photo as optional string", () => {
    if (profile.photo !== undefined) {
      expect(typeof profile.photo).toBe("string");
    }
  });
});
