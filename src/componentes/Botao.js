import styles from './Botao.module.css'

function Botao(props) {
    return(
        <div className={styles.botao}>
            <button> {props.text} </button>
        </div>    
    )
}

export default Botao