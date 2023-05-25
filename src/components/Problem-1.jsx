import axios from "axios";
import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState("all");

  console.log(status);

  const handleClick = (val) => {
    setShow(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      status,
    };
    fakeData.push(data);
  };

  const getSortData = fakeData.filter((item) => item.status == show);

  const reArrangeData = [...fakeData].sort((a, b) => {
    if (a.status === "active" && b.status === "completed") {
      return -1;
    } else if (a.status === "completed" && b.status === "active") {
      return 1;
    }
    return 0;
  });

  let content = "";
  if (show == "all") {
    content = (
      <>
        {reArrangeData.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </>
    );
  } else {
    content = (
      <>
        {getSortData.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setStatus(e.target.value.toLowerCase())}
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => {
                  handleClick("all");
                }}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => {
                  handleClick("active");
                }}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => {
                  handleClick("completed");
                }}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>#</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;

const fakeData = [
  {
    id: 1,
    name: "Noyon",
    status: "active",
  },
  {
    id: 3,
    name: "John",
    status: "completed",
  },
  {
    id: 2,
    name: "Mahbub",
    status: "active",
  },
  {
    id: 4,
    name: "Michael",
    status: "completed",
  },
  {
    id: 2,
    name: "Alim",
    status: "active",
  },
  {
    id: 4,
    name: "Hela",
    status: "completed",
  },
];
