import icon from './icon-music.svg'
import styles from './ComponentPlan.module.css'

const ComponentPlan =() =>{
    return(
        <div className={styles.componentPlan}>
        <span><img src={icon} alt="" /></span>
        <div className={styles.price}>
            <p>Annual Plan</p>
            <p>$59.99/year</p>
        </div>
        <a href="">Change</a>
        </div>
    )
}

export default ComponentPlan