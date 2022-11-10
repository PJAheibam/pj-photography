import React from "react";
import { Main } from "../../components/containers";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <Main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading type="spinningBubbles" />
    </Main>
  );
}

export default Loading;
