import React from 'react';
import './Button.css';

export default function Button({lable}) {
    return(
        <>
        <button data-test-id="button" className="button-style">{lable}</button>
        </>
    )

}