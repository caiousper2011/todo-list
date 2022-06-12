import { useState } from 'react';
import Header from './components/Header';
import { ITodoItem } from './interfaces/todoList.interface';
import styles from './styles.module.css';
import { v4 as uuid } from 'uuid';
import './global.module.css';
import CreateTask from './components/CreateTask';
import TasksCounter from './components/TasksCounter';
import EmptyList from './components/EmptyList';
import Task from './components/Task';
import { ThemeProvider } from './hooks/useTheme';

export function App() {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const handleCreateNewTask = (taskDescription: string) => {
    const newTask: ITodoItem = {
      complete: false,
      id: uuid(),
      description: taskDescription,
    };

    setTodoList([newTask, ...todoList]);
  };

  const handleRemoveTask = (taskId: string) => {
    const removeTaskById = (tasks: ITodoItem[]) =>
      tasks.filter(({ id }) => id !== taskId);

    setTodoList(removeTaskById);
  };

  const handleToggleCompleteTask = (taskId: string) => {
    const completeTaskById = (tasks: ITodoItem[]) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, complete: !task.complete };
        }

        return task;
      });

    setTodoList(completeTaskById);
  };

  const isTodoListEmpty = todoList.length === 0;
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.mainContentContainer}>
            <CreateTask onCreateNewTask={handleCreateNewTask} />
            <div className={styles.tasksContainer}>
              <TasksCounter tasks={todoList} />
              {isTodoListEmpty && <EmptyList />}
              {todoList.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onToggleCompleteTask={handleToggleCompleteTask}
                  onRemoveTask={handleRemoveTask}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
