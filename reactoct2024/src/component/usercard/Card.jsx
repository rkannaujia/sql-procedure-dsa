import React from 'react'
import './card.css'

const Card = ({ users }) => {
    return (
        <>
            {
                users.map((user, index) =>
                    <div className='container' key={index}>
                        <p>Name : {user.name}</p>
                        <img className="user_img" src={user.profile} alt="loading" />
                        <span>{user.desc}</span>
                    </div>
                )
            }
        </>
    )
}

export default Card
