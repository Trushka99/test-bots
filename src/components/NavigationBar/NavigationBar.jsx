import { useState } from "react";
import {
  FaChartBar,
  FaShoppingCart,
  FaDollarSign,
  FaCogs,
  FaBars,
} from "react-icons/fa";
import style from "./NavigationBar.module.css";
const navItems = [
  { label: "Dashboard", icon: <FaBars />, value: "dashboard" },
  { label: "Megabot", icon: <FaChartBar />, value: "megabot" },
  { label: "Bot market", icon: <FaShoppingCart />, value: "market" },
  { label: "Coin prices", icon: <FaDollarSign />, value: "prices" },
  { label: "Profile", icon: <FaCogs />, value: "profile", notifications: 3 },
];

function NavigationBar() {
  const [active, setActive] = useState("dashboard");

  return (
    <nav className={style.navbar}>
      {navItems.map((item) => (
        <div
          key={item.value}
          className={`${style.nav_item} ${
            active === item.value ? style.active : ""
          }`}
          onClick={() => setActive(item.value)}
        >
          {item.icon}
          {item.notifications && (
            <span className={style.badge}>{item.notifications}</span>
          )}
          <span className={style.label}>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default NavigationBar;
