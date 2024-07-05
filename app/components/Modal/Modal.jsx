import React from 'react';


const Modal = ({ isVisible }) => {
    if (!isVisible) {
        document.body.classList.remove("overflow-y-hidden")
        return null;
    }
    else {
        document.body.classList.add("overflow-y-hidden")
    }

    return (
        <div className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center z-10'>
            <div className='w-80 h-[300px] bg-[#C7C2CB] bg-opacity-90 rounded-lg shadow-lg flex justify-center'>
                <h3 className='text-[28px] mt-4'>
                    Error...
                </h3>
            </div>
        </div>
    )
}

export default Modal;