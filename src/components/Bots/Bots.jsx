import React, { useState } from "react";
import data from "../../utils/data.min.json";
import style from "./Bots.module.css";
const Bots = ({ selectedRange, setSelectedBot }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setSelectedBot(value);
  };

  return (
    <div className={style.bots_container}>
      {data.bots.map((bot, index) => (
        <div
          onClick={() => handleSelect(bot.name)}
          key={index}
          className={`${style.bot_card} ${
            selected === bot.name ? style.active_bot : null
          }`}
        >
          <div className={`${style.bot_icon} ${bot.name}`}></div>
          <span className={style.bot_name}>{bot.name.toUpperCase()}</span>
          <span
            className={`${style.bot_profit} ${
              bot[selectedRange] >= 0 ? "positive" : "negative"
            }`}
          >
            {bot[selectedRange]}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default Bots;
