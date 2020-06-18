import React from 'react';
import './Button.css';

export default function Button({label}) {
    return(
        <>
        <button data-test-id="button" className="button-style">{label}</button>
        </>
    )

}