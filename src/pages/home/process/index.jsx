import React from "react";
import { Ball, Container, Item, Section, Title, Text } from "./styles";
import { Heading, SubHeading } from "../portfolio/styles";

function Process() {
  return (
    <Container>
      <Heading>Photography Process</Heading>
      <SubHeading>
        Wedding in Bangladesh is one of the events which is celebrated with
        great fanfare. And naturally, every couple does a lot of pre-planning
        for this special day. Respecting their emotion, we first discuss with
        all our clients, know their requirements, and then start working on the
        project together as partners.
      </SubHeading>
      <Section>
        {data.map((item, i) => (
          <Item key={i}>
            <Ball>{i + 1}</Ball>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </Item>
        ))}
      </Section>
    </Container>
  );
}

export default Process;

const data = [
  {
    title: "Concept",
    text: "So, we start with planning the concept obviously keeping the client’s needs and interests in mind.",
  },
  {
    title: "Prepare",
    text: "Next, our entire team got down to the preparation of what we needed on that day.",
  },
  {
    title: "Retouch",
    text: "Finally, we make sure that everything is in order and make some changes if needed.",
  },
  {
    title: "Finalize",
    text: "Before the D-Day arrives, we arrange a pre-wedding discussion with the client and finalize the shoot.",
  },
];
