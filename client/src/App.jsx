import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo, logoBlack } from "./assets";

import { Home, CreatePost } from "./pages";

const App = () => {
    const [darkToggle, setDarkToggle] = useState(false);

    return (
        <BrowserRouter>
            <div
                className={`w-[100vw] h-[100vh] bg-[white] dark:bg-[#090721] ${
                    darkToggle && "dark"
                }`}
            >
                <header className="w-full flex justify-between items-center bg-white dark:bg-[#090721] dark:text-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
                    <Link to="/">
                        <img
                            src={!darkToggle ? logo : logoBlack}
                            alt="logo"
                            className="w-28 object-contain"
                        />
                    </Link>
                    <div>
                        <label className="toggleDarkBtn mr-2 py-0.5">
                            <input
                                type="checkbox"
                                onClick={() => setDarkToggle(!darkToggle)}
                            />
                            <span className="slideBtnTg round"></span>
                        </label>
                        <Link
                            to="/create-post"
                            className="font-inter font-medium bg-[#6469ff] text-white  px-4 py-2 rounded-md"
                        >
                            Create
                        </Link>
                    </div>
                </header>
                <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#090721] dark:text-white  mid-h-[calc(100vh - 73px")]'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-post" element={<CreatePost />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
