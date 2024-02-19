import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
  return (

    <header className='w-screen flex-col w-screen'>
      <header className='w-full page_padding py-3 bg-color_131921 text-white flex items-center justify-between '>
        <p>Free Shipping Over $100 Free Returns</p>
        <a href='tel:+94718736614' >Hotline:+94718736614  </a>
      </header>
      <header className='w-full page_padding py-3 bg-color_131921 text-white flex items-center justify-between '>
        <h2>
          <Link to={""}>Digitic</Link>
        </h2>
        <div className='flex'>
          <input type='text' name='main search' placeholder='Search Product Here..' className='min-w-2vw p-2 px-4 text-black rounded-l focus:outline-none' />
          <button className='p-2 px-4 rounded-r bg-color_febd69'><FaSearch /></button>
        </div>
        <div>
          <Link to={""}>
            <img src="" alt="" />
            
          </Link>
        </div>
      </header>
      <header></header>
    </header>

  );
}
