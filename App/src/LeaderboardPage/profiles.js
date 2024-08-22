import React from 'react'

function profiles({ Leaderboard }) { // pass object to return database.js leaderboard data insite this var
    return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
    )
}

function Item(data) {
    return (

        <>
            {
                // iterate over database array to extract user info
                data.map((value, index) => (
                    <div className="flex">
                        <div className="item">
                            <img src={value.img} alt="" />

                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>
                                <span>{value.location}</span>
                            </div>
                        </div>

                        <div className="item">
                            <span>{value.score}</span>
                        </div>


                    </div>
                ))
            }

        </>



    )

}

export default profiles;