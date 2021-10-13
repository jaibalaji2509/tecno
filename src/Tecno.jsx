import { CCard, CContainer } from "@coreui/react";
import tecno from "../src/Images/291922.svg";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { AiFillTwitterCircle, AiOutlineGlobal } from "react-icons/ai";
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';


function Tecno() {
  return (
    <div>
      <CContainer className="contain" style={{ margin: "0px", padding: "0px" }}>
        <CCard style={{ margin: "0px", padding: "0px", width: "100%" , overflow:"hidden"}}>
          <div className="head">
            <img
              src={tecno}
              className={"imjas"}
              alt="tecno logo"
              style={{ float: "left", width: "15%" }}
            />
            <div
              style={{
                paddingLeft: "120px",
                marginTop: "5px",
                cursor: "pointer",
                width: "70%",
                float: "right",
              }}
            >
              <a href className={"navigar navigarphone"}>
                {" "}
                Phones
                <div className={"hidemachin"}>
            <img
              src="https://d316acfc88wber.cloudfront.net/global/icon/CAMON17Pro.png"
              alt="phone"
              width="100"
            />
            <br/>
            <div style={{marginLeft:"20px"}}>CAMON</div>

              <img 
              src="https://d316acfc88wber.cloudfront.net/global/icon/SPARK7p.png"
              alt="phone"
              width="100"
              style={{marginLeft:"150px", marginTop:"-170px"}}
              />
              <br/>
              <div style={{marginLeft:"180px", marginTop:"-43px"}}>SPARK</div>

              <img
              src="https://d316acfc88wber.cloudfront.net/global/menu-pic/pouvoir_-icon.png"
              alt="phone"
              width="100"
              style={{marginLeft:"300px", marginTop:"-171px"}}
              />
 <br/>
 <div style={{marginLeft:"335px", marginTop:"-40px"}}>POVA</div>

              <img 
              src="https://d316acfc88wber.cloudfront.net/global/phones/pop5/blue.png"
              alt="phone"
              width="100"
              style={{marginLeft:"450px", marginTop:"-178px"}}
              />
 <br/>
 <div style={{marginLeft:"496px", marginTop:"-44px"}}>POP</div>

              <img
              src="https://d316acfc88wber.cloudfront.net/all-icon.png"
              alt="phone"
              width="100"
              style={{marginLeft:"593px", marginTop:"-142px"}}
              />
 <br/>
 <div style={{marginLeft:"636px", marginTop:"-14px"}}>ALL</div>

          </div>
              </a>
              <a href className={"navigar"}>
                {" "}
                Tablets
              </a>
              <a href className={"navigar"}>
                {" "}
                Accessories
              </a>
              <a href className={"navigar"}>
                {" "}
                Stores
              </a>
              <a href className={"navigar"}>
                {" "}
                Support
              </a>
              <a href className={"navigar"}>
                {" "}
                Community
              </a>

             

            </div>
            <div
              style={{
                marginTop: "10px",
                cursor: "pointer",
                width: "10%",
                paddingLeft: "1250px",
              }}
            >
              <a href className={"navigar"}>
                <BsSearch />{" "}
              </a>
            </div>

            <div
              style={{
                paddingLeft: "50px",
                marginTop: "-20px",
                cursor: "pointer",
                width: "15%",
                float: "right",
              }}
            >
              <a href className={"navigar"}>
                {" "}
                <FaRegUserCircle />
              </a>
            </div>
          </div>

         

          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner" style={{ width: "100%" }}>
              <div class="item active">
                <img
                  src="https://www.mobile-phantom.com/fileadmin/sitedesign/Resources/Public/Image/homepage/top-banner-pc.png"
                  alt="Los Angeles"
                  style={{ width: "100%" }}
                />
              </div>

              <div class="item" style={{ height: "680px" }}>
                <img
                  src="https://www.tatacapital.com/blog/wp-content/uploads/2020/07/tecno-spark-power-banner.jpg"
                  alt="Chicago"
                  style={{ width: "100%" }}
                />
              </div>

              <div class="item" style={{ height: "680px" }}>
                <img
                  src="https://i.ytimg.com/vi/DckQP33oU2s/maxresdefault.jpg"
                  alt="New york"
                  style={{ width: "100%" }}
                />
              </div>

              <div class="item" style={{ height: "680px" }}>
                <img
                  src="https://cdn.shortpixel.ai/spai/q_lossy+ret_img/https://i1.wp.com/angelistech.com/wp-content/uploads/2018/09/Tecno-phantom-8-design.png?resize=712%2C350"
                  alt="New york"
                  style={{ width: "100%" }}
                />
              </div>

              <div class="item" style={{ height: "680px" }}>
                <img
                  src="https://www.africa-newsroom.com/press/files/download/1103d61b217565e/109159"
                  alt="New york"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div style={{width:"448px", maxWidth:"450px", height:"252px"}} className={"dualjump"}>
          <Player
      playsInline
      poster="https://d316acfc88wber.cloudfront.net/global/phones/camon17pro/videos/video/12.png">
      <source src="https://d316acfc88wber.cloudfront.net/global/phones/camon17pro/videos/video/ENG_Rise_Of_The_Selfie_1.mp4" type="video/mp4" />
    </Player>
          </div>

            <div className={"dualjump"}>
              <div style={{ marginLeft: "450px", marginTop: "-247px" }}>
                <img
                  src="https://d316acfc88wber.cloudfront.net/global/phones/camon17pro/CG8-order-dynamic-homepage-B-1200x450.jpg"
                  alt="picphone"
                  width="600"
                  height="300"
                />
              </div>

              <div
                style={{
                  marginLeft: "710px",
                  marginTop: "-250px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Dynamic
              </div>
              <div
                style={{
                  marginLeft: "594px",
                  marginTop: "-0",
                  fontSize: "20px",
                  opacity: "0.4",
                }}
              >
                CAMON 17Pro is available in the market
              </div>
            </div>

            <div className="dualjump">
              <div style={{ marginLeft: "895px", marginTop: "-108px" }}>
                <img
                  src="https://d316acfc88wber.cloudfront.net/global/about_us/1200_450_2_.png"
                  alt="about us"
                  width="800"
                  height="300"
                />
              </div>

              <div
                style={{
                  marginLeft: "1245px",
                  marginTop: "-256px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                About Us
              </div>
            </div>

          <div>
            <div style={{ marginTop: "250px", marginLeft: "200px" }}>
              {" "}
              <img
                src="https://d316acfc88wber.cloudfront.net/global/Hios/hios7.6-new/new/home-hios763.png"
                width="400"
                alt="down -1"
              />
            </div>

            <div
              style={{
                marginLeft: "334px",
                marginTop: "40px",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              {" "}
              TECNO HIOS
            </div>

            <div
              style={{
                marginLeft: "204px",
                marginTop: "0px",
                fontSize: "20px",
                fontWeight: "400",
                opacity: "0.4",
              }}
            >
              {" "}
              Slick interface for better interactive experience
            </div>

            <div style={{ marginLeft: "1000px", marginTop: "-318px" }}>
              {" "}
              <img
                src="https://d316acfc88wber.cloudfront.net/global/homepage/eg/compare_phone.png"
                alt="2phone"
                width="400"
              />{" "}
            </div>

            <div
              style={{
                marginLeft: "1118px",
                marginTop: "40px",
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              Compare Phone Models
            </div>

            <div
              style={{
                marginLeft: "1040px",
                marginTop: "0px",
                fontSize: "20px",
                fontWeight: "400",
                opacity: "0.4",
              }}
            >
              {" "}
              Select phone models for a more detailed <br />
              <span style={{ margin: "137px" }}> comparison</span>
            </div>
          </div>

          <div>
            <div style={{ marginLeft: "100px", marginTop: "100px" }}>
              <h5> About TECNO</h5>
              <br />
              <p className={"paraih-1"}>About Us</p>
              <br />
              <p className={"paraih"}>News</p>
              <br />
              <p className={"paraih"}>Press contact</p>
              <br />
            </div>

            <div style={{ marginLeft: "400px", marginTop: "-158px" }}>
              <h5> Products</h5>
              <br />
              <p className={"paraih-1"}>Camon</p>
              <br />
              <p className={"paraih"}>Spark</p>
              <br />
              <p className={"paraih"}>Pova</p>
              <br />
              <p className={"paraih"}>Pop</p>
              <br />
              <p className={"paraih"}>Tablets</p>
              <br />
              <p className={"paraih"}>Accessories</p>
              <br />
            </div>

            <div style={{ marginLeft: "700px", marginTop: "-247px" }}>
              <h5> Support</h5>
              <br />
              <p className={"paraih-1"}>FAQ</p>
              <br />
              <p className={"paraih"}>Downloads</p>
              <br />
              <p className={"paraih"}>Carlcare</p>
              <br />
              <p className={"paraih"}>Warrenty Check</p>
              <br />
            </div>

            <div style={{ marginLeft: "1000px", marginTop: "-187px" }}>
              <h5> App & Services</h5>
              <br />
              <p className={"paraih-1"}>HIOS</p>
              <br />
              <p className={"paraih"}>Boomplay Music</p>
              <br />
              <p className={"paraih"}>Vskit</p>
              <br />
            </div>

            <div>
              <img
                src={tecno}
                className={"imjas"}
                alt="tecno logo"
                style={{
                  float: "right",
                  width: "12%",
                  marginRight: "160px",
                  marginTop: "-165px",
                }}
              />
            </div>

            <div
              style={{
                float: "right",
                marginRight: "260px",
                marginTop: "-120px",
                opacity: "0.4",
                fontSize: "20px",
              }}
              className="hoverico"
            >
              <IoLogoFacebook />
            </div>

            <div
              style={{
                float: "right",
                marginRight: "235px",
                marginTop: "-120px",
                opacity: "0.4",
                fontSize: "20px",
              }}
              className="hoverico"
            >
              <AiFillTwitterCircle />
            </div>

            <div
              style={{
                float: "right",
                marginRight: "205px",
                marginTop: "-120px",
                opacity: "0.4",
                fontSize: "20px",
              }}
              className="hoverico_1"
            >
              <IoLogoInstagram />
            </div>
          </div>

          <div style={{height:"60px"}}>
              <div style={{marginTop:"100px", color:"#b8b4b4"}}>
                <hr/>
              </div >

              <div className="fooat">

                Privacy policy    <span style={{margin:"30px"}}>|</span> 
              </div>

              <div className="foot">
                Terms of Use       <span style={{margin:"30px"}}>|</span> 
                </div>

                <div className="foot-1">
                Site Map            <span style={{margin:"30px"}}>|</span> 
                </div>

              <div className="foot-2">
                <span><AiOutlineGlobal/></span>
                <span style={{margin:"30px"}}>Global</span>
              </div>


<div style={{float:"right", marginRight:"50px", marginTop:"-20px"}}>
© 2021-2025 TECNO Mobile
</div>
          </div>
        </CCard>
      </CContainer>
    </div>
  );
}

export default Tecno;