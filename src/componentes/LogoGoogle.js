import imagem from './Assets/images/logo-google.svg'
import styles from './LogoGoogle.module.css'
function LogoGoogle(){
    return(
        <div className={styles.logoGoogle}>
            <img src={imagem} alt='Logo Google'/>
        </div>
    )
}

export default LogoGoogle