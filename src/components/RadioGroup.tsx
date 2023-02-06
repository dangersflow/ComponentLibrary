import MyRadioGroupOption from "./RadioGroupOption";
import styled from "styled-components";
import { RadioGroup } from "@headlessui/react";
import { animate, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import { BiCheck, BiCheckCircle } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Row } from "./Primitives";

const RadioGroupWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid #8ecae6;
  background-color: #023047;
  align-items: start;
  justify-content: center;
  padding: 2em;
  width: 600px;
`;

const RadioGroupStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`;

const RadioGroupLabelStyled = styled(motion.span)`
  color: #8ecae6;
  font-size: 1.5em;
  padding: 0.5em;
`;

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
`;

const RadioGroupOptionActive = styled(motion.div)`
  display: flex;
  flex-direction: row;
  background-color: #8ecae6;
  height: 100%;
  position: absolute;
  border-radius: 10px;
`;

const plans = [
  {
    name: "Basic",
    price: 0,
  },
  {
    name: "Premium",
    price: 9.99,
  },
  {
    name: "Ultimate",
    price: 19.99,
  },
];

export default function MyRadioGroup() {
  const [plan, setPlan] = useState(plans[0]);

  return (
    <RadioGroupWrapper>
      <RadioGroup as={RadioGroupStyled} value={plan} onChange={setPlan}>
        <RadioGroup.Label as={RadioGroupLabelStyled}>
          Please select a plan
        </RadioGroup.Label>
        {plans.map((plan) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `checked` state to conditionally style the checked option. */
          <RadioGroup.Option key={plan["name"]} value={plan} as={Fragment}>
            {({ active, checked }) => (
              <MyRadioGroupOption active={active} checked={checked}>
                <Row>{plan["name"]}</Row>
                <Row
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 70,
                  }}
                >
                  {plan["price"] + "$ / mo"}
                  <AnimatePresence>
                    {checked && (
                      <motion.div
                        initial={{ width: "0px" }}
                        animate={{ width: "auto", paddingLeft: "1em" }}
                        exit={{ width: "0px", paddingLeft: "0em" }}
                        style={{
                          display: "flex",
                          overflow: "hidden",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 700,
                          damping: 70,
                        }}
                      >
                        <IoIosCheckmarkCircle size={"1em"} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Row>
              </MyRadioGroupOption>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </RadioGroupWrapper>
  );
}
