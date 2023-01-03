import { Disclosure } from "@headlessui/react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DisclosureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function MyDisclosure() {
  return (
    <Disclosure as={DisclosureWrapper}>
      <Disclosure.Button>Is team pricing available?</Disclosure.Button>
      <Disclosure.Panel>
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  );
}
