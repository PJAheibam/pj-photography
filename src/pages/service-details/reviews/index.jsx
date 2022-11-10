import React, { useState } from "react";
import Rating from "../../../components/rating";
import Swiper from "react-id-swiper";

function Reviews() {
  const [value, setValue] = useState(3.4);
  return (
    <div>
      <Rating value={value} setValue={setValue} />
    </div>
  );
}

export default Reviews;
