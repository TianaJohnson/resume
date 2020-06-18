import React from 'react';
// import Checkbox from './../CheckboxSpike/CheckBoxSpike';
import Button from './../Button/Button';
import GAmap from '../Map/Map';
import './Main.css';


export default function Main () {
        return (
            <div className="main-div">
                <Button label="click me"></Button>
                <div>
                    <GAmap/>
                </div>
            </div>
         )
    
};

