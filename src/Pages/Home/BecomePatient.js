import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { PatientsProvider } from '../../Layout/Main';

const BecomePatient = () => {
    const { refetch } = useContext(PatientsProvider)
    const handlePatient = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const contact = form.contact.value;
        const address = form.address.value;
        const pincode = form.pincode.value;

        const patient = {
            name: name,
            contact: contact,
            address: address,
            pincode: pincode
        }

        fetch('https://softnerve-server-five.vercel.app/patients', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log(data)
                    refetch()
                    form.reset()
                    toast('Patient Added Successfully!',
                        {
                            style: {
                                borderRadius: '4px',
                                background: '#00FF00',
                                color: 'white',
                                fontWeight: "600"
                            },
                        }
                    );
                }
            })
    }
    return (
        <div className='container mx-auto px-4 lg:px-16 my-16 grid gap-4 items-center grid-cols-1 lg:grid-cols-2'>
            <div>
                <h2 className='text-[23px] md:text-4xl font-semibold text-[#333] mb-6'>Become A Patient</h2>
                <p className='text-[#53565a] text-lg leading-7'>Become a patient by fill up the form and get the best support from us. Please provide your/ patient information properly for get the best support from us and live a healthy life.</p>
            </div>
            <form
                onSubmit={handlePatient}
                className="mt-4 lg:mt-0">
                <div className='flex flex-col xl:flex-row items-center gap-2'>
                    <input type="text" name="name" placeholder='Enter Name'
                        className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                        required
                    />
                    <input type="phone" name="contact" placeholder='Enter Contact Number'
                        className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                        required
                    />
                </div>
                <div className='flex flex-col xl:flex-row items-center gap-2'>
                    <input type="text" name="address" placeholder='Enter Address'
                        className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                        required
                    />
                    <input type="password" name="pincode" placeholder='Enter Pin-Code'
                        className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                        required
                    />
                </div>
                <button type='submit' className='bg-[#e0004d] text-white font-semibold w-full py-3'>Become Patient</button>
            </form>
        </div>
    );
};

export default BecomePatient;