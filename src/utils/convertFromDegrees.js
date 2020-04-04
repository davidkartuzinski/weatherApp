import React from "react";

// https://gist.github.com/basarat/4670200

const ConvertDegrees = angle => {
  if (typeof angle === "string") angle = parseInt(angle);
  if (angle <= 0 || angle > 360 || typeof angle === "undefined") return "☈";
  const arrows = {
    north: "↑ wind from the North",
    north_east: "↗ wind from the Northeast",
    east: "→ wind from the East",
    south_east: "↘ wind from the Southeast",
    south: "↓ wind from the South",
    south_west: "↙ wind from the Southwest",
    west: "← wind from the West",
    north_west: "↖ wind from the Northwest"
  };
  const directions = Object.keys(arrows);
  const degree = 360 / directions.length;
  angle = angle + degree / 2;
  for (let i = 0; i < directions.length; i++) {
    if (angle >= i * degree && angle < (i + 1) * degree)
      return arrows[directions[i]];
  }
  return arrows["north"];
};

export default ConvertDegrees;
