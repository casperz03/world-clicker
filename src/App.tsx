import { useEffect, useState } from "react";
import "./App.css";

// const clicksArr: string[] = [];
// let cps = 0;

// setInterval(() => {
// 	console.log(`CPS: ${cps}`);
// 	cps = 0;
// }, 1000);

const App = () => {
	// TOTAL
	const [totalCount, setTotalCount] = useState<number>(() => {
		const savedTotalClicks = localStorage.getItem("total_clicks");
		return savedTotalClicks ? Number(savedTotalClicks) : 0;
	});

	useEffect(() => {
		localStorage.setItem("total_clicks", String(totalCount));
	}, [totalCount]);

	// SESSION - reset on a new day
	const [countOnSession, setCountOnSession] = useState<number>(() => {
		const savedSessionClicks = localStorage.getItem("session_clicks");
		return savedSessionClicks ? Number(savedSessionClicks) : 0;
	});

	useEffect(() => {
		localStorage.setItem("session_clicks", String(countOnSession));
	}, [countOnSession]);

	// const resetSession = () => {
	// 	localStorage.setItem("session_clicks", String(0));
	// };

	const date = new Date().getHours();
	// const date = 0;
	if (date === 0) {
		console.log("NOWY DZIEŃ");
	}

	const handleActionsOnClick = () => {
		setTotalCount(totalCount + 1);
		setCountOnSession(countOnSession + 1);
		// clicksArr.push("click");
		// console.log(clicksArr);
		// cps += 1;
	};

	return (
		<div className="content">
			<div className="total-clicks">
				<p className="counter">{String(totalCount)}</p>
				<p className="text">
					<span>{true ? "0" : "more clicks"}</span> clicks per second
				</p>
			</div>

			<button onClick={() => handleActionsOnClick()}>Click</button>

			<p className="personal-clicks">
				You've clicked <span>{String(countOnSession)}</span>
				{countOnSession === 1 ? " time " : " times "}
				today.
			</p>

			<footer>
				<p>
					&copy; {new Date().getFullYear()} World Clicker 🌍 Inspired by Cookie Clickers
				</p>
			</footer>
		</div>
	);
};

export default App;
