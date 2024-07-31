import React from 'react'
import Checklist from '../../Atoms/Checklist/Checklist'

function Tab3() {
    return (
        <div className='w-full h-full'>
            <div className='bg-secondary shadow-custom px-7 py-7 rounded-lg space-y-4'>
                <h1 className='text-primary font-sora font-bold text-2xl text-center'>Tarefas</h1>
                <Checklist />
            </div>
        </div>
    )
}

export default Tab3