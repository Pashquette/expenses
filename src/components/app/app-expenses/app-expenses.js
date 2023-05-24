import { Component } from "react";

import './app-expenses.css'

class AppExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: '',
            reason: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.sum < 1 || !this.state.reason) {
            alert('Введите корректные данные!')
            this.setState({
                sum: '',
                reason: ''
            })
        } else {
            this.props.onAdd(this.state.sum, this.state.reason);
            this.props.addTotal(this.state.sum)
            this.setState({
                sum: '',
                reason: ''
            })
        }
    }

    render() {
        const {options} = this.props;
        // const {sum, reason} = this.state;
        
        return (
            <div className="expenses__container">
                <input onChange={this.onValueChange} value={this.state.sum} name="sum" className="expenses__input" type="number" placeholder="Введите потраченную сумму" />
                <select onChange={this.onValueChange} value={this.state.reason} name="reason" className="expenses__categories" >
                    Категория
                    {/* <option value="DEFAULT" selected disabled>Выберите категорию</option>
                    <option value="Продукты">Продукты</option>
                    <option value="Кафе и рестораны">Кафе и рестораны</option>
                    <option value="Транспорт">Транспорт</option>
                    <option value="Коммунальные услуги">Коммунальные услуги</option>
                    <option value="Развлечения и хобби">Развлечения и хобби</option>
                    <option value="Медицина">Медицина</option>
                    <option value="Платежи">Платежи</option>
                    <option value="Подарки">Подарки</option>
                    <option value="Электроника">Электроника</option>
                    <option value="Одежда и обувь">Одежда и обувь</option>
                    <option value="Другое">Другое</option> */}
                            {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
                </select>
                <button onClick={this.onSubmit} className="expenses__btn">ДОБАВИТЬ</button>
            </div>
        )
    }
}


export default AppExpenses;