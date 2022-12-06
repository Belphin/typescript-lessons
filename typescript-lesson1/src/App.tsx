import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UserPage from "./components/UsersPage";

function App() {
	return (
		<BrowserRouter>
			<ul>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/todos">Todos</Link>
				</li>
			</ul>
			<Routes>
				<Route path="/users" element={<UserPage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/users/:id" element={<UserItemPage />} />
				<Route path="/todos/:id" element={<TodoItemPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
