import styles from './CardInformation.module.css'

const CardInformation = () =>{
    return(
        <div>
            <div>
                <h1>Order Summary</h1>
            </div>
            <div className={styles.textInfo}>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            </div>
        </div>
    )
}

export default CardInformation