import React from "react";

const Home = () => {
    return (
        <div className="w-full flex justify-between items-center  h-[60vh] mt-[6vh] mb-[10vh]">
            <div className="left w-1/2 ">
                <h1 className="text-5xl font-extrabold text-green-600">
                    Make your own FOOD, <br /> stay at HOME
                </h1>
                <p className="text-zinc-400 mt-7 mb-8">
                Enjoy cooking different cuisines! But if you are new to cooking, don’t worry; we’ve got you covered. Whether you are a noob or a professional cook searching for the right recipe on the Internet may take a lot of time. Along with it is the issue of saving it or putting it down in a new place. 
                </p>
                <button className="bg-[#FDCF9C] rounded-xl text-white py-2 px-5 hover: bg-green-600 duration-200">
                    Explore &nbsp; &#8594;
                </button>
            </div>
            <img
                className="w-[35vw] rounded-3xl object-cover object-center"
                src="https://cdn.pixabay.com/photo/2023/12/06/08/44/rotini-8433250_1280.jpg"
                alt=""
            />
        </div>
    );
};

export default Home;