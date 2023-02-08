import React, { useState, useEffect } from 'react'
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'
import arcade from '/icon-arcade.svg'

const SecondForm = ({ formValues }) => {

    const [plan, setPlan] = useState(formValues.plan)

    const [toggle, setToggle] = useState(formValues.duration === "monthly");

    const toggleClass = " transform translate-x-5";


    // NOTE  Approach 1:  This works, but it's not the best way to do it.

    // formValues.plan = plan;
    // toggle ? formValues.duration = "monthly" : formValues.duration = "yearly"

    // NOTE  Approach 2:

    useEffect(() => {
        formValues.plan = plan;
        formValues.duration = toggle ? "monthly" : "yearly";
    }, [plan, toggle]);


    return (
        <div className='flex flex-col gap-8 '>
            <div>
                <h1 className='text-2xl font-bold'>Select Your Plan</h1>
                <p className='text-sm'>Please fill in your personal details</p>
            </div>
            <div className='grid md:grid-cols-3 gap-2 '>
                <div className={`flex cursor-pointer flex-col gap-4 border-2 px-4 py-4 ${plan === "arcade" ? "border-black" : "border-red-200"}`} onClick={() => setPlan("arcade")}>
                    <img className='w-8' src={arcade} alt="" srcSet="" />
                    <div>
                        <h1 className='text-xl font-bold'>Arcade</h1>
                        <p className='text-sm'>$9/mo</p>
                    </div>
                </div>
                <div className={`flex cursor-pointer flex-col gap-4 border-2 px-4 py-4 ${plan === "advanced" ? "border-black" : "border-red-200"}`} onClick={() => setPlan("advanced")} >
                    <img className='w-8' src={advanced} alt="" srcSet="" />
                    <div>
                        <h1 className='text-xl font-bold'>Advanced</h1>
                        <p className='text-sm'>$9/mo</p>
                    </div>
                </div>
                <div className={`flex cursor-pointer flex-col gap-4 border-2 px-4 py-4 ${plan === "pro" ? "border-black" : "border-red-200"}`} onClick={() => setPlan("pro")} >
                    <img className='w-8' src={pro} alt="" srcSet="" />
                    <div>
                        <h1 className='text-xl font-bold'>Pro</h1>
                        <p className='text-sm'>$9/mo</p>
                    </div>
                </div>
            </div>
            <div className=' flex gap-2 w-full justify-center items-center '>

                <p className=''>Monthly</p>

                <div
                    className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    {/* Switch */}
                    <div
                        className={
                            "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                            (toggle ? "" : toggleClass)

                        }
                    ></div>
                </div>
                <p className=''>Yearly</p>


            </div>
        </div>
    )
}

export default SecondForm