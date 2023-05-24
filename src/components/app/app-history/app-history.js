import { Component } from "react";
import AppHistoryItem from "../../app-history-item/app-history-item";

import './app-history.css';

class AppHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    onClearHistory = (e) => {
        e.preventDefault()
        this.props.clearHistory(this.state.data)
    }

    render() {
        const {data} = this.props
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <AppHistoryItem key={id} {...itemProps}/>
            )
        })

        return (
            <div className="history__container">
                <div className="history__title">ИСТОРИЯ</div>
                <div className="history__list">
                    {elements}
                </div>
                <button onClick={this.onClearHistory} className='history__btn'>ОЧИСТИТЬ</button>
            </div>
        )
    }
}
    
    //  let onClearHistory = () => {
    //     const cleanData = []
    //     clearHistory(cleanData)
    //     console.log('1');
    // }


export default AppHistory;