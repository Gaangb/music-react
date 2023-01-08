import styles from './Card.module.css'
import topo from './illustration-hero.svg'
const Card = () => {
    return (
        <div className={styles.principal_geral}>
            <div className={styles.geral}>
                <header className={styles.header}>
                    <img src={topo} alt="" />
                </header>
                <div>
                    <h1>Order Summary</h1>
                </div>
                <div className={styles.textInfo}>
                    <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;