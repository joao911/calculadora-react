import React, { Component } from 'react'
import './Calculator.css'
import Buttom from '../components/Buttom'
import Display from '../components/Display'

const initialState = {
    /*estado inicial do display*/
    displayValue: '0',
    /*propriedade para limpra o display*/
    clearDisplay: false,
    /*variável que vai armazenar a operação*/
    operation: null,
    /*vetor com 2 valores */
    values: [0, 0],
    /*aqui eu sei qual dos valores estou manipulando*/
    current: 0

}



export default class calculator extends Component {

    state = { ...initialState }
    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.setarOperacoes = this.setarOperacoes.bind(this)
        this.addDigito = this.addDigito.bind(this)
    }

    limparMemoria() {
        this.setState({ ...initialState })
        console.log('limpar')
    }
    /* não sei fazer a partir daqui */
    setarOperacoes(operation) {
        if(this.state.current === 0){
            this.setState({ operation, current:1, clearDisplay:true})
        }else{
            const equals = operation === '0'
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try{
                values[0] = eval('${values[0]} ${currentOperation} ${values[1]}')
            }catch(e){
                values[0] =  this.state.values[0]
            }

            this.setState({
                displayValue : values[0],
                operation: equals ? null : operation,
                current :equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    
        console.log(operation)
    }
    addDigito(n) {
        /*se ja houver um ponto no display não retorne nada*/
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })
        if (n !== ".") {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
           
        }
        console.log('values')
    }

    render() {

        return (
            <div className="calculator">
                {/* aqui esta apontando para  displayValue na linha 8 */}
                <Display value={this.state.displayValue} />
                <Buttom label="AC" click={this.limparMemoria} triple />
                <Buttom label="/" click={this.setarOperacoes} aperation />
                <Buttom label="7" click={this.addDigito} />
                <Buttom label="8" click={this.addDigito} />
                <Buttom label="9" click={this.addDigito} />
                <Buttom label="*" click={this.setarOperacoes} aperation />
                <Buttom label="4" click={this.addDigito} />
                <Buttom label="5" click={this.addDigito} />
                <Buttom label="6" click={this.addDigito} />
                <Buttom label="-" click={this.setarOperacoes} aperation />
                <Buttom label="1" click={this.addDigito} />
                <Buttom label="2" click={this.addDigito} />
                <Buttom label="3" click={this.addDigito} />
                <Buttom label="+" click={this.setarOperacoes} aperation />
                <Buttom label="0" click={this.addDigito} double />
                <Buttom label="." click={this.addDigito} />
                <Buttom label="=" click={this.setarOperacoes} aperation />
            </div>
        )
    }
}