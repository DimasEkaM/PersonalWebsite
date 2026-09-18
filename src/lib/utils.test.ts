import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("returns a single class name", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("merges multiple class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters out falsy values", () => {
    expect(cn("foo", false, null, undefined, "", 0)).toBe("foo");
  });

  it("handles an empty input", () => {
    expect(cn()).toBe("");
  });

  it("overrides duplicate classes (last wins via clsx)", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-red-500 text-blue-500");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    expect(cn("base", isActive && "active")).toBe("base active");
  });

  it("handles conditional classes when false", () => {
    const isActive = false;
    expect(cn("base", isActive && "active")).toBe("base");
  });

  it("handles objects as input", () => {
    expect(cn({ foo: true, bar: false })).toBe("foo");
  });

  it("handles arrays as input", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("handles mixed input types", () => {
    const result = cn("base", { active: true, disabled: false }, ["extra"]);
    expect(result).toBe("base active extra");
  });
});
