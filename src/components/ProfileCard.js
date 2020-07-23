import React from "react";
import "./ProfileCard.css";
import { GithubOutlined } from "@ant-design/icons";

const ProfileCard = ({ gitInfo }) => {
  return (
    <div
      className="card"
      style={{ visibility: gitInfo.login ? "visible " : "hidden" }}
    >
      <a href={gitInfo.html_url} target="_blank" rel="noopener noreferrer">
        <GithubOutlined className="icon" />
      </a>

      <div className="card__cover"></div>
      <a href={gitInfo.avatar_url} target="_blank" rel="noopener noreferrer">
        <img className="card__img" src={gitInfo.avatar_url} alt="img" />
      </a>

      <div className="card__info">
        <h1>{gitInfo.name}</h1>
        <p>{gitInfo.location}</p>
        <p>{gitInfo.bio}</p>
      </div>

      <div className="card__footer">
        <div className="card__footer__elems">
          <div className="card__footer__count">{gitInfo.followers}</div>
          <div className="card__footer__text"> Followers</div>
        </div>
        <div className="card__footer__elems">
          <div className="card__footer__count">{gitInfo.following}</div>
          <div className="card__footer__text">Following</div>
        </div>

        <div className="card__footer__elems">
          <div className="card__footer__count">{gitInfo.public_repos}</div>
          <div className="card__footer__text">Repositories</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
