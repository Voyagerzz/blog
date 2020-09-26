import React from 'react'
import ItemCard from './item-card/item-card'
import './frontend-home.scss'
const userInfo = {
    name: 'xiong fei',
    job: '前端工程师',
    mail: 'xiongfeiya@gmail.com'
}
export default function HomePage() {
    const items = [1, 2, 3]
    return (
        <div className="home-page">
            <header className="header-title">
                <span>Life And Work Blog</span>
            </header>
            <div className="main-content-wrapper">
                <div className="user-info">
                    <div className="head-image">
                        
                    </div>
                    <div>
                        <ul>
                            {
                                (Object.keys(userInfo) as Array<keyof typeof userInfo>)
                                .map((key) => <li key={key}>{`${userInfo[key]}`}</li>)
                            }
                        </ul>
                        
                    </div>
                </div>
                <div className="item-cards-wrapper">
                    {
                        items.map(n => <ItemCard id={n} key={n}/>)
                    }
                </div>
                
            </div>
        </div>
    )
}