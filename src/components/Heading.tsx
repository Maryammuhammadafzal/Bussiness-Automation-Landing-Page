import React from 'react'

type HeadingProp ={
 title : string
}
const Heading = ({title}: HeadingProp) => {
  return (
    <h3 className='sm:text-3xl text-2xl flex xs:gap-5 gap-2 items-center font-semibold'>
      {title} <hr className='sm:w-[60px] w-[45px] border border-white' />
    </h3>
  )
}

export default Heading
