import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders as a button by default", () => {
    render(<Button>Click me</Button>);
    const el = screen.getByRole("button", { name: "Click me" });
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("BUTTON");
  });

  it("renders as an anchor when href is provided (internal)", () => {
    render(<Button href="/about">Go to about</Button>);
    const el = screen.getByRole("link", { name: "Go to about" });
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("href", "/about");
  });

  it("renders as an anchor for external URLs", () => {
    render(<Button href="https://example.com">External</Button>);
    const el = screen.getByRole("link", { name: "External" });
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("href", "https://example.com");
  });

  it("passes target and rel props for external links", () => {
    render(
      <Button href="https://example.com" target="_blank" rel="noopener noreferrer">
        External
      </Button>
    );
    const el = screen.getByRole("link", { name: "External" });
    expect(el).toHaveAttribute("target", "_blank");
    expect(el).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders as an anchor for mailto links", () => {
    render(<Button href="mailto:test@example.com">Email</Button>);
    const el = screen.getByRole("link", { name: "Email" });
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    const el = screen.getByRole("button");
    expect(el.className).toContain("bg-accent");
  });

  it("applies secondary variant classes", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const el = screen.getByRole("button");
    expect(el.className).toContain("border");
  });

  it("applies ghost variant classes", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const el = screen.getByRole("button");
    expect(el.className).toContain("text-muted");
  });

  it("applies size classes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button").className).toContain("h-8");

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole("button").className).toContain("h-10");

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button").className).toContain("h-12");
  });

  it("handles click events", async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(<Button onClick={() => (clicked = true)}>Click</Button>);
    await user.click(screen.getByRole("button"));
    expect(clicked).toBe(true);
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies custom className", () => {
    render(<Button className="my-custom-class">Custom</Button>);
    expect(screen.getByRole("button").className).toContain("my-custom-class");
  });
});
