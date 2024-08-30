import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";
import userEvent from "@testing-library/user-event";

describe("Accordion", () => {
  const title = "Title 1";
  const content = "This is the content";

  describe("when component renders", () => {
    let container: HTMLElement;

    beforeEach(() => {
      container = render(
        <Accordion title={title} content={content} />
      ).container;
    });

    it("should render the component", () => {
      expect(container).toMatchSnapshot();
    });

    it("should render the provided title", () => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it("should render the open accordion icon", () => {
      expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
    });

    it("should render a closed accordion", () => {
      expect(screen.queryByTestId("accordion-content")).not.toBeInTheDocument();
    });

    it("should not render the close accordion icon", () => {
      expect(screen.queryByTestId("arrow-up")).not.toBeInTheDocument();
    });
  });

  describe("with disabled property", () => {
    it("should not open the accordion when user clicks", async () => {
      render(<Accordion title={title} content={content} isDisabled />);

      expect(screen.queryByTestId("arrow-up")).not.toBeInTheDocument();
      await userEvent.click(screen.getByTestId("accordion-button"));

      expect(screen.queryByTestId("arrow-up")).not.toBeInTheDocument();
      expect(screen.queryByTestId("accordion-content")).not.toBeInTheDocument();
      expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
    });
  });

  describe("with defaultExpanded", () => {
    it("should render the accordion opened", () => {
      render(<Accordion title={title} content={content} defaultExpanded />);

      // Open accordion icon
      expect(screen.queryByTestId("arrow-down")).not.toBeInTheDocument();
      // Close accordion icon
      expect(screen.getByTestId("arrow-up")).toBeInTheDocument();

      expect(screen.getByTestId("accordion-content")).toBeInTheDocument();
    });
  });

  describe("keydown events", () => {
    let container: HTMLElement;
    let button: HTMLElement;

    beforeEach(() => {
      container = render(
        <Accordion title={title} content={content} />
      ).container;

      button = screen.getByTestId("accordion-button");
    });

    describe("when the user presses arrowDown key", () => {
      it("should open the accordion", async () => {
        await fireEvent.keyDown(button, {
          key: "ArrowDown",
          code: "ArrowDown",
        });

        expect(screen.getByTestId("accordion-content")).toBeInTheDocument();
      });
    });

    describe("when the user presses ArrowDown key", () => {
      it("should close the accordion", async () => {
        // Open the accordion
        await fireEvent.keyDown(button, {
          key: "ArrowDown",
          code: "ArrowDown",
        });

        expect(screen.getByTestId("accordion-content")).toBeInTheDocument();

        // close the accordion

        await fireEvent.keyDown(button, {
          key: "ArrowUp",
        });
        expect(
          screen.queryByTestId("accordion-content")
        ).not.toBeInTheDocument();
      });
    });
  });
});
