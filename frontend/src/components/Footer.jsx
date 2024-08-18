import React from 'react'

function Footer() {
    return (
        <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20 font-condensed'>
            <div className='w-1/2 h-full flex flex-col justify-between'>
                <div className='heading'>
                    <h1 className='text-[8vw] font-semibold uppercase leading-none'>Eye-</h1>
                    <h1 className='text-[8vw] font-semibold uppercase leading-none'>opening</h1>
                </div>
                <div className='text-xl flex flex-col'>
                    <img className='w-20 h-20 invert' src="img\logo\logo.svg" alt="" />
                    <h2>&copy; supreme design</h2>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col justify-between'>
                <h1 className='text-[8vw] font-semibold uppercase leading-none'>Presentations</h1>
                <div className='details font-["Neue_Montreal"]'>
                    <h2>Work:</h2>
                    {["Email: wali.muhammad.ahmad@gmail.com", "What'sapp: +92-314-7363206"].map((text, index) => (
                        <a key={index} className='block sm:text-md hover:underline' href='#'>
                            {text}
                        </a>
                    ))}
                </div>
                <div className='hcontainer flex gap-20'>
                    <div className='details font-["Neue_Montreal"]'>
                        <h2>Location:</h2>
                        <div className='flex flex-col hover:underline'>
                            <a href="https://maps.app.goo.gl/nYLnR8sQjmafZnH56">Q-Block Model Town</a>
                            <a href="https://maps.app.goo.gl/nYLnR8sQjmafZnH56">Lahore, Pakistan</a>
                        </div>
                    </div>
                    <div className='social font-display'>
                        <h2>Social:</h2>
                        <div className='flex flex-col text-xl'>
                            <a className='hover:underline' href="">Facebook</a>
                            <a className='hover:underline' href="">Instagram</a>
                            <a className='hover:underline' href="">X</a>
                            <a className='hover:underline' href="">Youtube</a>
                        </div>
                    </div>
                </div>
                <div className='text-3xl flex'>
                    <h2 className='border-b-2'>Legal Terms</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer