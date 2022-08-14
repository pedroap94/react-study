import React, { ReactComponentElement } from "react";
import { convertTypeAcquisitionFromJson } from "typescript";
import Botao from "../Botao";
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa : "",
        tempo : "00:00:00"
    } 

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        console.log('estado: ', this.state);
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit = {this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                   <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label> 
                    <input type="text" 
                    name="tarefa" 
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    value={this.state.tarefa}
                    onChange = {evento => this.setState({...this.setState, tarefa : evento.target.value})}
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                   <label htmlFor="tempo">
                        Tempo
                    </label> 
                    <input type="time" 
                    step={"1"}
                    name = "tempo"
                    id = "tempo"
                    min = "00:00:00"
                    max = "01:30:00"
                    value = {this.state.tempo}
                    onChange = {evento => this.setState({...this.setState, tempo : evento.target.value})}
                    required
                    />
                </div>
                <Botao
                    texto="Adicionar"
                />
            </form>
        )
    }
}

export default Formulario