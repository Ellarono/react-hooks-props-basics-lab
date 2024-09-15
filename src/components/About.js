import React from "react";
import Links from "../components/Links.js"; // Import the Links component

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Conditionally render the bio only if it's provided */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Render the Links component and pass down the links props */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
