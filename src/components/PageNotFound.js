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
            <h1 style={{fontSize: '30px'}}>404 Page not found!</h1>
            <h2 style={{fontSize: '28px'}}>Please return to <button onClick={()=> history.push('/home')}>Home</button></h2>
        </div>
    );
};

export default PageNotFound;