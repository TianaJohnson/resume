import React from 'react';
// import Checkbox from './../CheckboxSpike/CheckBoxSpike';
import Button from './../Button/Button';
import Map from '../Map/Map';
import './Main.css';


export default function Main () {
        return (
            <div className="main-div">
                <Button label="click me"></Button>
                <div>
                    <Map/>
                </div>
            </div>
         )
    
};

