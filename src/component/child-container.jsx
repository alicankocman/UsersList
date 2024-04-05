// child-container.jsx
import React from "react";
import {HeaderTitle, Cards, Cards_alt } from "./family-container"; // Doğru bileşenleri içe aktarıyoruz
import "./container.css";

const Main = () => {
    return (
        <div className="main">
            <HeaderTitle
                title="Users"
                SearchUsers={
                    <>
                        <span style={{position:"relative",right:"100px",top:"15px"}} className="material-symbols-outlined">search</span>
                        <span className="spanname" style={{position:"relative",right:"100px",top:"10px"}}>Search Users</span>
                    </>
                }
                button1={<button className="button1">Reputation</button>}
                button2={<button className="button2">Newusers</button>}
                button3={<button className="button3">Voters</button>}
                button4={<button className="button4">Editors</button>}
                button5={<button className="button5">Moderators</button>}
            />
            <div className="cards-container">
                <Cards
                    card1={<div className="card1">
                        <img className="imgg" src="https://i.pinimg.com/280x280_RS/bd/0f/c5/bd0fc5463893311dcb1d9463e603814d.jpg" alt="placeholder" />
                <p className="name">Lelah Nichols</p>
                <p className="city">Troy, MI</p>
                </div>}
                    card2={<div className="card2">
                        <img className="imgg" src="https://i.pinimg.com/236x/1d/9f/c9/1d9fc9cbb49558d373e16c729c774ab6.jpg" alt="placeholder" />
                        <p style={{position:"relative",left:"10px"}} className="name">Namık EKİN</p>
                        <p className="city">Troy, MI</p>
                    </div>}
                    card3={<div className="card3">
                        <img className="imgg" src="https://img-s1.onedio.com/id-569d89cc746d233b1bead1f3/rev-0/w-600/h-600/f-jpg/s-c85f74f2274a2a26407f4de7bbb1d3e46a0c153b.jpg" alt="placeholder" />
                        <p className="name">Mehmet KARA</p>
                        <p className="city">Troy, MI</p>
                    </div>}
                />
                <Cards_alt
                    card4={<div className="card4">
                        <img className="imgg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XQ3WzhhSzzvsyAkdSUtSAZ9Mcnh8hptbt_3y8JLmdw&s" alt="placeholder" />
                    <p style={{position:"relative",left:"5px"}} className="name">Azmi KAYA</p>
                    <p className="city">Troy, MI</p></div>
                    }
                    card5={<div className="card5">
                        <img className="imgg" src="https://profil.hku.edu.tr/wp-content/uploads/kevser.jpeg" alt="placeholder" />
                        <p className="name">Leyla ORKİDE</p>
                        <p className="city">Troy, MI</p>
                    </div>}
                    card6={<div className="card6">
                        <img className="imgg" src="https://ydy.hku.edu.tr/wp-content/uploads/2022/09/Aybige-Arik-Fotograf-450x600.jpg" alt="placeholder" />
                        <p className="name">Zeynep ATAK</p>
                        <p className="city">Troy, MI</p>
                    </div>}
                />
            </div>
        </div>
    );
};

export default Main;
