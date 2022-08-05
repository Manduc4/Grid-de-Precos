import styles from './LeftBlock.module.css'
import Button from  '../Button/Button'

function LeftBlock() {
    return (
        <div className={styles.left_content}>
          <h1>Monthly Subscription</h1>
          <p id={styles.price}><span>$29</span> per month</p>
          <p id={styles.p1}>Full access for less than $1 a day </p>
          <Button text='Sign-up'/>
        </div>
    )
}

export default LeftBlock