import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Main } from "../../components/containers";
import { Heading, Section, Title, Text } from "./styles";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  function paragraphs(content) {
    if (typeof content === "string") {
      const arrayOfP = content.split("<br/>");
      return arrayOfP;
    } else return null;
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => console.error(err));
  }, []);
  if (article)
    return (
      <Main>
        {/* <Heading></Heading> */}
        <Section>
          <Title> {article.title} </Title>
          {paragraphs(article.content)?.map((p, i) => (
            <Text key={i}>{p}</Text>
          ))}
        </Section>
      </Main>
    );

  return null;
}

export default Article;
