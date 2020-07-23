import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
import "../Profile.css";

//
const Profile = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [gitInfo, setGitInfo] = useState({});

  useEffect(() => {
    if (name) {
      async function fetchData() {
        const res = await Axios.get(`https://api.github.com/users/${name}`);

        res.data && setGitInfo(res.data);
      }
      fetchData();
    }
  }, [name]);

  return (
    <div>
      <form>
        <div className="search">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter your Github username name"
          />
          <button
            className="search__button"
            onClick={(e) => {
              e.preventDefault();
              setName(text);
              setText("");
            }}
          >
            <SearchOutlined className="search__icon" />
          </button>
        </div>
      </form>

      <ProfileCard gitInfo={gitInfo} />
    </div>
  );
};

export default Profile;
