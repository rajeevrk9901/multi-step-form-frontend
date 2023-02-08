import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FirstForm from '../components/firstform/FirstForm'
import FourthForm from '../components/fourthform/FourthForm'
import SecondForm from '../components/secondform/SecondForm'
import SideBarCard from '../components/SideBarCard'
import ThirdForm from '../components/thirdform/ThirdForm'



const MultiForm = () => {

    const [form, setForm] = useState(0)

    const [confirm, setconfirm] = useState(false)

    const initialValues = {
        name: '',
        email: '',
        pnum: '',
        plan: 'arcade',
        duration: 'monthly',
        addon: []
    }



    const [values, setValues] = useState(initialValues)

    const [err, setErr] = useState("")


    const onChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    // console.log(values)



    const formList = [
        <FirstForm formValues={values} err={err} onChange={onChange} />,
        <SecondForm formValues={values} onChange={onChange} />,
        <ThirdForm formValues={values} onChange={onChange} />,
        <FourthForm formValues={values} onChange={onChange} />,
    ]


    const formLength = formList.length;


    const handleNext = () => {
        if (values.name !== '' && values.email !== '' && values.pnum !== '') {
            setForm(form === formLength - 1 ? 0 : form + 1);
            setErr('')
        } else {
            setErr('Please fill all the fields')
        }

    }


    const handlePrev = () => {
        setForm(form === 0 ? formLength - 1 : form - 1);

        setconfirm(false)

    }



    const resetForm = () => {
        setValues(initialValues)

    }

    const URL = "http://localhost:3000/add-form-data"

    const handleconform = async () => {

        await axios.post(URL, values).then
            (res => {
                // console.log(res)
                setconfirm(true);
                resetForm()
            })
            .catch(err => {
                console.log(err, "error Found")
            })


    }

    // useEffect(() => {
    //     handleconform()
    // }, [])

    const ThankYou = () => {
        return (
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold'>Thank You!</h1>
                <p className='text-sm'>Your form has been submitted</p>
                {/* <p>it will auto redirected to home page</p> */}
            </div>
        )
    }




    return (
        <div className='flex gap-4 justify-center bg-blue-100 md:px-12 md:py-3'>
            <div className='flex md:flex-row flex-col gap-8'>
                <div><SideBarCard form={form} /></div>

                <div className='flex flex-col items-center md:h-auto h-[70vh] justify-between py-6 md:px-0 px-4'>
                    {!confirm ? <div>{formList[form]}</div> : <ThankYou />}
                    <div className='grid grid-cols-3 py-4'>

                        <div>
                            <button className={`font-bold text-gray-800 py-2 rounded-xl px-4 
                            ${form === 0 && 'hidden' || confirm && 'hidden'}`}
                                onClick={handlePrev} disabled={form === 0}>Go Back</button>
                        </div>

                        <div></div>

                        {form === formLength - 1 ?

                            !confirm ?
                                <button onClick={handleconform} className='bg-blue-600 text-white py-2 rounded-xl px-4'>
                                    Confirm
                                </button>
                                : <button onClick={() => { setForm(0), setconfirm(false) }} className='bg-blue-600 text-white py-2 rounded-xl px-4'>
                                    Reset
                                </button>
                            :
                            <button className='bg-blue-600 text-white py-2 rounded-xl px-4' onClick={handleNext}>
                                Next Step
                            </button>
                        }



                        {/* <button onClick={resetForm}>Reset</button> */}
                        {/* {(form === formLength - 1) && <button>Submit</button>} */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MultiForm