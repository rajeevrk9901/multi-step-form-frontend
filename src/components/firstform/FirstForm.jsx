import React, { useState } from 'react'

const FirstForm = ({ formValues, onChange, err }) => {

    return (
        <div className='flex flex-col gap-8 px-6 '>
            <div>
                <h1 className='text-2xl font-bold'>Personal Details</h1>
                <p className='text-sm'>Please fill in your personal details</p>
            </div>
            <div className='flex flex-col gap-4 w-64'>
                <ul className='flex flex-col gap-2 '>
                    <label className='' htmlFor="name">Name</label>
                    <input required className='border-[2px] border-gray-300  px-2 rounded-md' type="text" name="name" id="name" value={formValues.name} onChange={onChange} placeholder="e.g. Stephen King" />
                </ul>
                <ul className='flex flex-col gap-2 '>
                    <label htmlFor="email">Email Address</label>
                    <input required className='border-[2px] border-gray-300  px-2 rounded-md' type="text" name="email" id="email" value={formValues.email} onChange={onChange} placeholder="e.g. stephenking@lorem.com" />
                </ul>
                <ul className='flex flex-col gap-2'>
                    <label htmlFor="pnum">Phone Number</label>
                    <input required className='border-[2px] border-gray-300  px-2 rounded-md' type="number" name="pnum" id="pnum" value={formValues.pnum} onChange={onChange} placeholder="e.g. +1 234 567 890" />
                </ul>
                <span className='text-red-700 animate-pulse'>{err}</span>
            </div>
        </div>
    )
}

export default FirstForm