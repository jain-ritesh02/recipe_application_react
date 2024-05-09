import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="h-[10vh] ml-[2vh] w-full flex items-center justify-between ">
            <img
                className="h-full"
                src="https://imgs.search.brave.com/o6Uo3lrPPEXkaOGHLcdRcnzLc8n4KhPs7D9vTHsm1eU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU1L2Y4/L2FmLzU1ZjhhZmQw/ZDRjMjIyNDY1M2Yx/YmE0NjdiNjU0M2U4/LmpwZw"
                alt=""
            />
            <div className="flex gap-x-10 text-md items-center ml-[18vh]">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <i className="text-3xl ri-grid-fill text-red-600"></i>
            <button className="bg-green-600 rounded-xl text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
        </nav>
    );
};

export default Nav;