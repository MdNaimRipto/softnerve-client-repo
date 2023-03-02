import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Loader from '../Pages/Shared/Loader';
import Navbar from '../Pages/Shared/Navbar';

export const PatientsProvider = createContext()

const Main = () => {
    const { data: patients = [], isLoading, refetch } = useQuery({
        queryKey: ['patients'],
        queryFn: async () => {
            const res = await fetch('https://softnerve-server-five.vercel.app/patients')
            const data = await res.json()
            return data
        }
    })

    const value = {
        patients,
        refetch
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <PatientsProvider.Provider value={value}>
            <Navbar />
            <Outlet />
            <Footer />
        </PatientsProvider.Provider>
    );
};

export default Main;