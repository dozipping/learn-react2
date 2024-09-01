import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-end">
        <span className="mr-2">{theme === "dark" ? "Dark" : "Ligh"}</span>
        <input
          onClick={toggleTheme}
          type="checkbox"
          className="toggle"
          defaultChecked
        />
      </div>

      <Header />
      <main>
        <StudentList />
      </main>
    </div>
  );
}

export default App;

// initially set the theme and "listen" for changes to apply them to the HTML tag
