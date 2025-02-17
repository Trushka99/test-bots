import React from "react";
import Header from "../Header/Header";
import Chart from "../Chart/Chart";
import Bots from "../Bots/Bots";
import TimeRangeSelector from "../TimeRangeSelector/TimeRangeSelector";
import NavigationBar from "../NavigationBar/NavigationBar";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = React.useState("all_time");
  const [selectedBot, setSelectedBot] = React.useState("");
  React.useEffect(() => {
    const savedData = localStorage.getItem("botDashboardData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setSelectedRange(parsedData.selectedRange);
    }
  }, []);

  return (
    <div className={style.dashboard}>
      <Header />
      <Chart selectedRange={selectedRange} selectedBot={selectedBot} />
      <Bots selectedRange={selectedRange} setSelectedBot={setSelectedBot} />
      <TimeRangeSelector
        onChange={setSelectedRange}
        selectedRange={selectedRange}
        selectBotNull={setSelectedBot}
      />
      <NavigationBar />
    </div>
  );
};

export default Dashboard;
