import React from "react";
import "./MemberCard.css";

const MemberCard = ({ name, role, avatar }) => {
  return (
    <div className="member-card">
      <img src={avatar} alt={name} className="member-avatar" />
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
