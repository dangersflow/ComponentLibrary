import { useState } from "react";
import { Dialog } from "@headlessui/react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const DialogStyled = styled(motion.div)`
  position: fixed;
  background-color: #023047;
  color: #8ecae6;
  width: auto;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  z-index: 100;
  border-radius: 20px;
  padding: 2em;
  border: 5px solid #8ecae6;
`;
const DialogPanelButton = styled(motion.button)`
  width: auto;
  font-size: 1em;
  color: #8ecae6;
  gap: 1em;
  padding: 0.5em 1em 0.5em 1em;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  border: 2px solid #8ecae6;
  margin-right: 1em;
  background-color: #023047;
`;

interface DialogProps {
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MyDialog(props: DialogProps) {
  return (
    <AnimatePresence mode="wait">
      {props.open && (
        <Dialog
          as={DialogStyled}
          open={props.open}
          onClose={() => props.setIsOpen(false)}
          initial={{
            opacity: 0,
            scale: 0.5,
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            transition: {
              type: "spring",
              mass: 3,
              stiffness: 1000,
              damping: 70,
              restSpeed: 0.001,
              restDelta: 0.001,
            },
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 1000,
            damping: 70,
            restSpeed: 0.001,
            restDelta: 0.001,
          }}
        >
          <Dialog.Panel>
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <DialogPanelButton
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 1400, damping: 70 },
              }}
              onClick={() => props.setIsOpen(false)}
            >
              Deactivate
            </DialogPanelButton>
            <DialogPanelButton
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 1400, damping: 70 },
              }}
              onClick={() => props.setIsOpen(false)}
            >
              Cancel
            </DialogPanelButton>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
