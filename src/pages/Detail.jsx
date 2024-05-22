import React from "react";
import { useParams } from "react-router-dom";

// * Detail 컴포넌트를 path parameter 로 id 를 받도록 하세요.
// * Detail 컴포넌트는 path parameter 로 받은 id 를 콘솔로그로 찍으세요.

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Detail</div>;
};

export default Detail;
