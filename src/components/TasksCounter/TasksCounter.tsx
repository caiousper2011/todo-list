import { FC } from 'react';
import { ITodoItem } from '../../interfaces/todoList.interface';
import styles from './styles.module.css';

interface TasksCounterProps {
  tasks: ITodoItem[];
}

const TasksCounter: FC<TasksCounterProps> = ({ tasks }) => {
  const completeTasks = tasks.filter(({ complete }) => complete).length;
  const allTasks = tasks.length;

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <p>Tarefas criadas</p>
        <div className={styles.badge}>{allTasks}</div>
      </div>
      <div className={styles.counterContainer}>
        <p>Concluídas</p>
        <div className={styles.badge}>
          {completeTasks} de {allTasks}
        </div>
      </div>
    </div>
  );
};

export default TasksCounter;
