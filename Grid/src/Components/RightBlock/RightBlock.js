import styles from './RightBlock.module.css'

function RightBlock() {
    return (
        <div className={styles.right_content}>
          <h2>Why Us</h2>
          <p>
            Tutorials by industry experts<br/>
            Peer & expert code review<br/>
            Coding exercises<br/>
            Acess to our GitHub repos<br/>
            Community forum<br/>
            Flashcard decks<br/>
            New videos every week<br/>
          </p>
        </div>
    )
}

export default RightBlock