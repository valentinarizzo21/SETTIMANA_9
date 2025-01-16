import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MyAlert from "../components/MyAlert";

describe("Testing mounting phase", () => {
  it("mounts correctly", () => {
    render(<MyAlert />);
    const h4 = screen.getByText("Esempio di componente MyAlert");
    expect(h4).toBeInTheDocument();
  });
  //   it('shows initially label "MOSTRA" in the button', () => {
  //     render(<MyAlert />);
  //     const button = screen.getByText(/mostra/i);
  //     expect(button).toBeInTheDocument();
  //   });
  //   it("doesn't show the card initially", () => {
  //     render(<MyAlert />);
  //     const img = screen.queryByRole("img");
  //     expect(img).not.toBeInTheDocument();
  //   });
});
