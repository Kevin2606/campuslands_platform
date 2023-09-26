import React from 'react'

export const CardCursos = () => {
  return (
    <>
        <div className='flex flex-col items-center border p-10 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-2/5'>
            <h1 className='w-full text-center'>Javascript Experto</h1>
            <div>
                <p>Breve descripcion del curso</p>
            </div>
            <div>
                <button>Ver</button>
            </div>
        </div>
    </>
  )
}
