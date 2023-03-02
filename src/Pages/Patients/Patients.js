import React, { useContext } from 'react';
import { PatientsProvider } from '../../Layout/Main';
import { MdOutlineDelete, MdUpdate } from "react-icons/md"
import ScrollToTop from '../Shared/ScrollToTop';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Patients = () => {
    const { patients, refetch } = useContext(PatientsProvider)

    const handleDelete = (_id) => {
        fetch(`https://softnerve-server-five.vercel.app/patients/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log(data)
                    refetch()
                    toast('Successfully Deleted!',
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
            {
                patients.length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {
                            patients.map((patient, i) => (
                                <div key={patient._id}
                                    className="border border-gray-300 p-3 rounded"
                                >
                                    <p className='text-[#e0004d] font-semibold'>Patient_0{i + 1}</p>
                                    <h2 className='text-xl font-semibold text-[#333] mb-1'>
                                        {patient.name}
                                    </h2>
                                    <div className='flex justify-between items-end'>
                                        <div>
                                            <p className='text-lg font-semibold text-[#333] mb-1'>
                                                Contact: {patient.contact}
                                            </p>
                                            <p className='text-lg font-semibold text-[#333] mb-1'>
                                                Address: {patient.address}
                                            </p>
                                            <p className='text-[#333] text-lg font-semibold'>
                                                Pincode: {patient.pincode}
                                            </p>
                                        </div>
                                        <div className='text-[#333] text-2xl font-semibold mb-1'>
                                            <Link to={`/updatePatient/${patient?._id}`}>
                                                <button>
                                                    <MdUpdate
                                                        className='mb-1 cursor-pointer hover:text-[#e0004d] duration-300'
                                                    />
                                                </button>

                                            </Link>
                                            <MdOutlineDelete
                                                onClick={() => { handleDelete(patient?._id) }}
                                                className='cursor-pointer hover:text-[#e0004d] duration-300'
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    : <h2 className='text-[23px] md:text-4xl font-semibold text-[#333] my-6 text-center'>0 Patients Data Available</h2>

            }
        </div>
    );
};

export default Patients;