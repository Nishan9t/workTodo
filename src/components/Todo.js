import React from "react";
import { useState } from "react";
import Done from "./Done"

export default function Todo({
  todo,
  deleteTodoFromFirebase,
  updateDoneToFirebase,
}) {
  // const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  // console.log(event.toLocaleDateString(undefined, options));

  // const [color, setColor] = useState(todo.done);

  // function clicked() {
  //   if (color) {
  //     setColor("green");
  //     updateDoneToFirebase(todo);
  //   }
  //   else{
  //     setColor("none")
  //   }
  // }
  const [update,setUpdate]=useState(false);

  return (
    <div className="max-w-6xl mx-auto flex justify-between px-8 py-4 bg-yellow-300 shadow-xl mt-6 rounded-lg border-2 border-yellow-400">
      <div>
        <h2 className="text-2xl font-bold">Title: {todo.title}</h2>
        <p>
          <b>Description:</b> {todo.desc}
        </p>
        <div className="flex space-x-6 mt-3">
          {(!todo.done)?<Done updateDoneToFirebase={updateDoneToFirebase} todo={todo}/>:<></>


          }
          <button
            onClick={() => {
              deleteTodoFromFirebase(todo);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-500 hover:fill-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="bg-red-200 px-2 py-2 mr-4 w-88">
          <h3>
            <b>Category:</b> {todo.category}
          </h3>
          <h4 className="flex">
            <b>Done:</b>
            {todo.done ? (
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </h4>
          <h4>
            <b>Last Updated: </b>
            <span className="text-blue-900">
              {
                // new Date(todo.date.seconds*1000).toLocaleDateString(undefined, options)
                new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "full",
                  timeStyle: "short",
                }).format(new Date(todo.date.seconds * 1000))
              }
            </span>
          </h4>
        </div>
        <diV className="p-4">
          <button onClick={()=>{
            setUpdate(true);
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </diV>
      </div>
    </div>
  );
}
