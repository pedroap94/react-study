import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component {
    render(): React.ReactNode {
        const estaAtiva = false;
        const styles = {
            backgroundColor: estaAtiva ? "red" : "blue"
        }

        return(
            <button className={style.botao}>
                Botão
            </button>
        )
    }

}

export default Botao;