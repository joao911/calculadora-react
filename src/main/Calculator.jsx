import React, { Component } from 'react'
import './Calculator.css'
import Buttom from '../components/Buttom'
import Display from '../components/Display'
export default class calculator extends Component {
    constructor(props){
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.setarOperacoes = this.setarOperacoes.bind(this)
        this.addDigito = this.addDigito.bind(this)
    }

    limparMemoria() {
        console.log('limpar')
    }
    setarOperacoes(operation) {
        console.log(operation)
    }
    addDigito(n) {
        console.log(n)
    }

    render() {

        return (
            <div className="calculator">
                <Display value={100} />
                <Buttom label="AC"  click = {this.limparMemoria} triple/>
                <Buttom label="/"  click = {this.setarOperacoes} aperation/>
                <Buttom label="7" click = {this.addDigito}/>
                <Buttom label="8" click = {this.addDigito}/>
                <Buttom label="9" click = {this.addDigito}/>
                <Buttom label="*" click = {this.setarOperacoes} aperation/>
                <Buttom label="4" click = {this.addDigito}/>
                <Buttom label="5" click = {this.addDigito}/>
                <Buttom label="6" click = {this.addDigito}/>
                <Buttom label="-" click = {this.setarOperacoes} aperation/>
                <Buttom label="1" click = {this.addDigito}/>
                <Buttom label="2" click = {this.addDigito} />
                <Buttom label="3" click = {this.addDigito}/>
                <Buttom label="+" click = {this.setarOperacoes} aperation/>
                <Buttom label="0" click = {this.addDigito} double/>
                <Buttom label="." click = {this.addDigito}/>
                <Buttom label="=" click = {this.setarOperacoes} aperation/>
            </div>
        )
    }
}