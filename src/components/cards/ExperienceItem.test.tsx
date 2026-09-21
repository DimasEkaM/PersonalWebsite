import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceItem } from "./ExperienceItem";
import type { Experience } from "@/types";

const mockExperience: Experience = {
  id: "test-exp",
  company: "Test Company Inc.",
  companyShort: "Test Co",
  location: "Jakarta, Indonesia",
  role: "Frontend Developer",
  startDate: "2023-01",
  endDate: "2024-06",
  bullets: ["Built amazing things", "Improved performance"],
  tech: ["React.js", "TypeScript"],
  order: 0,
};

const mockExperienceNoTech: Experience = {
  ...mockExperience,
  id: "no-tech",
  tech: undefined,
};

const mockExperiencePresent: Experience = {
  ...mockExperience,
  id: "present",
  endDate: "Present",
};

describe("ExperienceItem", () => {
  it("renders the role", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });

  it("renders the company short name when provided", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.getByText("Test Co")).toBeInTheDocument();
  });

  it("falls back to full company name when companyShort is absent", () => {
    const exp = { ...mockExperience, companyShort: undefined };
    render(<ExperienceItem experience={exp} />);
    expect(screen.getByText("Test Company Inc.")).toBeInTheDocument();
  });

  it("renders formatted dates", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.getByText("Jan 2023 · Jun 2024")).toBeInTheDocument();
  });

  it("renders 'Present' for current positions", () => {
    render(<ExperienceItem experience={mockExperiencePresent} />);
    expect(screen.getByText("Jan 2023 · Present")).toBeInTheDocument();
  });

  it("renders location when provided", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.getByText("Jakarta, Indonesia")).toBeInTheDocument();
  });

  it("does not render location when absent", () => {
    const exp = { ...mockExperience, location: undefined };
    render(<ExperienceItem experience={exp} />);
    expect(screen.queryByText("Jakarta, Indonesia")).not.toBeInTheDocument();
  });

  it("renders all bullets", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.getByText("Built amazing things")).toBeInTheDocument();
    expect(screen.getByText("Improved performance")).toBeInTheDocument();
  });

  it("renders tech badges when tech array exists", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("does not render tech badges when tech is absent", () => {
    render(<ExperienceItem experience={mockExperienceNoTech} />);
    expect(screen.queryByText("React.js")).not.toBeInTheDocument();
  });

  it("renders the index when provided", () => {
    render(<ExperienceItem experience={mockExperience} index="01" />);
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("does not render index when not provided", () => {
    render(<ExperienceItem experience={mockExperience} />);
    expect(screen.queryByText("01")).not.toBeInTheDocument();
  });
});

describe("formatDate (via ExperienceItem)", () => {
  it("formats month 12 correctly", () => {
    const exp = { ...mockExperience, startDate: "2023-12", endDate: "2024-12" };
    render(<ExperienceItem experience={exp} />);
    expect(screen.getByText("Dec 2023 · Dec 2024")).toBeInTheDocument();
  });

  it("formats month 01 correctly", () => {
    const exp = { ...mockExperience, startDate: "2020-01", endDate: "2020-01" };
    render(<ExperienceItem experience={exp} />);
    expect(screen.getByText("Jan 2020 · Jan 2020")).toBeInTheDocument();
  });
});
