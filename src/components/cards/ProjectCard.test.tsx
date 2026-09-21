import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/types";

const mockProject: Project = {
  id: "test-project",
  title: "Test Project",
  description: "A test project description",
  category: "web",
  technologies: ["React.js", "TypeScript", "Tailwind"],
  highlights: ["Feature one", "Feature two", "Feature three", "Feature four"],
  featured: true,
  order: 0,
};

const mockProjectNoHighlights: Project = {
  id: "no-highlights",
  title: "No Highlights",
  description: "No highlights here",
  category: "mobile",
  technologies: ["Flutter"],
  order: 1,
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("A test project description")).toBeInTheDocument();
  });

  it("capitalizes the category label", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Web")).toBeInTheDocument();
  });

  it("capitalizes other categories", () => {
    render(<ProjectCard project={mockProjectNoHighlights} />);
    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });

  it("renders all technologies", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });

  it("renders only first 3 highlights", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Feature one")).toBeInTheDocument();
    expect(screen.getByText("Feature two")).toBeInTheDocument();
    expect(screen.getByText("Feature three")).toBeInTheDocument();
    expect(screen.queryByText("Feature four")).not.toBeInTheDocument();
  });

  it("renders no highlights section when absent", () => {
    render(<ProjectCard project={mockProjectNoHighlights} />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("renders no highlights when empty array", () => {
    const project = { ...mockProject, highlights: [] };
    render(<ProjectCard project={project} />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});
