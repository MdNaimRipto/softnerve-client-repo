import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PatientsProvider } from '../../Layout/Main';
import ScrollToTop from '../Shared/ScrollToTop';

const UpdatePatient = () => {
    const { refetch } = useContext(PatientsProvider)
    const navigate = useNavigate()
    const details = useLoaderData()
    const updatePatient = (e) => {
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
        fetch(`https://softnerve-server-five.vercel.app/updatedPatient/${details._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(patient)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log(data)
                    refetch()
                    navigate('/patients')
                    toast('Successfully Updated!',
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
        <div className='container mx-auto px-4 md:px-12 lg:px-16 my-16 h-screen'>
            <ScrollToTop />

            <form
                onSubmit={updatePatient}
                className="mt-4 lg:mt-0 w-full lg:w-1/2 mx-auto">

                <input type="text" name="name" placeholder={`Enter Name (${details.name})`}
                    className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                    required
                />
                <input type="phone" name="contact" placeholder={`Enter Contact Number (${details.contact})`}
                    className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                    required
                />
                <input type="text" name="address" placeholder={`Enter Address (${details.address})`}
                    className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                    required
                />
                <input type="password" name="pincode" placeholder={`Enter Pincode (${details.pincode})`}
                    className='w-full  px-2 py-3 mb-5 border border-gray-300 rounded'
                    required
                />
                <button type='submit' className='bg-[#e0004d] text-white font-semibold w-full py-3'>Update Patient</button>
            </form>

        </div>
    );
};

export default UpdatePatient;