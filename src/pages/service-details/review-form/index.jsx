import React, { useState } from "react";
import Rating from "../../../components/rating";

function ReviewForm() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <Rating value={value} setValue={setValue} />
    </div>
  );
}

export default ReviewForm;
