import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({link}) => {
  return (
    <ul className='flex p-4 flex-col'>
       {link.map((link, index) => (
                    <li key={index}><NavLink href={link.path} title={link.title}/></li>
                ))
                }
       </ul>
  )
}

export default MenuOverlay