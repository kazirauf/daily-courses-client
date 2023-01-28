import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const Footer = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>creator name {user?.DisplayName} </h1>
        </div>
    );
};

export default Footer;