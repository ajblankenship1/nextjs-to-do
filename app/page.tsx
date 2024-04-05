'use client';

import { getTodaysDate } from "@/lib/date_helpers";
import AddToDoForm from "@/components/add_to_do/add_to_do";
import {useState} from 'react';
export default function HomePage(){
   const [toDoItems, setToDoItems] = useState([]);
   const [toDoItemInput, setToDoItemInput] = useState("");
   
   function handleFormSubmit(){
      setToDoItems([...toDoItems,toDoItemInput]);
      setToDoItemInput("");
      
   }

   function handleInputChange(event){
      setToDoItemInput(event.target.value);
   }
    return(
         <main>
            <section>
                <h1>TO DO LIST</h1>
                <h2>{getTodaysDate()}</h2>
             </section>
             <section>
             <form action={handleFormSubmit}>
               <label>ADD TO-DO HERE!</label>
               <input type="text" value={toDoItemInput} onChange={handleInputChange}/>
               <input type="submit" value="ADD"/>
             </form>
             </section>
             <section>
               {toDoItems.map((x) =>{
                  return (
                     <div>
                        <div>X</div>
                        <p>{x}</p>
                     </div>
                  )
               })}
               
             </section>
        </main>
    );
}