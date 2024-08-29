import { css } from "@emotion/css";
import { ReactNode, useState } from "react";

import { ReactComponent as ArrowUp } from "../../assets/up-arrow.svg";
import { ReactComponent as ArrowDown } from "../../assets/down-arrow.svg";

type AccordionProps = {
  title: string;
  content: ReactNode;
  isDisabled?: boolean;
  isOpenDefault?: boolean;
};

const Accordion = ({
  title,
  content,
  isDisabled,
  isOpenDefault,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault || false);

  return <div></div>;
};

export default Accordion;
