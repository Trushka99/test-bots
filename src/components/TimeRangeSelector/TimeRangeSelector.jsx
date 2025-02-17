import style from "./TimeRangeSelector.module.css";
const timeRanges = [
  { label: "24h", value: "24h" },
  { label: "7 days", value: "7d" },
  { label: "30 days", value: "30d" },
  { label: "All time", value: "all_time" },
];

function TimerangeSelector({ onChange, selectBotNull, selectedRange }) {
  const handleSelect = (value) => {
    selectBotNull("");
    onChange(value);
    localStorage.setItem(
      "botDashboardData",
      JSON.stringify({ selectedRange: value })
    );
  };

  return (
    <div className={style.timerange_selector}>
      <span className={style.label}>Time Range:</span>
      {timeRanges.map((range) => (
        <button
          key={range.value}
          className={`${style.btn} ${
            selectedRange === range.value ? style.active : ""
          }`}
          onClick={() => handleSelect(range.value)}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}

export default TimerangeSelector;
