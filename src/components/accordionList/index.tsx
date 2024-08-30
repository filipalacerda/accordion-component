/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Accordion from "../accordion";

import type { AccordionProps } from "../accordion";

type AccordionListProps = {
  items: AccordionProps[];
};

const Styles = {
  accordion: css({
    marginBottom: "5px",
  }),
};

const AccordionList = ({ items }: AccordionListProps) => {
  return (
    <div>
      {items.map((accordion) => (
        <div css={Styles.accordion} key={accordion.title}>
          <Accordion
            title={accordion.title}
            content={accordion.content}
            isDisabled={accordion.isDisabled}
            defaultExpanded={accordion.defaultExpanded}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
