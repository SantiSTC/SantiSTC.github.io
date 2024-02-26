import React from 'react'

interface Props {
    link?: string;
  }

function Button({link}:Props) {
  return (
    <div>
        <button type='submit' value={"Enviar"} className='mt-4 h-8 w-72 rounded-md bg-green-700 items-center p-1 text-white focus:placeholder-transparent focus:outline-none hover:bg-green-900'>
            Enviar
        </button>
    </div>
  )
}

export default Button