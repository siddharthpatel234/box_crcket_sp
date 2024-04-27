import React, { useState } from 'react';
import {Rating} from  '@mui/material';
import '../Components/List.css';

export default function List() {

    let details = [
        {
            title: 'Eklavya Box Cricket',
            desc1: 'Tulip Bungalow Road, near Enigma Towers,',
            desc2: 'Thaltej, Ahmedabad, Gujarat 380054.'
        },
        {
            title: 'SwingZone Box Cricket',
            desc1: 'near Chacha Chaudhary Tea And Snacks Corner, opp. Godrej Garden City,',
            desc2: 'Gota-Jagatpur, Ahmedabad, Gujarat',
        },
        {
            title: 'SwingZone Box Cricket',
            desc1: 'near Chacha Chaudhary Tea And Snacks Corner, opp. Godrej Garden City,',
            desc2: 'Gota-Jagatpur, Ahmedabad, Gujarat',
        },
        {
            title: 'SwingZone Box Cricket',
            desc1: 'near Chacha Chaudhary Tea And Snacks Corner, opp. Godrej Garden City,',
            desc2: 'Gota-Jagatpur, Ahmedabad, Gujarat',
        },
        {
            title: 'Eklavya Box Cricket',
            desc1: 'Tulip Bungalow Road, near Enigma Towers,',
            desc2: 'Thaltej, Ahmedabad, Gujarat 380054.'
        },
        {
            title: 'Eklavya Box Cricket',
            desc1: 'Tulip Bungalow Road, near Enigma Towers,',
            desc2: 'Thaltej, Ahmedabad, Gujarat 380054.'
        },
        {
            title: 'Eklavya Box Cricket',
            desc1: 'Tulip Bungalow Road, near Enigma Towers,',
            desc2: 'Thaltej, Ahmedabad, Gujarat 380054.'
        },
    ];

    const [value,setvalue] = useState(4);

    const list = details.map((item) => {
        return (

            <div className="container">
                <div className="wrapper">
                    <div className="banner-image"> </div>
                    <h1> {item.title}</h1>
                    <p> {item.desc1}
                        <br />
                        {item.desc2}
                    </p>
                </div>
                <div className='rating'>
                    <Rating name="read-only" value={value} readOnly />
                </div>
                <div className="button-wrapper">
                    <button className="btn outline">DETAILS</button>
                    <button className="btn fill">BUY NOW</button>
                </div>
            </div>

        )
    });


    return (
        <>
            {list}
        </>
    )
}
