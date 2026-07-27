import styles from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>Parece que o link que você está tentado encontrar não existe. Tente novamente ou procure por outro link</p>
        </div>
    );
}

