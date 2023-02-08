import React, { useState, useEffect } from 'react'
import DurationToggle from './DurationToggle'
import PlanSelection from './PlanSelection'


const SecondForm = ({ formValues }) => {
    const [plan, setPlan] = useState(formValues.plan);
    const [toggle, setToggle] = useState(formValues.duration === "monthly");

    useEffect(() => {
        formValues.plan = plan;
        formValues.duration = toggle ? "monthly" : "yearly";
    }, [plan, toggle]);

    const handlePlanSelection = plan => setPlan(plan);
    const handleDurationToggle = () => setToggle(!toggle);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-2xl font-bold">Select Your Plan</h1>
                <p className="text-sm"> You have the option of monthly or yearly billing.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
                {["arcade", "advanced", "pro"].map(planType => (
                    <PlanSelection
                        key={planType}
                        plan={planType}
                        selected={plan === planType}
                        onClick={handlePlanSelection}
                    />
                ))}
            </div>
            <div className="flex gap-2 w-full justify-center items-center">
                <p>Monthly</p>
                <DurationToggle toggle={toggle} onClick={handleDurationToggle} />
                <p>Yearly</p>
            </div>
        </div>
    );
};





export default SecondForm;