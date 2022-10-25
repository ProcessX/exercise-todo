interface TodoTask {
  label: string;
  id: string;
  done: boolean;
}

interface TodoCategory {
  label: string;
  id: string;
  tasks: {
    remaining: TodoTask[];
    done: TodoTask[];
  };
}
