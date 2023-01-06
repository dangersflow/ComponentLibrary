import { useState } from "react";
import { Listbox } from "@headlessui/react";
import styled from "styled-components";
import { TbSelector } from "react-icons/tb";
import { motion, AnimatePresence, animate } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: false },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
  { id: 6, name: "Leopoldo_Corkery", unavailable: false },
  { id: 7, name: "Elwyn.Skiles", unavailable: false },
  { id: 8, name: "Maxime_Nienow", unavailable: false },
  { id: 9, name: "Delphine", unavailable: false },
];

const ListboxButton = styled(motion.button)`
  display: inline-flex;
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
  position: relative;
  overflow: hidden;
`;

const ListboxOptions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 0.5em;
  background-color: #023047;
  color: #8ecae6;
  min-width: 350px;
  padding: 1em 2em 1em 1em;
  position: absolute;
  top: 4em;
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  z-index: 100;
`;

const ListboxOption = styled(motion.div)`
  display: flex;
  border-radius: 10px;
  margin: 0.5em;
  padding: 1em 0em 1em 1em;
  font-size: 1.2em;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #8ecae638;
  }
`;

const ListboxWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [prevSelectedPerson, setPrevSelectedPerson] = useState(people[0]);

  return (
    <Listbox
      value={selectedPerson}
      onChange={(person) => {
        setPrevSelectedPerson(selectedPerson);
        setSelectedPerson(person);
      }}
    >
      {({ open }) => (
        <ListboxWrapper>
          <Listbox.Button
            as={ListboxButton}
            whileTap={{
              scale: 0.98,
              transition: { type: "spring", stiffness: 1000, damping: 20 },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPerson.name}
                style={{
                  whiteSpace: "nowrap",
                }}
                initial={{
                  y: 100,
                  width: `${prevSelectedPerson.name.length}ch`,
                }}
                animate={{
                  y: 0,
                  width: `${selectedPerson.name.length}ch`,
                }}
                exit={{
                  y: -100,
                  width: `${selectedPerson.name.length}ch`,
                  transition: {
                    duration: 0.2,
                    type: "spring",
                    stiffness: 1000,
                    damping: 70,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 70,
                }}
              >
                {selectedPerson.name}
              </motion.div>
            </AnimatePresence>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "-1.5em",
              }}
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
              <TbSelector size={"1.5em"} />
            </motion.div>
          </Listbox.Button>
          <AnimatePresence mode="wait">
            {open && (
              <Listbox.Options
                as={ListboxOptions}
                static
                key={"panel"}
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
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    value={person}
                    disabled={person.unavailable}
                    as={ListboxOption}
                  >
                    {({ active, selected }) => (
                      <>
                        <AnimatePresence mode="wait">
                          {active && !selected && (
                            <motion.div
                              key={selected.valueOf + "check"}
                              initial={{ width: "auto" }}
                              animate={{ width: "auto", paddingRight: "1em" }}
                              exit={{
                                width: "0px",
                                paddingRight: "0px",
                                transition: {
                                  type: "spring",
                                  stiffness: 700,
                                  damping: 70,
                                },
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 70,
                              }}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <HiOutlineCheck size={"1em"} />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {selected && (
                          <motion.div
                            style={{
                              paddingRight: "1em",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <AiFillCheckCircle size={"1em"} />
                          </motion.div>
                        )}
                        {person.name}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </AnimatePresence>
        </ListboxWrapper>
      )}
    </Listbox>
  );
}
