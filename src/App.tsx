// https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane
import { FC } from "react";
import "./main.css";
import "./App.css";
import { Home } from "./pages/_index";

const App: FC = (): JSX.Element => {
  const theme = "dark";

  return (
    <div className={theme}>
      <Home />
    </div>
  );
};

export default App;
