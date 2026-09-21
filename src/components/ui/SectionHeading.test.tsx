import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders the title", () => {
    render(<SectionHeading title="About" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("About");
  });

  it("renders the subtitle when provided", () => {
    render(<SectionHeading title="Skills" subtitle="My tech stack" />);
    expect(screen.getByText("My tech stack")).toBeInTheDocument();
  });

  it("renders the index when provided", () => {
    render(<SectionHeading title="Work" index="01" />);
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<SectionHeading title="Projects" />);
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
  });

  it("does not render index when not provided", () => {
    render(<SectionHeading title="Contact" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.previousElementSibling).not.toBeInTheDocument();
  });

  it("applies center alignment classes", () => {
    render(<SectionHeading title="Center" align="center" />);
    const wrapper = screen.getByRole("heading", { level: 2 }).closest("div")?.parentElement;
    expect(wrapper?.className).toContain("text-center");
  });

  it("applies custom className", () => {
    render(<SectionHeading title="Custom" className="my-class" />);
    const wrapper = screen.getByRole("heading", { level: 2 }).closest("div")?.parentElement;
    expect(wrapper?.className).toContain("my-class");
  });

  it("renders aria-hidden on the index", () => {
    render(<SectionHeading title="Test" index="03" />);
    const indexEl = screen.getByText("03");
    expect(indexEl).toHaveAttribute("aria-hidden", "true");
  });
});
