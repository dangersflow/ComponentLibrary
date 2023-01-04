import { useState } from "react";
import { Switch } from "@headlessui/react";
import styled from "styled-components";
import { HTMLMotionProps, motion, MotionAdvancedProps } from "framer-motion";

const SwitchWrapper = styled(motion.div)`
  display: flex;
  font-size: 1.5em;
  color: #8ecae6;
  flex-direction: column;
  gap: 1em;
`;

const SwitchButton = styled(motion.div)`
  display: flex;
  width: auto;
  border-radius: 20px;
`;

const SwitchTrack = styled(motion.span)<SwitchTrackProps>`
  display: flex;
  width: 4em;
  height: 1.5em;
  padding: 0.6em;
  border-radius: 40px;
  background-color: #023047;
  align-items: center;
`;

const SwitchThumb = styled(motion.span)`
  display: flex;
  width: 2em;
  height: 2em;
  border-radius: 2em;
  background-color: #8ee3e6;
  transition: background-color 0.15s ease;
  box-shadow: 0 0 0 1px #8ecae638;
`;

const SwitchLabel = styled(motion.span)`
  display: flex;
  width: auto;
  font-size: 1em;
  color: #8ecae6;
`;

interface SwitchTrackProps extends HTMLMotionProps<"span"> {
  enabled?: boolean;
}

export default function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <SwitchWrapper>
      <Switch checked={enabled} onChange={setEnabled} as={SwitchButton}>
        <SwitchTrack
          style={{ justifyContent: enabled ? "flex-end" : "flex-start" }}
          animate={{ backgroundColor: enabled ? "#8ee3e6" : "#023047" }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          <SwitchThumb
            layout
            transition={{ type: "spring", stiffness: 700, damping: 70 }}
            animate={{ backgroundColor: enabled ? "#023047" : "#8ee3e6" }}
          />
        </SwitchTrack>
      </Switch>
    </SwitchWrapper>
  );
}
