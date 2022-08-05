import styles from './TopBlock.module.css'

function TopBlock() {
    return (
        <div className={styles.top_content}>
           <h1>Join our community</h1>
           <h2>30-day, hassle-free money back guarantee</h2>
           <p>Gain acces to our full library of tutorials along with expert code reviews.</p>
           <p>Perfect for any developers who are serious about honing their skills</p>
        </div>
    )
}

export default TopBlock