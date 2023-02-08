import React from 'react'
import sidebarimg from '/bg-sidebar-desktop.svg'

const SideBarCard = ({ form }) => {

    let activeClassname0 = `${form === 0 ? ' bg-blue-400' : ''}`
    let activeClassname1 = `${form === 1 ? ' bg-blue-400' : ''}`
    let activeClassname2 = `${form === 2 ? ' bg-blue-400' : ''}`
    let activeClassname3 = `${form === 3 ? ' bg-blue-400' : ''}`



    return (
        <div className="flex md:block bg-no-repeat bg-cover md:h-[90vh] h-[10vh] justify-center items-center  py-12 uppercase text-white rounded-lg" style={{ backgroundImage: 'url(/bg-sidebar-desktop.svg)' }}>


            <div data='1' className={`flex gap-4 px-4 md:px-8 py-4`}>
                <div className={`w-8 h-8 border-2 flex justify-center items-center rounded-full ${activeClassname0}`}> 1</div>
                <div className='hidden md:block'>
                    <h1 className='text-sm text-gray-400'>Step 1</h1>
                    <h1>Your info</h1>
                </div>
            </div>

            <div className='flex gap-4  px-4 md:px-8 py-4 '>
                <div className={`w-8 h-8 border-2 flex justify-center items-center rounded-full ${activeClassname1}`}> 2</div>
                <div className='hidden md:block'>
                    <h1 className='text-sm text-gray-400'>Step 2</h1>
                    <h1>Select plan</h1>
                </div>
            </div>

            <div className='flex gap-4  px-4 md:px-8  py-4 '>
                <div className={`w-8 h-8 border-2 flex justify-center items-center rounded-full ${activeClassname2}`}> 3</div>
                <div className='hidden md:block'>
                    <h1 className='text-sm text-gray-400'>Step 3</h1>
                    <h1>Add-ons</h1>
                </div>
            </div>

            <div className='flex gap-4  px-4 md:px-8  py-4 '>
                <div className={`w-8 h-8 border-2 flex justify-center items-center rounded-full ${activeClassname3}`}> 4</div>
                <div className='hidden md:block'>
                    <h1 className='text-sm text-gray-400'>Step 4</h1>
                    <h1>Summary</h1>
                </div>
            </div>
        </div>
    )
}

export default SideBarCard