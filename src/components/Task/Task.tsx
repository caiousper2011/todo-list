import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { FC } from 'react';
import { ITodoItem } from '../../interfaces/todoList.interface';
import styles from './styles.module.css';
import classNames from 'classnames';

interface TaskProps {
  task: ITodoItem;
  onRemoveTask: (id: string) => void;
  onToggleCompleteTask: (id: string) => void;
}

const Task: FC<TaskProps> = ({ onToggleCompleteTask, onRemoveTask, task }) => {
  return (
    <div
      className={styles.container}
      onClick={() => onToggleCompleteTask(task.id)}>
      <button
        className={classNames({
          [styles.complete]: task.complete,
        })}>
        {task.complete ? (
          <CheckCircle weight='fill' size={20} />
        ) : (
          <Circle size={20} />
        )}
      </button>
      <p
        className={classNames({
          [styles.description]: true,
          [styles.complete]: task.complete,
        })}>
        {task.description}
      </p>
      <button onClick={() => onRemoveTask(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
};

export default Task;
