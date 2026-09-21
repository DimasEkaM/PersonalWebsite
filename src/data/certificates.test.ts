import { describe, it, expect } from "vitest";
import { certificates } from "./certificates";

describe("certificates", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(certificates)).toBe(true);
    expect(certificates.length).toBeGreaterThan(0);
  });

  it("each certificate has required fields", () => {
    for (const cert of certificates) {
      expect(typeof cert.id).toBe("string");
      expect(typeof cert.title).toBe("string");
      expect(typeof cert.issuer).toBe("string");
      expect(typeof cert.url).toBe("string");
      expect(typeof cert.order).toBe("number");
    }
  });

  it("each certificate has a valid URL", () => {
    for (const cert of certificates) {
      expect(cert.url).toMatch(/^https?:\/\//);
    }
  });

  it("each certificate has a non-empty title", () => {
    for (const cert of certificates) {
      expect(cert.title.length).toBeGreaterThan(0);
    }
  });

  it("has unique ids", () => {
    const ids = certificates.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("category is a string when present", () => {
    for (const cert of certificates) {
      if (cert.category !== undefined) {
        expect(typeof cert.category).toBe("string");
      }
    }
  });
});
