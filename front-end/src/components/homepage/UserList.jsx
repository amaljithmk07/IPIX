import React, { useEffect, useState } from "react";
import "./UserList.css";
import axios from "axios";
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(` https://api.escuelajs.co/api/v1/users`)
      .then((data) => {
        console.log(data.data);
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="userlist-main-body">
        <div className="userlist-heading-sec">USERS</div>
        <div className="userlist-content">
          {user.map((data) => (
            <div className="userlist-card">
              <img src={data.avatar} alt="" className="userlist-avatar" />
              <div className="userlist-card-data">{data.name}</div>
              <div className="userlist-card-data">{data.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
