import React from "react";

class Botao extends React.Component {
    render(): React.ReactNode {
        const estaAtiva = false;
        const styles = {
            backgroundColor: estaAtiva ? "red" : "blue"
        }

        return(
            <button style={styles}>
                Botão
            </button>
        )
    }

}

export default Botao;