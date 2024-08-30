/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Accordion from "./components/accordion";
import AccordionList from "./components/accordionList";

const Styles = {
  block: css({
    padding: "10px",
  }),
  smallBlock: css({
    width: "400px",
  }),
};

function App() {
  return (
    <div className="App">
      <div css={Styles.block}>
        <h5>Simple accordion component</h5>
        <Accordion title="Title 1" content="This is the content" />
      </div>

      <div css={Styles.block}>
        <h5>With long title</h5>
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          content="This is the content"
        />
      </div>

      <div css={Styles.block}>
        <h5>With large content</h5>
        <Accordion
          title="Title 2"
          content={
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
        />
      </div>

      <div css={[Styles.block, Styles.smallBlock]}>
        <h5>With constrained parent width</h5>
        <Accordion
          title="Title 2"
          content={
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          }
        />
      </div>

      <div css={Styles.block}>
        <h5>With Disabled</h5>
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          content="This is the content"
          isDisabled
        />
      </div>

      <div css={Styles.block}>
        <h5>With open by default</h5>
        <Accordion
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          content="This is the content"
          defaultExpanded
        />
      </div>

      <div css={Styles.block}>
        <h5>List of accordions</h5>
        <AccordionList
          items={[
            {
              title: "Title 1",
              content: "This is the content",
            },
            {
              title: "Title 2",
              content: "This is the content",
            },
            {
              title: "Title 3",
              content: "This is the content",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
