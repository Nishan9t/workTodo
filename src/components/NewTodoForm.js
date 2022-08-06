import React, { useEffect, useRef, useState } from 'react'

import { Dialog } from '@headlessui/react'
import toast from 'react-hot-toast';






export default function NewTodoForm({isOpen,setIsOpen,todoArray,addTodoToFirebase}) {
 
 
       const options=["Category","Work","Personal","Home","Study"];

       const title=useRef(null);
       const desc=useRef(null);
       const category=useRef(null);
      
      


       const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.current.value===""||desc.current.value===""|| category.current.value==="Category"){
            toast.error("All fields must be filled");
        }
        else{
          const newTodo={
       
            title:title.current.value,
            desc:desc.current.value,
            done: false,
            date:new Date(),
            category:category.current.value
        
           };
           addTodoToFirebase(newTodo);
        }

       }
    
   
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-1/2 rounded bg-white">
         
          

          <div className='mx-auto'>
          <Dialog.Title className="font-bold text-xl mt-4 ml-8">Create New Todo
           </Dialog.Title>
            <form className='flex flex-col px-8 pb-8 rounded-lg'> 
            
                <input ref={title} type="text" placeholder='Add Todo Title' className='border border-2 mt-8 rounded bg-yellow-200' 
                //value={newTodo.title}
                
               
                />
                <textarea ref={desc} placeholder='Add Todo Description' className='border border-2 mt-4 rounded bg-yellow-200' rows="6" cols="4"
               //value={newTodo.desc}
               
               
                />
                <select  className='mt-4 border rounded bg-yellow-200' ref={category}>

                {/* <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option> */}
                {options.map((option)=>
                {
                  return(
                    <option key={option}
                    //value={option} 
                      > 
                    {option}
                    
                    </option>
                  )
                })}

                </select>
                <button className='bg-blue-500 rounded-lg shadow mt-8 h-8 hover:bg-green-400' 
                onClick={(e)=>
                  {
                    {handleSubmit(e)}
                  }}
                >Add New Todo</button>
                

            </form>
           
          </div>


        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
