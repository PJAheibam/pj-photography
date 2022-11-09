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
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        const matchedData = data.find((item) => item._id === id);
        console.log(data);
        setArticle(matchedData);
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
