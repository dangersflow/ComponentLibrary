import styled from "styled-components";
import { motion } from "framer-motion";

export const Col = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;
