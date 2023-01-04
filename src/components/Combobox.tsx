import { useState } from "react";
import { Combobox } from "@headlessui/react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BiSearch } from "react-icons/bi";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
  "Sherwood Schaefer",
  "Colin Jones",
  "Mallory Kuhic",
  "Meghan Littel",
  "Briana Howell",
  "Isaias Wolff",
  "Russel Schaden",
  "Herminio Armstrong",
  "Jack Christiansen",
  "Carmella Kshlerin",
  "Laurie Kulas",
  "Keagan Langosh",
  "Lauriane Kihn",
];

const ComboboxInput = styled(motion.input)`
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

const ComboboxOptions = styled(motion.div)`
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

const ComboboxWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ComboboxOption = styled(motion.div)`
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
  &:focus {
    border: 1px solid #8ee3e6;
    box-shadow: 0 0 0 1px #8ecae6;
  }
  &:active {
    background-color: #8ecae638;
  }
`;

const InputBox = motion(Combobox.Input);

export default function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        }).length !== 0
      ? people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        })
      : ["No results found :("];

  return (
    <Combobox onChange={setSelectedPerson}>
      {({ open }) => (
        <ComboboxWrapper>
          <Combobox.Input
            as={ComboboxInput}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a person"
            whileFocused={{
              border: "1px solid #8ecae6",
              boxShadow: "0 0 0 1px #8ecae6",
            }}
          />
          <AnimatePresence>
            {open && (
              <Combobox.Options
                layout
                as={ComboboxOptions}
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
                {filteredPeople.map((person, index) => (
                  <Combobox.Option
                    layout
                    as={ComboboxOption}
                    key={person}
                    value={person}
                    tabIndex={index}
                    transition={{
                      type: "spring",
                      stiffness: 1000,
                      damping: 100,
                    }}
                  >
                    {person}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
          </AnimatePresence>
        </ComboboxWrapper>
      )}
    </Combobox>
  );
}
