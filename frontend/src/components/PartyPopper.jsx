import React from 'react';
import { Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartyPopper = ({ title, description, position, theme }) => {
    const getToastClass = () => {
        switch (theme) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <Toast
            className={`toast ${getToastClass()} text-white p-4 rounded`}
            position={position}
        >
            <div className="font-bold">{title}</div>
            <div>{description}</div>
        </Toast>
    );
};

export default PartyPopper;
