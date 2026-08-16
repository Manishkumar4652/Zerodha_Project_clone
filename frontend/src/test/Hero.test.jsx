import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../landing_page/home/Hero.jsx";

describe("Hero Component", () => {
  test("should display Invest in everything", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/images/hero.png");
  });
});
