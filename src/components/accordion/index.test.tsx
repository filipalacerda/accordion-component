import React from "react";
import { render, screen } from "@testing-library/react";
import Accordion from ".";

describe("Accordion", () => {
  describe("when component renders", () => {
    let container: HTMLElement;

    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      container = render(
        <Accordion title="Title 1" content="This is the content" />
      ).container;
    });
  });

  describe("with disabled property", () => {});

  describe("with isOpenDefault", () => {});
});
