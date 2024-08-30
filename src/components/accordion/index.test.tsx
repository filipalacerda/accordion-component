import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

describe("Accordion", () => {
  describe("when component renders", () => {
    let container: HTMLElement;

    beforeEach(() => {
      container = render(
        <Accordion title="Title 1" content="This is the content" />
      ).container;
    });

    it("should render the component", () => {
      expect(container).toMatchSnapshot();
    });

    it("should render the provided title", () => {
      expect(screen.getByText("Title 1")).toBeInTheDocument();
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

  describe("with disabled property", () => {});

  describe("with isOpenDefault", () => {});

  describe("keydown events", () => {
    let container: HTMLElement;
    let button: HTMLElement;
    beforeEach(() => {
      container = render(
        <Accordion title="Title 1" content="This is the content" />
      ).container;

      button = screen.getByTestId("accordion-button");
    });
    describe("when the user presses enter key", () => {
      it("should open the accordion", async () => {
        await fireEvent.keyDown(button, {
          key: "Enter",
          code: "Enter",
          charCode: 13,
        });

        expect(screen.getByTestId("accordion-content")).toBeInTheDocument();
      });
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
