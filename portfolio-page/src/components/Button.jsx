import React from 'react'
import { arrowUp } from '../assets'

const Button = ({styles}) => {
  return (
    <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-6 xl:space-x-10">
    <button type="button" className={`flex py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[8px]`}>
     Demo <img src={ arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
    </button>
    <button class={`flex py-4 px-6 bg-transparent hover:bg-blue-gradient font-poppins font-medium text-[18px] text-primary text-gradient border border-blue-gradient ${styles} rounded-[8px]`}>
  Code <img src={ arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
</button>
    </div>
  )
}
export default Button