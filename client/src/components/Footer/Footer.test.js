import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'
import Footer from './Footer.js'

afterEach(cleanup)

test('<Footer />',()=>{
    const {debug, getByTestId}=render(<Footer/>);
    debug();
    // const footer=getByTestId('footer');
    
});