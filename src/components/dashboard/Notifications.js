import React from 'react';

const Notifications = (props) => {
    const { notifications } = props
    return(
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul>
                        { notifications && notifications.map(notification  => {
                                return (
                                    <li key={notification.id}>
                                        <span className="light-blue-text">{notification.user} </span>                                        
                                        <span>{notification.content}</span>
                                        <div className="grey-text note-date">
                                            {notification.time.toDate().toDateString()} at {notification.time.toDate().toLocaleTimeString('en-US', {hour: '2-digit',minute:'2-digit'})}
                                        </div>
                                    </li>
                                )
                            })
                            
                        }
                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Notifications;