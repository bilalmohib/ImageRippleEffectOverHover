import React, { useState, useEffect } from "react";
//Imoprting Components
import Navbar from "./Navbar";
import Player from "./Player";

const Home = () => {
    return (
        <>
            <Navbar />
            <br />
            <Player />
        </>
    )
}
export default Home;