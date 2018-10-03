import {WebComponent, WebComponentLifecycle} from "../../../../dist/index";
import {Todo} from "../service/TodoService";

interface TodoListState {
    todos: Array<Todo>;
}

@WebComponent({
    tag: 'example-todo-list',
    props: ['todos']
})
export class ExampleTodoList extends HTMLElement implements WebComponentLifecycle {

    // all props are auto-synced with the state object
    state: TodoListState = {
        todos: []
    };

    render() {

        // loop rendering is inherent
        const listItems = this.state.todos.map((todo: Todo) =>
            <li>{ todo.text }</li>
        );

        // what is returned, will be attached to this node
        return (<ul>{ listItems }</ul>);
    }
}