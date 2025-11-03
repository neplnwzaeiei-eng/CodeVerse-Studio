import React from "react";
import MemberCard from "./MemberCard";
import "./App.css";

const App = () => {
  const teamMembers = [
    { name: "mairu", role: "Frontend Developer", avatar: "/img/cry1.jpg" },
    { name: "aroy", role: "Backend Developer", avatar: "/img/cry2.jpg" },
    { name: "ketsaran", role: "UI/UX Designer", avatar: "/img/cry3.jpg" },
  ];

  return (
    <div className="app-container">
      <h1 className="title">CodeVerse Studio</h1>
      <div className="team-horizontal">
        {teamMembers.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
