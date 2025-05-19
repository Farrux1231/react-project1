import React, { useState } from "react";
import { IoHomeOutline, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsMoon, BsSun } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Switch from "@mui/material/Switch";
import "./style.css";
import { useStateValue } from "@/context";

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };
  
  const handleChange = () => {
    setChecked(!checked);
    dispatch({type:"bg", payload:checked})
  };

  return (
    <nav className={state.bgColor === true ? "bg-black text-white p-[20px] text-4xl" : "bg-white text-black p-[20px] text-4xl"}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="hidden md:flex space-x-16 ml-13">
          <NavLink className="flex flex-col items-center header-link" to="/">
            <IoHomeOutline className="text-2xl" />
            <span className="text-[17px]">
              {state.lang === "en"
                ? "Home"
                : state.lang === "uz"
                ? "Asosiy"
                : state.lang === "ru"
                ? "Главный"
                : "Home"}
            </span>
          </NavLink>
          <NavLink className="flex flex-col items-center header-link" to="/movies">
            <MdOutlineMovie className="text-2xl" />
            <span className="text-[17px]">
              {state.lang === "en"
                ? "Movie"
                : state.lang === "uz"
                ? "Kino"
                : state.lang === "ru"
                ? "Фильм"
                : "Movie"}
            </span>
          </NavLink>
          <NavLink className="flex flex-col items-center header-link" to="/saved">
            <IoBookmarkOutline className="text-2xl" />
            <span className="text-[17px]">
              {state.lang === "en"
                ? "Saved"
                : state.lang === "uz"
                ? "Saqlangan"
                : state.lang === "ru"
                ? "Сохранить"
                : "Saved"}
            </span>
          </NavLink>
          <NavLink className="flex flex-col items-center header-link" to="/search/movie">
            <IoSearchOutline className="text-2xl" />
            <span className="text-[17px]">
              {state.lang === "en"
                ? "Search"
                : state.lang === "uz"
                ? "Qidiruv"
                : state.lang === "ru"
                ? "Поиск"
                : "Search"}
            </span>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={checked}
              onChange={handleChange}
              className="custom-switch"
            />
            {checked ? (
              <BsSun className="text-yellow-500 text-2xl" />
            ) : (
              <BsMoon className="text-gray-400 text-2xl" />
            )}
          </div>
          <select
            name="language"
            id="language"
            onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
            className="bg-gray-800 text-white p-2 rounded-[7px] w-28 h-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbek</option>
          </select>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <HiOutlineMenuAlt3 className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-[250px] bg-black text-white shadow-lg z-50 flex flex-col p-4 space-y-4">
          <button className="self-end text-2xl mb-4" onClick={toggleMenu}>
            ✖
          </button>
          <NavLink className="flex items-center space-x-4" to="/" onClick={toggleMenu}>
            <IoHomeOutline className="text-xl" />
            <span className="text-[22px]">
              {state.lang === "en"
                ? "Home"
                : state.lang === "uz"
                ? "Asosiy"
                : state.lang === "ru"
                ? "Главный"
                : "Home"}
            </span>
          </NavLink>
          <NavLink className="flex items-center space-x-4" to="/movies" onClick={toggleMenu}>
            <MdOutlineMovie className="text-xl" />
            <span className="text-[22px]">
              {state.lang === "en"
                ? "Movie"
                : state.lang === "uz"
                ? "Kino"
                : state.lang === "ru"
                ? "Фильм"
                : "Movie"}
            </span>
          </NavLink>
          <NavLink className="flex items-center space-x-4" to="/saved" onClick={toggleMenu}>
            <IoBookmarkOutline className="text-xl" />
            <span className="text-[22px]">
              {state.lang === "en"
                ? "Saved"
                : state.lang === "uz"
                ? "Saqlangan"
                : state.lang === "ru"
                ? "Сохранить"
                : "Saved"}
            </span>
          </NavLink>
          <NavLink className="flex items-center space-x-4" to="/search/movie" onClick={toggleMenu}>
            <IoSearchOutline className="text-xl" />
            <span className="text-[22px]">
              {state.lang === "en"
                ? "Search"
                : state.lang === "uz"
                ? "Qidiruv"
                : state.lang === "ru"
                ? "Поиск"
                : "Search"}
            </span>
          </NavLink>
          <select
            name="language"
            id="language"
            onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
            className="bg-gray-800 text-white p-1 rounded-[7px] w-full text-sm h-[40px]"
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbek</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
