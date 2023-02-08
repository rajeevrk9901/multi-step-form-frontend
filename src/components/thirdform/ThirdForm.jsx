import React, { useEffect, useState } from 'react'

export const ThirdForm = ({ formValues }) => {
    const options = [
        { label: "Online service", description: "Access to multiplayer games", price: "+$1/mo", selected: false },
        { label: "Larger storage", description: "Extra 1TB of cloud save", price: "+$2/mo", selected: false },
        { label: "Customizable Profile", description: " Custom theme on your profile", price: "+$9/mo", selected: false }
    ]

    const [selectedOptions, setSelectedOptions] = useState(formValues.addon)



    // useEffect(() => {

    const handleOptionClick = (option) => {
        const newOptions = [...options];
        const optionIndex = options.indexOf(option);
        newOptions[optionIndex].selected = !newOptions[optionIndex].selected;
        const isOptionInSelectedOptions = selectedOptions.some(selectedOption => selectedOption.label === option.label);
        if (isOptionInSelectedOptions) {
            setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption.label !== option.label));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };



    // console.log(selectedOptions)
    formValues.addon = selectedOptions



    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-2xl font-bold">Pick add-ons</h1>
                <p className="text-sm">  Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="grid md:grid-cols-1 gap-2">
                {options.map((option, index) => {
                    return (
                        <div key={index}
                            className={`flex flex-col gap-4 border-2 px-4 py-4 cursor-pointer ${selectedOptions.some(o => o.label === option.label) ? 'border-black' : 'border-red-200'}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <div className='grid grid-cols-6 justify-between items-center'>
                                <input className='col-span-1' type="checkbox"
                                    checked={selectedOptions.some(o => o.label === option.label)} />
                                <div className='col-span-4'>

                                    <h1 className="text-xl font-bold">{option.label}</h1>
                                    <p className="text-sm">{option.description}</p>
                                </div>
                                <p className='col-span-1 text-blue-800  place-self-end'>{option.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ThirdForm
