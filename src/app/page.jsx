import styles from './page.module.css';

export default () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Fundamentos do Next</h1>
                <p className={styles.subtitle}>
                    Organização e Praticas para desenvolvimento mais fluido
                </p>

                <div className={styles.text}>
                    <h2>Pasta src/app</h2>
                    <p>
                        No Next, a pasta src é usada para a organização da estrutura da aplicação.
                        Podendo conter as páginas e seus layouts, dessa forma melhorando o
                        desenvolvimento do projeto.
                    </p>

                    <h2>Component Image</h2>
                    <p>
                        O componente Image do Next substitui a tag HTML, ele oferece mais
                        performasse com otimizações já automatizadas.
                    </p>

                    <h2>CSS Module</h2>
                    <p>
                        O CSS Module é um tipo de estilização que apresenta um escopo local, dessa
                        forma evitando conflitos com outras classes.
                    </p>

                    <h2>Componente Link</h2>
                    <p>
                        O componente Link é utilizado para realizar navegações entre várias páginas
                        da aplicação. Ele demonstra transições mais rápidas e mantém a aplicação
                        (SPA).
                    </p>
                </div>
            </div>
        </main>
    );
};
