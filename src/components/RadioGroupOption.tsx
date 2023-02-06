import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface RadioGroupOptionProps {
  children: React.ReactNode[];
  active: boolean;
  checked: boolean;
  onClick?: () => void;
}

const RadioGroupOption = styled(motion.div)`
  display: flex;
  flex-direction: row;
  color: #8ecae6;
  border-radius: 10px;
  font-size: 1.2em;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.5em 1em 1.5em;
  position: relative;
  border: 3px solid #8ecae688;

  &:hover {
    cursor: pointer;
  }
`;

const RadioGroupOptionActive = styled(motion.div)`
  display: flex;
  flex-direction: row;
  background-color: #8ecae6;
  height: 100%;
  position: absolute;
  border-radius: 10px;
`;

export default function MyRadioGroupOption(props: RadioGroupOptionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <RadioGroupOption
      layout
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 70,
        restSpeed: 0.001,
        restDelta: 0.001,
      }}
      {...props}
      whileHover={{
        scale: 1.03,
      }}
    >
      {props.children}
      <RadioGroupOptionActive />
    </RadioGroupOption>
  );
}
