import React from 'react'
import './item-card.scss'
export default function ItemCard(props: any) {
    return (
        <div className="item-card">
            <h2 className="article-title">{props.id} This is a good article</h2>
            
        </div>
    )
}