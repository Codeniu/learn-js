module TodoList {
  type Place = "home" | "work" | { custom: string };
  type Todo = Readonly<{
    id: number;
    text: string;
    done: boolean;
    place?: Place;
  }>;

  type CompletedTodo = Todo & {
    readonly done: true;
  };

  function toggleTodo(todo: Todo): Todo {
    return {
      id: todo.id,
      text: todo.text,
      done: !todo.done,
      place: todo.place,
    };
  }

  function completeAll(todos: readonly Todo[]): CompletedTodo[] {
    return todos.map((todo) => ({
      ...todo,
      done: true,
    }));
  }

  function placeToString(place: Place): string {
    if (place === "home") {
      return "🏘 Home";
    } else if (place === "work") {
      return "🏦 Work";
    } else {
      // place is guaranteed to be { custom: string }
      return "🚩 " + place.custom;
    }
  }
}
