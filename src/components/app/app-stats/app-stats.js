import { Component } from "react"; 

import './app-stats.css';

class AppStats extends Component {

    onUpdateLimit = (e) => {
        const value = e.target.value;
        this.props.updateLimit(value)
    }
    

    render() {
        const {limit, total, } = this.props;
        let status = 'Все хорошо'

        let classes = 'stats__info'
        
        if(total > limit) {
            classes += ' bad';
            status = 'Вы превысили лимит!'
        } else {
            classes += ' good';
        }

        return (
            <div className="stats__container">
                <div className="stats__title">
                    СТАТИСТИКА
                </div>
                <div className="stats__info">
                    <div className="stats__info-limit">ЛИМИТ: <input onChange={this.onUpdateLimit} value={limit} type="number" /></div>
                    <div className="stats__info-total">СУММА:  {total + ' ₽'}</div>
                    <div className="stats__info-status">СТАТУС: <span className={classes}>{status}</span></div>
                </div>
            </div>
        )
    }
}

export default AppStats;