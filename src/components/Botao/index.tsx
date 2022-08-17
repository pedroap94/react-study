import React from "react";
import style from './Botao.module.scss'


class Botao extends React.Component<{ texto:string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void}> {
    render(): React.ReactNode {
        const {type = "button", onClick} = this.props
        const estaAtiva = false;
        const styles = {
            backgroundColor: estaAtiva ? "red" : "blue"
        }

        return(
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }

}

export default Botao;