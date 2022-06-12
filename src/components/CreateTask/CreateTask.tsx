import { FC, FormEvent, useState } from 'react';
import styles from './styles.module.css';
import { PlusCircle } from 'phosphor-react';

interface CreateTaskProps {
  onCreateNewTask: (description: string) => void;
}

const CreateTask: FC<CreateTaskProps> = ({ onCreateNewTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    onCreateNewTask(taskDescription);
    setTaskDescription('');
  };

  return (
    <form className={styles.container} onSubmit={handleCreateNewTask}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button disabled={!taskDescription}>
        Criar
        <PlusCircle size={20} weight='bold' />
      </button>
    </form>
  );
};

export default CreateTask;
