import { FC } from 'react';
import styles from './styles.module.css';
import logoSVG from '../../assets/logo.svg';

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <img src={logoSVG} alt='Logo todo list' />
    </header>
  );
};

export default Header;
