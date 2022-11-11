import React from "react";
import {
  Container,
  Content,
  Heading,
  Image,
  ImageContainer,
  Section,
  SubHeading,
  Text,
  Title,
} from "./styles";

function PortfolioSection() {
  return (
    <Container>
      <Heading>Portfolio</Heading>
      <SubHeading>Here is some of my work</SubHeading>
      <Section>
        <ImageContainer>
          <Image
            src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h7-port-feautured-img-1.jpg"
            alt="tom & elezabeth"
          />
        </ImageContainer>
        <Content>
          <Title>TOM & ELEZABETH</Title>
          <Text>Wedding Stories</Text>
        </Content>
      </Section>

      <Section reverse>
        <ImageContainer>
          <Image src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h7-port-feautured-img-2.jpg" />
        </ImageContainer>
        <Content>
          <Title>EUGENE & KATHLEEN</Title>
          <Text>Wedding Stories</Text>
        </Content>
      </Section>
      <Section>
        <ImageContainer>
          <Image src="https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h7-port-feautured-img-3.jpg" />
        </ImageContainer>
        <Content>
          <Title>LARRY & ASHLEY</Title>
          <Text>Wedding Stories</Text>
        </Content>
      </Section>
    </Container>
  );
}

export default PortfolioSection;
