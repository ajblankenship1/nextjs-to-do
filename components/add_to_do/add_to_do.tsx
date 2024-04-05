'use client';


import styles from "@/components/add_to_do/styles.module.css";
import { useState } from 'react';

export default function AddToDoForm(){
    const [hair, setHair] = useState('red');

    function handleFormSubmit(){
       setHair("blue");
    }

    return(
        <form className={styles.addToDoForm} action={handleFormSubmit}>
            <p>Current Hair Color: {hair}</p>
            <label>ADD TO-DO HERE!</label>
            <input type="text"/>
            <input type="submit" value="ADD"/>
        </form>
    )
}