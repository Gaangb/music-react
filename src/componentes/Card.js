import styles from './Card.module.css'
import Header from './Header'
import CardInformation from './CardInformation'
import ComponentPlan from './ComponentPlan'
import PaymentButton from './Buttons/PaymentButton'
import CancelButton from './Buttons/CancelButton'
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