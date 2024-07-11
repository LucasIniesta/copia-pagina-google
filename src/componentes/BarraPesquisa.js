import styles from './BarraPesquisa.module.css'
import lupa from './Assets/icons/lupa.svg'
import teclado from './Assets/icons/teclado.svg'
import fone from './Assets/icons/fone.svg'

function BarraPesquisa(){
    return(
        <div className={styles.barraPesquisa}>
            <img src={lupa} alt='lupa'/>
            <input type='search' name='pesquisa' value=''/>
            <img src={teclado} alt='teclado'/>
            <img src={fone} alt='fone'/>
        </div>
    )
}

export default BarraPesquisa