import React from "react";
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'
import arcade from '/icon-arcade.svg'

const PlanSelection = ({ plan, selected, onClick }) => {

    const planData = {
        arcade: { img: arcade, label: "Arcade", price: "$9/mo" },
        advanced: { img: advanced, label: "Advanced", price: "$12/mo" },
        pro: { img: pro, label: "Pro", price: "$15/mo" }
    };

    const handleClick = () => onClick(plan);
    return (
        <div
            className={`flex cursor-pointer flex-col gap-4 border-2 px-4 py-4 ${selected ? "border-black" : "border-red-200"}`}
            onClick={handleClick}
        >
            <img className="w-8" src={planData[plan].img} alt="" />
            <div>
                <h1 className="text-xl font-bold">{planData[plan].label}</h1>
                <p className="text-sm">{planData[plan].price}</p>
            </div>
        </div >
    );
};

export default PlanSelection;