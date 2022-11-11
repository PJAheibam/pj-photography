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
import { shortText } from "../../utils/short-text";
import Loading from "../loading";
import useTitleChanger from "../../hooks/use-title";

function Blog() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  // side effects
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useTitleChanger("Blog");

  if (loading) return <Loading />;
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
