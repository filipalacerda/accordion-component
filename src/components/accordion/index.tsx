/** @jsxImportSource @emotion/react */
import React from "react";
import { ReactNode, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type AccordionProps = {
  title: string;
  content: ReactNode;
  isDisabled?: boolean;
  defaultExpanded?: boolean;
};

const Styles = {
  accordion: {
    border: "1px solid #eeeeee",
    padding: "5px",
    borderRadius: "3px",
  },
  button: {
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    background: "white",
    cursor: "pointer",
  },
  content: {
    display: "flex",
    padding: "20px 5px",
  },
};

const Accordion = ({
  title,
  content,
  isDisabled,
  defaultExpanded,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded || false);

  /**
   * Adds keydown event support for
   * enter, arrow up and arrow down keys
   * @param e
   */
  const handleOnKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
      setIsOpen(false);
    }

    if (e.key === "ArrowDown" || e.key === "Enter") {
      setIsOpen(true);
    }
  };

  return (
    <section css={Styles.accordion}>
      <button
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        aria-disabled={isDisabled}
        css={Styles.button}
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDisabled}
        onKeyDown={(e) => handleOnKeyDown(e as unknown as KeyboardEvent)}
        data-testid="accordion-button"
      >
        {title}

        {isOpen ? (
          <IoIosArrowUp
            title="Close accordion icon"
            size={24}
            data-testid="arrow-up"
          />
        ) : (
          <IoIosArrowDown
            title="Open accordion icon"
            size={24}
            data-testid="arrow-down"
          />
        )}
      </button>
      {isOpen && (
        <div
          css={Styles.content}
          id="accordion-content"
          data-testid="accordion-content"
        >
          {content}
        </div>
      )}
    </section>
  );
};

export default Accordion;
