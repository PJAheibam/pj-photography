import { useState, useEffect } from "react";
import { Main } from "../../components/containers";
import {
  Button,
  Content,
  Desc,
  HeaderImage,
  HeaderImageContainer,
  Item,
  Section,
  Title,
} from "./styles";

function Blog() {
  const [articles, setArticles] = useState(null);

  function shortText(text) {
    if (typeof text === "string") {
      console.log(text.slice(0, 100));
      // if (text.length > 100) return text.slice(0, 100).join("...");
      // else return text;
    } else return null;
  }

  // side effects
  useEffect(() => {
    fetch("articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Main>
      <Section>
        {articles &&
          articles.map((article, i) => (
            <Item key={i}>
              <HeaderImageContainer>
                <HeaderImage />
              </HeaderImageContainer>
              <Content>
                <Title>{article.title}</Title>
                <Desc>{shortText(article.content)}</Desc>
                <Button to={"/blog/" + article._id}>Read More</Button>
              </Content>
            </Item>
          ))}
      </Section>
    </Main>
  );
}

export default Blog;
