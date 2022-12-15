import { Popover } from "@headlessui/react";
import { RxChevronDown } from "react-icons/rx";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const PopoverButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  width: auto;
  font-size: 1.5em;
  gap: 1.5em;
  padding: 0.5em 1em 0.5em 1em;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: solid black 1px;
`;

const PopoverPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  width: 20em;
  border-radius: 10px;
  gap: 10px;
  margin-top: 0.5em;
`;

const PopoverItem = styled(motion.div)`
  display: flex;
  margin-left: 1.5em;
`;

interface PopoverProps {
  buttonLabel: string;
  children: JSX.Element[];
}

export default function MyPopover({ buttonLabel, children }: PopoverProps) {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button as={PopoverButton}>
            {buttonLabel}
            <motion.div
              initial={{
                rotateZ: 0
              }}
              animate={{
                rotateZ: open ? 180 : 0
              }}
              transition={{
                duration: 0.5,
                type: "spring"
              }}
            >
              <RxChevronDown size={"1.5em"} />
            </motion.div>
          </Popover.Button>
          <AnimatePresence initial={false}>
            {open && (
              <Popover.Panel
                key="modal"
                as={PopoverPanel}
                initial={{
                  y: -50,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  type: "spring",
                  bounce: 0.5
                }}
              >
                {children.map((childComponent) => {
                  return <PopoverItem>{childComponent}</PopoverItem>;
                })}
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}
