import React, { useEffect, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const countPlus = () => setCount((prevData) => (prevData += 1));
	const countMinusHandler = () => setCount((prevData) => (prevData -= 1));

	useEffect(() => {
		setCount(8);
		console.log(count);
	}, []);

	return (
		<div>
			<button onClick={countPlus}>+</button>
			<h2>{count}</h2>
			<button onClick={countMinusHandler}>-</button>
		</div>
	);
};

export default Counter;
