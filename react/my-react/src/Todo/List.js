import React from "react";

const List = (props) => {
	return (
		<li>
			<input type="checkbox" defaultChecked={props.isCompleted} />
			<label>{props.name}</label>
		</li>
	);
};

export default List;
