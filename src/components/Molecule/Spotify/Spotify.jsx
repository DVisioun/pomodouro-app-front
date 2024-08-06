import React from 'react'

function Spotify() {
    return (
        <div className='flex justify-around items-center gap-2 bg-secondary shadow-custom px-4 py-4 rounded-lg'>
            <img src='/icons/spotify.svg' className='w-6' />
            <p className='text-xs text-primary font-sora font-bold flex-1'>SPOTIFY • CONECTAR MINHA CONTA</p>
        </div>
    )
}

export default Spotify