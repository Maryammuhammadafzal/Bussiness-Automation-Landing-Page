import React from 'react'

type HeadingProp ={
 title : string
}
const Heading = ({title}: HeadingProp) => {
  return (
    <h3 className='sm:text-3xl text-2xl flex gap-5 items-center font-semibold'>
      Our Expertise <hr className='sm:w-[60px] w-[45px] border border-white' />
    </h3>
  )
}

export default Heading
