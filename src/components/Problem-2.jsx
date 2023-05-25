import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Problem2 = () => {
  const [allData, setAllData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .get("https://contact.mediusware.com/api/contacts/")
        .then((res) => setAllData(res.data.results));
    })();
  }, []);
  console.log(allData);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => navigate('/allcontacts', { state: allData })}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => navigate('/uscontacts', { state: allData })}
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
