import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AllContactModal = () => {
  const [allData, setAllData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      await axios
        .get("https://contact.mediusware.com/api/contacts/")
        .then((res) => setAllData(res.data.results));
    })();
  }, []);

  const allContacts = location.state;

  return (
    <div className="container">
      <div className="d-flex justify-content-center py-5">
        <div>
          <button
            type="button"
            class="btn me-2 text-white"
            onClick={() => navigate('/allcontacts', { state: allData })}
            style={{background: '#46139f'}}
          >
            All Contacts
          </button>
          <button
            type="button"
            class="btn text-white me-2"
            onClick={() => navigate('/uscontacts')}
            style={{background: '#ff7f50'}}
          >
            US Contacts
          </button>
          <button
            type="button"
            class="btn"
            onClick={() => navigate("/")}
            style={{background: '#fff', border: '1px solid #46139f'}}
          >
            Close
          </button>
        </div>
      </div>
      <div>

      </div>
      <div>
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>#</th>
              <th scope="col">Phone</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            {allContacts.map((item, index) => (
              <tr style={{cursor: 'pointer'}} onClick={() => navigate(`/details/${item.id}`)}>
                <td>{index + 1}</td>
                <td>{item.phone}</td>
                <td>{item.country.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllContactModal;
