// https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane
import { FC } from "react";
import "./App.css";
import { Home } from "./pages/_index";

const App: FC = (): JSX.Element => {
	return (
		<div className="app">
			<Home />
		</div>
	);
};

export default App;
