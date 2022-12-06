import React, { FC, PropsWithChildren } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem: FC<PropsWithChildren<TodoItemProps>> = ({ todo }) => {
	return (
		<div>
			<input type="checkbox" checked={todo.completed}></input>
			{todo.id}. {todo.title}
		</div>
	);
};

export default TodoItem;
