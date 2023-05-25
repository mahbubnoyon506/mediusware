import React from "react";
import { useParams } from "react-router-dom";

const DetailsContact = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <p>Details page</p>
    </div>
  );
};

export default DetailsContact;
