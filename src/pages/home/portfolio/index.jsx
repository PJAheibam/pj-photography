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
      <Heading>Wedding Photoshoot</Heading>
      <SubHeading>
        I have complete wedding photoshoot packages from pre-wedding photography
        to holud wedding photography, couple photography, bridal photoshoot, and
        you name it. Explore how we capture your holy bond of love and make the
        special day of your life even more special.
      </SubHeading>
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
          <Title style={{ textAlign: "right" }}>EUGENE & KATHLEEN</Title>
          <Text style={{ textAlign: "right" }}>Wedding Stories</Text>
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
