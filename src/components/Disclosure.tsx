import { Disclosure } from "@headlessui/react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";

const DisclosureCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid #8ecae6;
  background-color: #023047;
  margin: 0.5em;
  padding: 2em;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  width: 600px;
`;

const DisclosureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DisclosureButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3em;
  font-size: 1.3em;
  color: #8ecae6;
  gap: 1em;
  padding: 0.5em 1em 0.5em 1em;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: none;
  border: 2px solid #8ecae6;
  background-color: #023047;
`;

const DisclosurePanel = styled(motion.div)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: #023047;
  color: #8ecae6;
  width: 100%;
  align-items: center;
  overflow: hidden;
  font-size: 1.1em;
  z-index: 100;
`;

const disclosureQuestionsAnswers = [
  {
    question: "Is team pricing available?",
    answer:
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! You can purchase a license that you can share with your entire team. The free trial is 14 days.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards.",
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 14-day money back guarantee.",
  },
];

export default function MyDisclosure() {
  return (
    <DisclosureCard
      layout
      transition={{ type: "spring", stiffness: 1000, damping: 70 }}
    >
      {disclosureQuestionsAnswers.map((questionAnswer) => (
        <Disclosure
          as={DisclosureWrapper}
          transition={{ type: "spring", stiffness: 1000, damping: 70 }}
        >
          {({ open }) => (
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 70,
              }}
            >
              <Disclosure.Button as={DisclosureButton}>
                {questionAnswer.question}
                <motion.div
                  initial={{
                    rotateZ: 0,
                  }}
                  animate={{
                    rotateZ: open ? -180 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 1400,
                    damping: 70,
                  }}
                >
                  <BiChevronDown size={"2em"} />
                </motion.div>
              </Disclosure.Button>
              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    layout
                    as={DisclosurePanel}
                    key="content"
                    initial={{ opacity: 0, height: "0px" }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      padding: "2em 0em 1em 0.5em",
                    }}
                    exit={{ opacity: 0, height: "0px", padding: "0px" }}
                    transition={{
                      type: "spring",
                      stiffness: 1400,
                      damping: 70,
                    }}
                  >
                    <motion.div
                      style={{
                        borderLeft: "2px solid #8ecae6",
                        paddingLeft: "1em",
                      }}
                    >
                      {questionAnswer.answer}
                    </motion.div>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </Disclosure>
      ))}
    </DisclosureCard>
  );
}
