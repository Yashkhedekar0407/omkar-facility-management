import React from "react";
import CountUp from "react-countup";

function StatsBar() {
  return (
    <div className="stats-bar">

      <div className="stat">
        <h2><CountUp end={10} duration={3} />+</h2>
        <p>Years Experience</p>
      </div>

      <div className="stat">
        <h2><CountUp end={500} duration={3} />+</h2>
        <p>Happy Clients</p>
      </div>

      <div className="stat">
        <h2><CountUp end={1000} duration={3} />+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat">
        <h2>100%</h2>
        <p>Commitment & Quality</p>
      </div>

    </div>
  );
}

export default StatsBar;