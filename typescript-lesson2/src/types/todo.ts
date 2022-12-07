export interface TodoState {
	todos: any[];
	loading: boolean;
	error: null | string;
	page: number;
	limit: number;
}

export enum TodoActionTypes {
	FETCH_TODOS = "FETCH_TODOS",
	FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
	FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
	FETCH_TODO_PAGE = "FETCH_TODO_PAGE",
}

interface FetchTodoAction {
	type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSucessAction {
	type: TodoActionTypes.FETCH_TODOS_SUCCESS;
	payload: any[];
}

interface FetchTodoErrorAction {
	type: TodoActionTypes.FETCH_TODOS_ERROR;
	payload: string;
}

interface SetTodoPage {
	type: TodoActionTypes.FETCH_TODO_PAGE;
	payload: number;
}

export type TodoAction =
	| FetchTodoAction
	| FetchTodoSucessAction
	| FetchTodoErrorAction
	| SetTodoPage;
