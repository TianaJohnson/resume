import React from 'react';
import './Button.css';

export default function Button({lable}) {
    return(
        <div data-test-id="button" className="button-style">{lable}</div>
    )

}