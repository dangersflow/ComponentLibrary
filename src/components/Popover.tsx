import { Popover } from "@headlessui/react";
import { RxChevronDown } from "react-icons/rx";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const orientationButtonMap = new Map<string, string>([
  ["left", "row-reverse"],
  ["right", "row"],
  ["top", "column-reverse"],
  ["bottom", "column"],
]);

const PopoverButton = styled(motion.button)`
  display: flex;
  flex-direction: ${({ iconOrientation }: { iconOrientation: string }) =>
    orientationButtonMap.get(iconOrientation) || "row"};
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

const PopoverPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 0.5em;
  position: absolute;
  background-color: #023047;
  color: #8ecae6;
  min-width: 350px;
  padding: 0.5em;
  z-index: 100;
`;

const PopoverItem = styled(motion.div)`
  display: flex;
  border-radius: 10px;
  margin: 0.5em;
  padding: 0.5em 1.5em 0.5em 1em;
`;

interface PopoverProps {
  buttonLabel: string;
  children: JSX.Element[];
  iconOrientation?: "left" | "right" | "top" | "bottom";
}

export default function MyPopover({
  buttonLabel,
  children,
  iconOrientation,
}: PopoverProps) {
  return (
    <Popover>
      {({ open, close }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button
            iconOrientation={iconOrientation}
            as={PopoverButton}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", stiffness: 1000, damping: 20 },
            }}
          >
            {buttonLabel}
            <motion.div
              initial={{
                rotateZ: 0,
              }}
              animate={{
                rotateZ: open ? 180 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 70,
              }}
            >
              <RxChevronDown size={"1.5em"} />
            </motion.div>
          </Popover.Button>
          <AnimatePresence>
            {open && (
              <Popover.Panel
                static
                key={"panel"}
                as={PopoverPanel}
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                  transition: { type: "spring", stiffness: 1000, damping: 70 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 70,
                }}
              >
                {children.map((childComponent, index) => {
                  return (
                    <PopoverItem
                      key={index}
                      whileHover={{
                        backgroundColor: "#8ecae638",
                        transition: { duration: 0.2, type: "spring" },
                        cursor: "pointer",
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1, type: "spring" },
                      }}
                      onTap={() => {
                        close();
                      }}
                    >
                      {childComponent}
                    </PopoverItem>
                  );
                })}
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}
