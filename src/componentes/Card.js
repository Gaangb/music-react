import styles from './Card.module.css'
import Header from './header/Header'
import CardInformation from './cardInformation/CardInformation'
import ComponentPlan from './componentPlan/ComponentPlan'
import PaymentButton from './buttons/PaymentButton'
import CancelButton from './buttons/CancelButton'
const Card = () => {
    return (
        <div className={styles.principal_geral}>
            <div className={styles.geral}>
                <Header/>
                <CardInformation/>  
                <ComponentPlan/>
                <div className={styles.buttons}>
                    <PaymentButton/>
                    <CancelButton/>
                </div>
            </div>
        </div>
    )
}

export default Card;