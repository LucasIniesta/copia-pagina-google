import styles from './Checkin.module.css'
import imagem from './Assets/icons/checkup-icon.svg'

function Checkin(){
    return(
        <div className={styles.checkin}>
            <img src={imagem} alt='Check'/>
            <a src='#'>Faça o Check-up de privacidade</a>
        </div>
    )
}

export default Checkin