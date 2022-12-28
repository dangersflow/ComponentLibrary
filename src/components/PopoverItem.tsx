import { Col, Row } from "./Primitives";
import styled from "styled-components";

const PopoverItemTitle = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
`;

const PopoverItemSubtitle = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  color: #8ecae6b4;
`;

interface PopoverItemProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PopoverItem({
  icon,
  title,
  subtitle,
}: PopoverItemProps) {
  return (
    <Row
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: "2em",
      }}
    >
      <Col>{icon}</Col>
      <Col
        style={{
          alignContent: "center",
          justifyContent: "center",
          gap: "0.5em",
          paddingTop: "0.5em",
          paddingBottom: "0.5em",
        }}
      >
        <PopoverItemTitle>{title}</PopoverItemTitle>
        <PopoverItemSubtitle>{subtitle}</PopoverItemSubtitle>
      </Col>
    </Row>
  );
}
