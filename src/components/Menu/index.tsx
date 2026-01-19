import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    console.log("Change theme", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });

    // document.documentElement.setAttribute("data-theme", theme);
  }
  
  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a 
        className={styles.menuLink} 
        href="" 
        aria-label="Go to home" 
        title="Go to home"
      >
        <HouseIcon />
      </a>
      <a 
        className={styles.menuLink} 
        href="" 
        aria-label="View history" 
        title="View history"
      >
        <HistoryIcon />
      </a>
      <a 
        className={styles.menuLink} 
        href="" 
        aria-label="Go to settings" 
        title="Go to settings"
      >
        <SettingsIcon />
      </a>
      <a 
        className={styles.menuLink} 
        href="#" 
        aria-label="Change theme" 
        title="Change theme"
        onClick={event => handleThemeChange(event)}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
