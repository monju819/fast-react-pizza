import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, disabled,to,type}) => {
  // const className="bg-yellow-500 inline-block px-4 py-3  sm:px-6 sm:py-4 font-semibold uppercase text-stone-800 tracking-wide rounded-full hover:bg-yellow-300  transition-colors duration-300 focus:outline-none  focus:ring focus:ring-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed";

  const base= "bg-yellow-500 inline-block text-sm  font-semibold uppercase text-stone-800 tracking-wide rounded-full hover:bg-yellow-300  transition-colors duration-300 focus:outline-none  focus:ring focus:ring-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed";
  const style={
    primary:base   + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "inline-block border-2 border-stone-300 text-sm  font-semibold uppercase text-stone-400 tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none  focus:ring focus:ring-stone-200 focus:ring-offset-2  disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5"
  }

  if(to) return <Link  to={to} className={style[type]}> {children} </Link>


  return (
    <button disabled={disabled} className={style[type]}>
{children}
    </button>
  )
}

export default Button