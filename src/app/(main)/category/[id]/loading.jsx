import React from 'react';

const loadingPage = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            Category loading
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default loadingPage;