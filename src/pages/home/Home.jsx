import { RiseOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import "./Home.scss";
import Carouselfun from "./../../component/Carousel/Carousel";
import { cards, category, markerGroup } from "./../../Data";

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
              <input type="text" placeholder="Try 'building mobile'" />
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
      {/* /////////////////////////////// */}
      <div className="parcniors">
        <span>Trusted by : </span>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt=""
        />
      </div>
      {/* /////////////////////////////// */}
      <div className="popularSection">
        <h1>Popular professional services</h1>
        <div className="carouselpopular">
          <Carouselfun slidesToShow={5} slidesToScroll={5}>
            {cards.map((item) => (
              <div className="carouselcard" key={item.id}>
                <img src={item.img} alt={item.title} />
                <p>{item.desc}</p>
                <h3>{item.title}</h3>
              </div>
            ))}
          </Carouselfun>
        </div>
      </div>
      {/* /////////////////////////////// */}
      <div className="tafsilotsection">
        <div className="container">
          <div className="left">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>The best for every budget</h5>
              </div>
              <p className="tafsilottext">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>Quality work done quickly</h5>
              </div>
              <p className="tafsilottext">
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </div>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>Protected payments, every time</h5>
              </div>
              <p className="tafsilottext">
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </div>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>24/7 support</h5>
              </div>
              <p className="tafsilottext">
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="right">
            <iframe
              src="https://www.youtube.com/embed/YM8QbdwQ6NM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* /////////////////////////////// */}
      <div className="explore">
        <h1>Explore the marketplace</h1>
        <div className="container">
          {category.map((item) => (
            <div className="exploreCard" key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* /////////////////////////////// */}
      <div className="businesSolution">
        <div className="container">
          <div className="left">
            <h1 className="textnew">
              Fiverr business . <span className="btnnew"> NEW</span>
            </h1>
            <h1>
              A business solution <br /> designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools <br /> and
              benefits, dedicated to businesses
            </p>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>Connect to freelancers with proven business experience</h5>
              </div>
            </div>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>
                  Get matched with the perfect talent by a customer success
                  manager
                </h5>
              </div>
            </div>
            <div className="tafsilotcard">
              <div className="header">
                <img src="./img/check.png" alt="" />
                <h5>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </h5>
              </div>
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ////////////////////////////// */}
      <div className="markerGroupsection">
        <div className="markerCarousel">
          <Carouselfun slidesToShow={1} slidesToScroll={1} >
            {markerGroup.map((item) => (
              <div className="carouselcard" key={item.id}>
                   <iframe width="560" height="315" src={item.vidio} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="cardsright">
                  <h3>{item.name} | <RiseOutlined style={{color:'#1dbf73'}} /> <span>{item.lavel}</span></h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Carouselfun>
        </div>
        <div className="markerfooter">
             <div className="left">
                 <h4>Fiverr logo Marker</h4>
                 <h1>Make an incredible logo</h1>
                 <h1><i>in minutes</i></h1>
                 <p>Pre-designed by top talent. Just add your touch.</p>
                 <button>Try Fiverr Logo Maker</button>
             </div>
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1112,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png " alt="" />
        </div>
      </div>
    </div>
  );
}
