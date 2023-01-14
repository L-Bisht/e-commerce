import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useCallback, useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	let handleLogin = useCallback(() => {
		setIsLoggedIn(!isLoggedIn);
	}, []);
	return (
		<div className="app">
			<Header isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App;
