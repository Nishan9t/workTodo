import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function EditTodo({ todo,setUpdate ,updateDataToFirebase}) {
  const options = ["Category", "Work", "Personal", "Home", "Study"];

  options.splice(options.indexOf(todo.category),1)
  options.unshift(todo.category)
  console.log(options)

  const title = useRef(todo.title);
  const desc = useRef(todo.desc);
  const category = useRef(todo.category);


    function handleUpdate(){
        
        if(title.current.value!==""){
           todo={...todo,title:title.current.value}
        }
        if(desc.current.value!=="")
        {
            todo={...todo,desc:desc.current.value}
        }
        
            const newTodo={
                id:todo.id,
                title:title.current.value,
                desc:desc.current.value,
                done: false,
                date:new Date(),
                category:category.current.value
            
               };
              
               updateDataToFirebase(newTodo);
               setUpdate(false);
               
        
    }

  return (
    <div className="max-w-6xl mx-auto flex justify-between px-4 py-4 bg-yellow-300 shadow-2xl shadow-black mt-6 rounded-lg border-2 border-yellow-400">
      <div className="flex justify-between">
        <div>
        <h4 className="text-2xl font-bold">Title: </h4>
        <input ref={title} type="text" placeholder= {todo.title} className="h-8 ml-4 ml-2 rounded-lg p-2"/>
        </div>

        <div className="ml-12">

        <h4 className="text-2xl font-bold">Description: </h4>
        <textarea ref={desc} placeholder= {todo.desc} className="ml-2 h-16 w-80 rounded-lg p-2"></textarea>
        </div>
        
      </div>
      <div className="flex">
        <div className="bg-red-200  py-2 mr-4 w-96 px-2 mt-4 h-24">
          <select className=" border rounded bg-yellow-200 w-full mt-8" ref={category}>
            {options.map((option) => {
              return (
                <option
                  key={option}
                  //value={option}
                >
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="p-4">
          <button onClick={()=>{
            handleUpdate();
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="green"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            <div>
               < button className="mt-4"
               onClick={()=>{
                setUpdate(false);
               }}
               >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 20 20"
              fill="red"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
            </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
