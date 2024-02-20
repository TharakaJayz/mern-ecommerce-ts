import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { IoMdArrowDropdown } from "react-icons/io";


export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
  return (

    <header className='w-screen flex-col'>
      <header className='w-full page_padding py-3 bg-color_131921 text-white flex items-center justify-between border-b border-b-gray-800 '>
        <p>Free Shipping Over $100 Free Returns</p>
        <a href='tel:+94718736614' >Hotline:+94718736614  </a>
      </header>
      <header className='w-full page_padding py-3 bg-color_131921 text-white flex items-center justify-between '>

        <Link to={""}>
          <h2 className='text-3xl'>
            Digitic
          </h2>
        </Link>

        <div className='flex'>
          <input type='text' name='main search' placeholder='Search Product Here..' className='min-w-3vw p-2 px-4 text-black rounded-l focus:outline-none' />
          <button className='p-2 px-4 rounded-r bg-color_febd69'><FaSearch /></button>
        </div>
        <div className='flex gap-5'>
          <Link to={""} className='flex items-center justify-center gap-2' >
            <img src="/images/compare.svg" alt="" />
            <p>Compare <br />Products</p>
          </Link>
          <Link to={""} className='flex items-center justify-center gap-2' >
            <img src="/images/wishlist.svg" alt="" />
            <p>Favourite <br />Wishlist</p>
          </Link>
          <Link to={""} className='flex items-center justify-center gap-2' >
            <img src="/images/user.svg" alt="" />
            <p>Log In <br />My Account</p>
          </Link>
          <Link to={""} className='flex items-center justify-center gap-2' >
            <img src="/images/cart.svg" alt="" className='' />
            <div className='flex-col justify-center  items-center '>

              <span className='bg-white text-center text-black rounded flex items-center justify-center'>0</span>

              <p className='block'>$0.00</p>
            </div>
          </Link>
        </div>
      </header>
      <header className=' page_padding py-2 flex justify-start items-center gap-5 bg-color_232f3e text-white' >
        <div>
          {/*STYLED USING CUSTOM CSS IN APP.CSS*/}
          <PopupState variant="popover" popupId="demo-popup-menu" >
            {(popupState) => (
              <React.Fragment>
                <Button variant="contained" {...bindTrigger(popupState)} className='header_mui_menu_btn'>
                  <div className='flex items-center gap-3'>


                    <img src="/images/menu.svg" alt="" />  <p> Dashboard </p>  </div> <IoMdArrowDropdown />
                </Button>
                <Menu {...bindMenu(popupState)} className='header_mui_menu' >
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
        <div className='flex justify-start items-center gap-5 uppercase'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>Our Store</NavLink>
          <NavLink to={"/"}>Blogs</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </header>
    </header >

  );
}
