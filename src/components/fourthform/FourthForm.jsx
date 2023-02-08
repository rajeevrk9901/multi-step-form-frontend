import React, { useEffect, useState } from 'react'
// import ToastNotification from '../trash/ToastNotification'


const FourthForm = ({ formValues }) => {

    const { name, email, pnum, plan, duration, addon } = formValues


    const [plancharge, setPlanCharge] = useState("0$")

    const [totalPrice, setTotalPrice] = useState(0)

    // console.log(addon)


    // useEffect(() => {

    // }, [plan])

    useEffect(() => {
        setPlanCharge(plan === "pro" ? "15$" : plan === "arcade" ? "9$" : plan === "advanced" ? "12$" : "")

        let total = parseFloat(plancharge.replace('$', ""));

        addon.forEach(item => {
            total += parseFloat(item.price.replace("$", ""));
        });

        if (duration === "yearly") {
            total = total * 10;
        }

        setTotalPrice(total + "$");
    }, [addon, plancharge]);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-2xl font-bold">Finishing Up</h1>
                <p className="text-sm">Double check everything looks OK before confirming</p>
            </div>
            <div className="flex flex-col gap-4">
                <ul className=' flex justify-between capitalize h-12'>
                    <div>
                        <li>{plan}({duration}) </li>
                        <li>Change</li>
                    </div>
                    {/* <li>{plan === "pro" && "15$" || plan === "arcade" && "9$" || plan === "advance" && "12$"}</li> */}

                    <li>{plancharge}</li>



                </ul>
                <ul className='capitalize flex flex-col gap-2  '>
                    <h1 className='font-semibold text-gray-400'>Add On</h1>
                    {(addon.length > 0) ?

                        addon.map((item, index) => {
                            return (
                                <ul className='flex justify-between border-b border-blue-500 border-dashed py-2' key={index}>
                                    <div className=''>{item.label}</div>
                                    <div>{item.price}</div>
                                </ul>
                            )

                        }) : ""
                    }

                    {/* {item.price} */}
                </ul>
                <ul className='flex justify-between items-end'>
                    <div> <li>Total (per month)</li></div>
                    <div>{totalPrice}</div>

                </ul>
            </div>
            {/* <ToastNotification message="hii" /> */}
        </div>
    )
}

export default FourthForm