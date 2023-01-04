import { Disclosure } from "@headlessui/react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DisclosureCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #8ecae6;
  background-color: #023047;
  margin: 0.5em;
  padding: 1em 1.5em 1em 1em;
  align-items: center;
`;

const DisclosureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 360px;
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
      "Yes! You can purchase a license that you can share with your entire team.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards.",
  },
];

export default function MyDisclosure() {
  return (
    <DisclosureCard
      layout
      transition={{ type: "spring", stiffness: 1000, damping: 70 }}
    >
      {disclosureQuestionsAnswers.map((questionAnswer) => (
        <Disclosure as={DisclosureWrapper}>
          <Disclosure.Button>{questionAnswer.question}</Disclosure.Button>
          <Disclosure.Panel>{questionAnswer.answer}</Disclosure.Panel>
        </Disclosure>
      ))}
    </DisclosureCard>
  );
}
