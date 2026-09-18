import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import {
  Skeleton,
  ProfileSkeleton,
  SectionSkeleton,
  ProjectsSkeleton,
  SkillsSkeleton,
} from "./Skeleton";

describe("Skeleton", () => {
  it("renders a div with animate-pulse", () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe("DIV");
    expect(el.className).toContain("animate-pulse");
  });

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="h-4 w-32" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain("h-4");
    expect(el.className).toContain("w-32");
  });

  it("has aria-hidden for accessibility", () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("aria-hidden", "true");
  });
});

describe("ProfileSkeleton", () => {
  it("renders a section element", () => {
    const { container } = render(<ProfileSkeleton />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders multiple skeleton children", () => {
    const { container } = render(<ProfileSkeleton />);
    const skeletons = container.querySelectorAll(".animate-pulse");
    expect(skeletons.length).toBeGreaterThan(2);
  });
});

describe("SectionSkeleton", () => {
  it("renders a section element", () => {
    const { container } = render(<SectionSkeleton />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders 4 skeleton rows", () => {
    const { container } = render(<SectionSkeleton />);
    const rows = container.querySelectorAll(".space-y-4 > div");
    expect(rows.length).toBe(4);
  });
});

describe("ProjectsSkeleton", () => {
  it("renders a section element", () => {
    const { container } = render(<ProjectsSkeleton />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders 3 skeleton rows", () => {
    const { container } = render(<ProjectsSkeleton />);
    const rows = container.querySelectorAll(".border-b.border-line.py-8");
    expect(rows.length).toBe(3);
  });
});

describe("SkillsSkeleton", () => {
  it("renders a section element", () => {
    const { container } = render(<SkillsSkeleton />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders 5 category skeletons", () => {
    const { container } = render(<SkillsSkeleton />);
    const categories = container.querySelectorAll(".grid > div");
    expect(categories.length).toBe(5);
  });
});
