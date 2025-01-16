import React, { useState } from "react";
import mockData from "../types/mockData";
import { CrewMember } from "../types";

const TeamMatching: React.FC = () => {
  const [skills, setSkills] = useState<string>("");
  const [goals, setGoals] = useState<string>("");
  const [suggestedCrew, setSuggestedCrew] = useState<CrewMember[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Filter mock data based on entered skills
    const suggestions = mockData.filter((member) =>
      member.skills.some((skill) => skills.toLowerCase().includes(skill.toLowerCase()))
    );

    setSuggestedCrew(suggestions); // Update state
  };

  return (
    <div className="team-matching">
      <h1>Find Your Nakama</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="skills">Skills:</label>
        <input
          id="skills"
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <label htmlFor="goals">Goals:</label>
        <input
          id="goals"
          type="text"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />

        <button type="submit">Find Crew</button>
      </form>

      <div className="suggestions">
        <h2>Your Suggested Crew</h2>
        <ul>
          {suggestedCrew.map((member) => (
            <li key={member.id}>
              {member.name} - {member.skills.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamMatching;