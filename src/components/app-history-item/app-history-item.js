
import './app-history-item.css'

const AppHistoryItem = ({sum, reason, id}) => {
        return (
            <div className="history__item__container">
                <div className="history__item">
                    {sum + ' ₽'} - {reason}
                </div>
            </div>
        )
}

export default AppHistoryItem;