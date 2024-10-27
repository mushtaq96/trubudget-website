// src/theme/Layout.js
import React from 'react';
import Layout from '@theme-original/Layout';
import Navbar from '../components/Navbar';

export default function CustomLayout(props) {
    return (
        <>
            {/* <Navbar /> */}
            <Layout {...props} />
        </>
    );
}