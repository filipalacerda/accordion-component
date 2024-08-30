import userEvent from "@testing-library/user-event";
import AccordionList from ".";
import { render, screen } from "@testing-library/react";

describe("AccordionList", () => {
  const items = [
    {
      title: "Title 1",
      content: "This is the content 1",
    },
    {
      title: "Title 2",
      content: "This is the content 2",
    },
    {
      title: "Title 3",
      content: "This is the content 3",
    },
  ];
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<AccordionList items={items} />).container;
  });

  it("should render the component", () => {
    expect(container).toMatchSnapshot();
  });

  it("should render a list of accordions", () => {
    expect(screen.getAllByTestId("accordion").length).toEqual(items.length);

    expect(screen.getByText(items[0].title)).toBeInTheDocument();
  });

  it("should toggle the accordions state", async () => {
    await userEvent.click(
      screen.getByRole("button", { name: "Title 1 Open accordion icon" })
    );

    expect(screen.getByText(items[0].content)).toBeInTheDocument();
  });
});
