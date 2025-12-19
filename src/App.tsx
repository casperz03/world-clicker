import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState<number>(() => {
		const saved = localStorage.getItem("clicked");
		return saved ? Number(saved) : 0;
	});

	useEffect(() => {
		localStorage.setItem("clicked", String(count));
	}, [count]);

	return (
		<div className="content">
			<div className="total-clicks">
				<p className="counter">{String(count)}</p>
				<p className="text">
					<span>{count}</span> clicks per second
				</p>
			</div>

			<button onClick={() => setCount(count + 1)}>Click me!</button>

			<p className="personal-clicks">
				You've clicked <span>{count}</span> times
			</p>

			<footer>
				<p>
					&copy; {new Date().getFullYear()} World Clicker 🌍 Inspired by{" "}
					<a target="_blank" href="https://scratch.mit.edu/projects/377874630/">
						Planet Clicker by Coltroc
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
