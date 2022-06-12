import { FC } from 'react';
import styles from './styles.module.css';
import EmptyListSVG from '../../assets/list-icon.svg';

const EmptyList: FC = () => {
  return (
    <div className={styles.container}>
      <img src={EmptyListSVG} />
      <p className={styles.textDescriptionBold}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};

export default EmptyList;
