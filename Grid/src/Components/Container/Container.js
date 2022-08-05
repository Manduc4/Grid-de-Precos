import styles from './Container.module.css'

import LeftBlock from "../LeftBlock/LeftBlock";
import RightBlock from "../RightBlock/RightBlock";
import TopBlock from "../TopBlock/TopBlock";

function Container() {
    return (
        <div className={styles.container}>
            <TopBlock/>
            <LeftBlock/>
            <RightBlock/>
        </div>
    )
}

export default Container