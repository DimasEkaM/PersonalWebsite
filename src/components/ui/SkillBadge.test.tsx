import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillBadge } from "./SkillBadge";

describe("SkillBadge", () => {
  it("renders the skill name", () => {
    render(<SkillBadge name="React.js" />);
    expect(screen.getByText("React.js")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<SkillBadge name="TypeScript" />);
    const el = screen.getByText("TypeScript");
    expect(el.tagName).toBe("SPAN");
  });

  it("applies custom className", () => {
    render(<SkillBadge name="Vue.js" className="extra" />);
    const el = screen.getByText("Vue.js");
    expect(el.className).toContain("extra");
  });

  it("always renders with base classes", () => {
    render(<SkillBadge name="Next.js" />);
    const el = screen.getByText("Next.js");
    expect(el.className).toContain("inline-flex");
    expect(el.className).toContain("rounded-sm");
  });

  it("renders different skill names", () => {
    const skills = ["React", "Vue", "Angular", "Svelte"];
    render(
      <div>
        {skills.map((s) => (
          <SkillBadge key={s} name={s} />
        ))}
      </div>
    );
    for (const skill of skills) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
  });
});
