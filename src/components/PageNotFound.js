import React from 'react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
    const history = useHistory();
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{fontSize: '30px'}}>404 | Page not found!</h1>
            <button
                className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => history.push('/home')}>Home
            </button>
        </div>
    );
};

export default PageNotFound;
