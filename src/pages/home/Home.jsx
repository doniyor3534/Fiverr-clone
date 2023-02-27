import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="glavnisection">
        <div className="container">
          <div className="left">
            <h1>
             Find the perfect <i>freelance</i> services for your business
            </h1>
            <form>
               <SearchOutlined />
               <input type="text" placeholder="Try 'building mobile'"  />
               <button>Search</button>
            </form>
            <div className="popular">
                <span>Popular : </span>
                <button>Website Degign</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>All Services</button>
            </div>
          </div>
          <div className="right">
            <img src="./img/man.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
