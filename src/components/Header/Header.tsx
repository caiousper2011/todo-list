import { FC, useEffect } from 'react';
import styles from './styles.module.css';
import logoSVG from '../../assets/logo.svg';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'phosphor-react';
import classNames from 'classnames';
import { Theme } from '../../enums/theme.enum';

const Header: FC = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <header className={styles.container}>
      <img src={logoSVG} alt='Logo todo list' />
      <div className={styles.themeContainer}>
        <button
          onClick={switchTheme}
          className={classNames({
            [styles.active]: theme === Theme.WHITE,
          })}>
          <Sun size={22} />
        </button>
        <button
          onClick={switchTheme}
          className={classNames({
            [styles.active]: theme === Theme.DARK,
          })}>
          <Moon size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
