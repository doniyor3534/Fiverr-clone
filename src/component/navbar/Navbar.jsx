import { EuroOutlined, GlobalOutlined } from "@ant-design/icons/lib/icons";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [scrollactive, setScrollactive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setScrollactive(true) : setScrollactive(false);
    });
  }, []);

  return (
    <nav className={scrollactive ? "navbar active" : "navbar"}>
      <div className="container">
        <span className="logo">
          <div className="text">
            Fiverr
          </div>
        </span>
        <ul className="navul">
          <span>Fiverr Business</span>
          <span>Expolre</span>
          <span>
            {" "}
            <GlobalOutlined /> English
          </span>
          <span>
            <EuroOutlined /> EUR
          </span>
          <span>EURBecome a Seller</span>
          <span>sign in</span>
          <button>Join</button>
        </ul>
      </div>

      {scrollactive && (
        <div className="navBottom">
          <div className="container">
            <button>
              Graphics & Design
              <div className="navbtncard">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Digital Marketing
            <div className="navbtncard">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Writing & Translation
            <div className="navbtncard">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Video & Animation
            <div className="navbtncard">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Music & Audio
            <div className="navbtncard navbtncardright">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Programming & Tech
            <div className="navbtncard navbtncardright">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Business
            <div className="navbtncard navbtncardright">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>Lifestyle
            <div className="navbtncard navbtncardright">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
            <button>
              AI Services <div className="new">NEW</div>
              <div className="navbtncard navbtncardright ">
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Web & App Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Visual Design</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Gaming</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Marketing Design</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Logo & Brand Identity</h3>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                </ul>
                <ul>
                  <h3>Miscellaneous</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine</span>
                </ul>
                <ul>
                  <h3>Fashion & Merchandise</h3>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Logo desine</span>
                  <span>Landing Page  desine    </span>
                </ul>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
