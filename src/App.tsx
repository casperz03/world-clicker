// PRZYSTOSOWAĆ POD TYPESCRIPT (TYPY, GENERICS, INTERFACE)
// DODAĆ FOOTER

import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div className="content">
			<TotalClicks />
			<Button />
		</div>
	);
}

function TotalClicks() {
	// Total clicks muszą być GET z serwera
	return (
		<div className="total-clicks">
			<p className="counter">123,411,516</p>
			<p className="text">total clicks</p>
		</div>
	);
}

function Button() {
	const [count, setCount] = useState(0);
	// zrobić zapis w localstorage

	return (
		<>
			<button onClick={() => setCount(count => count + 1)}>Click me!</button>
			<p className="personal-clicks">
				You've clicked <span>{count}</span> times
			</p>
		</>
	);
}

// function Footer() {
// 	return (
// 		<footer>
// 			<p>World Clicker 🌍 collects all clicks from whole world.</p>
// 		</footer>
// 	);
// }

export default App;
