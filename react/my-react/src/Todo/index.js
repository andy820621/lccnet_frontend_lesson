import { useState } from "react";
import List from "./List";
const Todo = () => {
	let id = 0;
	const [todos, setTodos] = useState([
		{
			id: id++,
			name: "洗衣服",
			isCompleted: false,
		},
		{
			id: id++,
			name: "做報告",
			isCompleted: true,
		},
		{
			id: id++,
			name: "買禮物",
			isCompleted: false,
		},
	]);

	const [input, setInput] = useState("");
	function handleInput(e) {
		setInput(e.target.value);
	}
	function addItem() {
		setTodos((prevData) => [
			...prevData,
			{
				id: id++,
				name: input,
				isCompleted: false,
			},
		]);
		setInput("");
	}

	return (
		<>
			<h1>Todo</h1>
			<div>
				<input type="text" value={input} onChange={handleInput} />
				<button onClick={addItem}>Add Item</button>
			</div>
			<div>
				{todos.map((todo) => (
					<List
						name={todo.name}
						isCompleted={todo.isCompleted}
						key={todo.id}
					></List>
				))}
			</div>
		</>
	);
};

export default Todo;
