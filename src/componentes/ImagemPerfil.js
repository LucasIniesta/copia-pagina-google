import styles from './ImagemPerfil.module.css'
import imagem from './Assets/images/me.jpg'
function ImagemPerfil(){
    return(
        <div className={styles.imagemPerfil}>
            <img src={imagem} alt='Foto'/>
        </div>
    )
}

export default ImagemPerfil