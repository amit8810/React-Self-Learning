import React from 'react'

export default function Card(props) {
  return (
    <div className='card flex flex-col justify-center'>
        <img src={props.imageSrc} alt="props.altText" className='w-[500px]' />
        <div className='card-content flex flex-col justify-center items-center'>
            <h2 className='text-white font-bold text-4xl mb-8'>{props.title}</h2>
            <p className='text-gray-300 text-lg leading-10 tracking-tight text-wrap w-full max-w-md'>{props.description}</p>
        </div>
    </div>
  )
}
