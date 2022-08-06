import React from "react";

export default function EditTodo() {

    const options=["Category","Work","Personal","Home","Study"];




  return (
    <div className="max-w-6xl mx-auto flex justify-between px-8 py-4 bg-yellow-300 shadow-xl mt-6 rounded-lg border-2 border-yellow-400">
      <div>
        <h2 className="text-2xl font-bold">Title:</h2><input type="text" placeholder=""/>
        <p>
          <b>Description:</b> <input type="text" placeholder=""/>
        </p>
       
      </div>
      <div className="flex">
        <div className="bg-red-200 px-2 py-2 mr-4 w-88">
        <select  className='mt-4 border rounded bg-yellow-200' ref={category}>


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
         
        </div>
        <diV className="p-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
          </button>
        </diV>
      </div>
    </div>
  );
}
