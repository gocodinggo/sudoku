import React from "react";

export const NewGameBtn = () => {
  return (
    <button
      className="new_game_btn"
      onClick={() => console.log("clicked new game")}
    >
      New Game
    </button>
  );
};
