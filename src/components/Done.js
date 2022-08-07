import React from 'react'

export default function Done({updateDoneToFirebase,todo}) {
  return (
    <div>
          <button
            onClick={() => {
              updateDoneToFirebase(todo);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-10 hover:scale-110 hover:stroke-green-900 hover:animate-bounce "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          </div>
  )
}
