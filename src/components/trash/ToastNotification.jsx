import React, { useState } from 'react';

const Toast = ({ message, setShowToast }) => (
    <div className="absolute top-  pb-2 sm:pb-5 w-80">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-3 bg-green-500 rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-3 w-0 flex-1">
                        <p className="text-sm leading-5 font-medium text-white">{message}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                        <button value={message}
                            type="button"
                            className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                            onClick={() => setShowToast(false)} >
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011. 414 0L10 8.586l4. 293-4. 293a1 1 0 111. 414 1. 414L11. 414 10l4. 293 4. 293a1 1 0 01-1. 414 1. 414L10 11. 414l-4. 293 4. 293a1 1 0 01-1. 414-1. 414L8. 586 10 4. 293 5.707a1 1 0 010-1. 414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ToastNotification = ({ message }) => {
    const [showToast, setShowToast] = useState(false);

    return showToast ? <Toast message={message} setShowToast={setShowToast} /> : null;
};

export default ToastNotification;
