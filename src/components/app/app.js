import { Component } from "react";

import AppExpenses from './app-expenses/app-expenses';
import AppStats from "./app-stats/app-stats";
import AppHistory from "./app-history/app-history";

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {sum: 40, reason: 'Продукты', id: 1},
                // {sum: 40, reason: 'Продукты', id: 2},
                // {sum: 40, reason: 'Продукты', id: 3},
            ],
            limit: 10000,
            total: 0,
            // status: 'Все хорошо',
            options: [
                {value: '', text: 'Выберите категорию'},
                {value: 'Продукты', text: 'Продукты'},  
                {value: 'Кафе и рестораны', text: 'Кафе и рестораны'},  
                {value: 'Транспорт', text: 'Транспорт'},
                {value: 'Коммунальные услуги', text: 'Коммунальные услуги'},
                {value: 'Развлечения и хобби', text: 'Развлечения и хобби'},
                {value: 'Медицина', text: 'Медицина'},  
                {value: 'Платежи', text: 'Платежи'},  
                {value: 'Подарки', text: 'Подарки'},  
                {value: 'Электроника', text: 'Электроника'},  
                {value: 'Одежда и обувь', text: 'Одежда и обувь'},  
                {value: 'Другое', text: 'Другое'},  
            ]

        }
        this.maxId = 4;
    }

    addExpense = (sum, reason) => {
        const newItem = {
            sum,
            reason,
            id: this.maxId++
            
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    addTotal = (newTotal) => {
        this.setState(({total}) => {
            return {              
                total: Number(total) + Number(newTotal)
            }
        })
    }

    updateLimit = (newLimit) => {
        this.setState({
            limit: newLimit
        })
    }

    // updateStatus = () => {
    //    this.setState({
    //         status: 'Все плохо!'
    //    })
    // }

    clearHistory = (cleanData) => {
        this.setState({
            data: cleanData,
            total: 0
        })
    }

    render() {

        const {data, limit, total, status, options} = this.state;

        return (
            <div className="app">
            <div className="app__title">УЧЕТ РАСХОДОВ</div>
                <AppExpenses options={options} onAdd={this.addExpense} addTotal={this.addTotal}/>
                <AppStats updateStatus={() => this.updateStatus} updateLimit={this.updateLimit} limit={limit} total={total} status={status}/>
                <AppHistory clearHistory={this.clearHistory} data={data}/>
            </div>
        )
    }
}

export default App