import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React from 'react'
import Swap from "../swap";

const Home = () => {
    return (
        <div>
            {/* <Heads/> */}
            <Header />
            <div className="relative pt-16 bg-W3GTopBG">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="  ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <Swap />
                        </div>
                    </div>
                </div>
            </div>
            <Tail />
        </div>
    )
}

export default Home

