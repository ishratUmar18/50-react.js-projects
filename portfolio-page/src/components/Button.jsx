import React from 'react'

const Button = ({styles}) => {
  return (
    <div className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12">
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[8px]`}>
     Demo
    </button>
    <button class={`py-4 px-6 bg-transparent hover:bg-blue-gradient font-poppins font-medium text-[18px] text-primary text-gradient border border-blue-gradient ${styles} rounded-[8px]`}>
  Code
</button>
    </div>
  )
}
export default Button