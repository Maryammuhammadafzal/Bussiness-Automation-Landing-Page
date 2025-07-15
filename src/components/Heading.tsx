import React from 'react'

type HeadingProp ={
 title : string
}
const Heading = ({title}: HeadingProp) => {
  return (
    <h3 className='text-3xl flex gap-5 items-center font-semibold'>
      Our Expertise <hr className='w-[60px] border border-white' />
    </h3>
  )
}

export default Heading
