import MyDialog from "./Modal";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DialogButtonStyled = styled(motion.button)`
  display: flex;
  width: auto;
  font-size: 1.5em;
  color: #8ecae6;
  gap: 1em;
  padding: 0.5em 1em 0.5em 1em;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: #023047;
`;

export default function DialogButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DialogButtonStyled
        onClick={() => setIsOpen(true)}
        whileTap={{
          scale: 0.98,
          transition: { type: "spring", stiffness: 1400, damping: 70 },
        }}
      >
        Open Dialog
      </DialogButtonStyled>
      <MyDialog open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
