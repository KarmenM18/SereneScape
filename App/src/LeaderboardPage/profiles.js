import React from 'react'

function profiles() {
    return (
        <div id="profile">
            {Item()}
        </div>
    )
}

function Item() {
    return (
        <div className="flex">
            <div className="item">
                <img src="https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Name</h3>
                    <span>Location</span>
                </div>
                </div>

            <div className="item">
                <span>Score</span>
            </div>
        

        </div>

    )

}

export default profiles;