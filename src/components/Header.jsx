import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <h1 className={styles.title}>Fitness Hub</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.signInButton}>
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Header;
