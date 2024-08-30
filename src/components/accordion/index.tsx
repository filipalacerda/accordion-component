/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/css";
import { ReactNode, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

type AccordionProps = {
  title: string;
  content: ReactNode;
  isDisabled?: boolean;
  isOpenDefault?: boolean;
};

const Styles = {
  accordion: {
    border: "1px solid #eeeeee",
    padding: "5px",
    borderRadius: "3px",
    transition: "max-height 0.5s ease",
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
  isOpenDefault,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault || false);

  // Add keyboard support
  // Fix transitions
  // Add unit tests

  return (
    <section css={Styles.accordion}>
      <button
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        css={Styles.button}
        onClick={() => setIsOpen(!isOpen)}
        disabled={isDisabled}
      >
        {title}
        {isOpen ? (
          <IoIosArrowUp title="Close accordion" size={24} />
        ) : (
          <IoIosArrowDown title="Open accordion" size={24} />
        )}
      </button>
      {isOpen && (
        <div css={Styles.content} id="accordion-content">
          {content}
        </div>
      )}
    </section>
  );
};

export default Accordion;
