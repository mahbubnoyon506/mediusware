import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailsContact = () => {
  const { id } = useParams();
  const location = useLocation()
  console.log(location.state);
  return (
    <div>
      <p>Details page</p>
    </div>
  );
};

export default DetailsContact;
