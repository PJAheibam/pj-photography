import React, { useState } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Container, Star } from "./styles";

function Rating({ value, setValue, readOnly = false }) {
  const [hover, setHover] = useState(null);
  return (
    <Container style={{ pointerEvents: readOnly ? "none" : "auto" }}>
      {[...Array(5).keys()].map((i) => (
        <Star
          type="button"
          key={i}
          onClick={() => setValue(i + 1)}
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => {
            setHover(null);
          }}
        >
          <Icon hovered={hover} value={value} index={i + 1} />
        </Star>
      ))}
    </Container>
  );
}

function Icon({ hovered, value, index }) {
  if (hovered >= index) return <BsStarFill />;
  if (hovered && hovered !== index) return <BsStar />;
  if (value === 0) return <BsStar />;
  if (value > index) return <BsStarFill />;
  if (value === index) return <BsStarFill />;
  if (value > index - 1 && value < index) return <BsStarHalf />;
  return <BsStar />;
}
export default Rating;
