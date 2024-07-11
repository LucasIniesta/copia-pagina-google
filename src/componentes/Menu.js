import styles from './Menu.module.css'
import menu from './Assets/icons/menu.svg'
function Menu() {
    return(
        <div className={styles.menu}>
            <img src={menu} alt='Menu'/>
        </div>
    )
}

export default Menu