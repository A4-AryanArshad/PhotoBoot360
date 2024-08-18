import React from 'react'

const theme = {
    cardContainer: 'cardcontainer lg:h-1/2 sm:h-1/3 lg:w-1/2',
    card: 'card relative items-center justify-center rounded-xl w-full lg:h-full sm:h-40',
    cardText: 'absolute lg:px-5 lg:py-1 sm:text-sm rounded-full lg:border-2 lg:left-5 lg:bottom-10 sm:left-2 sm:bottom-5 text-white font-display'
}

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 lg:flex items-center lg:px-32 sm:p-20 gap-5 border-b border-zinc-700'>
            <div className={theme.cardContainer}>
                <div className={`${theme.card} bg-[#004D43]`}>
                    <img className='w-32 invert' src="img\logo\logo.svg" alt="" />
                    <p className={theme.cardText}>&copy; 2024</p>
                </div>
            </div>
            <div className={` ${theme.cardContainer} flex gap-5`}>
                <div className={`${theme.card} bg-[#004D43]`}>
                    <img className='w-32' src="img\social\clutch.svg" alt="" />
                    <p className={theme.cardText}>Rating</p>
                </div>
                <div className={`${theme.card} bg-[#212121]`}>
                    <img className='w-32' src="img\social\thefutureacadmy.png" alt="" />
                    <p className={theme.cardText}>Verified</p>
                </div>
            </div>
        </div>
    )
}

export default Cards