import React from "react";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/footer";

const About = () => {
  return (
    <div className="bg-white">
      <NavBar />

      <div className="py-40  px-72  grid grid-cols-2 gap-28 text-black justify-center ">
        <div className=" mr-10 w-[500px] ">
          <p className="text-[#E6007A] p-5">KNOWLEDGE HUB</p>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-950 mt-2 font-unbounded">
            Blockspace <br /> and coretime
          </h1>
          <p className="mt-3 text-lg">
            Explore how Polkadot's blockspace ecosystem can fuel <br /> your
            Web3 project, and how Agile Coretime enables you <br /> to purchase
            blockspace in the most cost-effective way.
          </p>
        </div>
        <div className="mr-10 w-[500px]">
          <img
            src="https://polkadot.network/static/610b3b0998789f4748e3ca79aee74338/e6da7/blockspace_coretime_hero.avif"
            alt=""
          />
        </div>
      </div>

      <div className="py-40  px-72  grid grid-cols-2 gap-28 text-black justify-center bg-[#F3F5FB] ">
        <div className="mr-10 w-[500px]">
          <img
            src="https://polkadot.network/static/bbe30d0bfe5aa63d782c54e1b499c604/8e57d/1%2B1%3D3.avif"
            alt=""
          />
        </div>

        <div className=" mr-10 w-[500px] ">
          <p className="text-[#E6007A] p-5"> Polkadot's blockspace ecosystem</p>
          <h3 className="text-3xl font-[900]">1 + 1 = 3</h3>
          <p className="mt-3 text-lg">
            Combine blockspace from different providers in <br /> Polkadot’s
            ecosystem to bring your innovation to
            <br /> market fast. Discover how Polkadot’s blockspace <br />{" "}
            ecosystem enables you to realize your Web3 project.
          </p>
          <button className="mt-10 bg-black text-white px-6 py-5 font-semibold hover:bg-pink-500 rounded-full text-s">
            Learn more
          </button>
        </div>
      </div>

      <div className="h-[584px] bg-[#111823] text-[#FFFFFF] px-80 p-20">
        <p className="text-[#E6007A] p-5 uppercase text-base font-semibold">
          Polkadot's blockspace ecosystem
        </p>
        <h1 className="text-4xl font-bold leading-tight mt-2 font-unbounded ml-4">
          Build with confidence
        </h1>
        <p className="p-5 text-lg font-medium text-[#D1D5DB]">
          Polkadot’s blockspace ecosystem makes it the perfect fit to realize{" "}
          <br /> your project in a fast, stable, and cost-effective way.
        </p>

        <div className="ml-5">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-10 font-bold">
            <div className="flex items-center space-x-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 fill-[#E6007A]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.91655 20.5554C6.50459 20.6953 6.04963 20.5527 5.79129 20.2027L1.7959 14.7905C1.53615 14.4387 1.53524 13.9586 1.79366 13.6055C2.05208 13.2524 2.50984 13.1082 2.92368 13.2495L7.12137 14.6828L7.87089 14.4355L8.1241 14.3503C8.2896 14.2946 8.53005 14.2139 8.83015 14.1136C9.14646 14.0078 9.5291 13.8801 9.96014 13.7368L4.56781 5.68328L4.51434 5.60366C4.24823 5.20739 4.29934 4.67805 4.63637 4.33975C4.84277 4.13258 5.12114 4.03243 5.39711 4.04676C5.57184 4.0558 5.74562 4.11072 5.89955 4.21342L16.5241 11.3018C16.6046 11.3555 16.6748 11.4189 16.7342 11.4894C16.7414 11.4939 16.7486 11.4985 16.7558 11.503L21.8006 9.83804C22.6589 9.55477 23.4844 9.59063 24.1759 9.91992C24.8595 10.2454 25.3396 10.8249 25.5579 11.4878C25.7762 12.1506 25.7345 12.9024 25.3783 13.571C25.018 14.2474 24.3757 14.7677 23.5174 15.051L9.5948 19.6461L6.91655 20.5554ZM1.9021 24.7823C1.34981 24.7823 0.9021 25.23 0.9021 25.7823C0.9021 26.3346 1.34981 26.7823 1.9021 26.7823H25.5969C26.1492 26.7823 26.5969 26.3346 26.5969 25.7823C26.5969 25.23 26.1492 24.7823 25.5969 24.7823H1.9021Z"
                  stroke="none"
                ></path>
              </svg>
              <div>
                <span>Get ideas to market fast</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 fill-[#E6007A]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.74127 5.80664H2C1.44772 5.80664 1 6.25436 1 6.80664V9.54793H2.24127C3.62198 9.54793 4.74127 8.42864 4.74127 7.04793V5.80664ZM1 11.5479H2.24127C4.72655 11.5479 6.74127 9.53321 6.74127 7.04793V5.80664H21.2588V7.04788C21.2588 9.53316 23.2735 11.5479 25.7588 11.5479H27V17.7891H25.7588C23.2735 17.7891 21.2588 19.8038 21.2588 22.2891V23.5308H6.74133V22.2894C6.74133 19.8041 4.72661 17.7894 2.24133 17.7894H1V11.5479ZM1 19.7894V22.5308C1 23.0831 1.44772 23.5308 2 23.5308H4.74133V22.2894C4.74133 20.9087 3.62204 19.7894 2.24133 19.7894H1ZM23.2588 23.5308H26C26.5523 23.5308 27 23.0831 27 22.5308V19.7891H25.7588C24.3781 19.7891 23.2588 20.9083 23.2588 22.2891V23.5308ZM27 9.54788V6.80664C27 6.25436 26.5523 5.80664 26 5.80664H23.2588V7.04788C23.2588 8.42859 24.3781 9.54788 25.7588 9.54788H27ZM13.9999 12.772C12.9524 12.772 12.1033 13.6211 12.1033 14.6685C12.1033 15.716 12.9524 16.5651 13.9999 16.5651C15.0473 16.5651 15.8964 15.716 15.8964 14.6685C15.8964 13.6211 15.0473 12.772 13.9999 12.772ZM10.1033 14.6685C10.1033 12.5165 11.8479 10.772 13.9999 10.772C16.1519 10.772 17.8964 12.5165 17.8964 14.6685C17.8964 16.8205 16.1519 18.5651 13.9999 18.5651C11.8479 18.5651 10.1033 16.8205 10.1033 14.6685Z"
                  stroke="none"
                ></path>
              </svg>
              <div>
                <span>Save cost and effort</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 fill-[#E6007A]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 2C1 1.44772 1.44772 1 2 1H26C26.5523 1 27 1.44772 27 2V26C27 26.5523 26.5523 27 26 27H2C1.44772 27 1 26.5523 1 26V2ZM19.9316 11.7031C20.3199 11.3103 20.3163 10.6772 19.9236 10.2889C19.5308 9.90059 18.8977 9.90419 18.5094 10.2969L12.58 16.2941L9.68222 13.5876C9.27861 13.2106 8.64581 13.2322 8.26883 13.6358C7.89185 14.0394 7.91344 14.6722 8.31705 15.0492L11.9252 18.4192C12.3207 18.7886 12.9384 18.7764 13.3189 18.3915L19.9316 11.7031Z"
                  stroke="none"
                ></path>
              </svg>
              <div>
                <span>Improve product quality</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3  mt-4  gap-10 text-[#D1D5DB] ">
            <p>with innovative and high-performing apps.</p>
            <p>with the most flexible economics.</p>
            <p>with the most secure and compliant blockspace.</p>
          </div>
        </div>
      </div>

      <div className="py-28  px-64  grid grid-cols-2 gap-10 text-black h-[833px] bg-[#F3F5FB] justify-center ">
        <div className=" mr-10 w-[500px] ">
          <p className="text-[#E6007A] p-5">CORETIME</p>
          <h1 className="text-3xl font-extrabold leading-tight text-gray-950 mt-2 font-unbounded">
          Polkadot’s blockspace <br /> allocation mechanism
          </h1>
          <p className="mt-3 text-lg">
          If blockspace is the resource for any Web3 project, coretime <br/>
           is the unit in which it is measured. Learn more about how <br/>
            these two critical resources make up the Web3 cloud. 
          </p>
          <button className="mt-10 bg-black text-white px-6 py-5 font-semibold hover:bg-pink-500 rounded-full text-s">
            Learn more
          </button>
        </div>
        <div className="mr-10 w-[500px]">
          <img
          src="https://polkadot.network/static/82c0493044f94aed7685c4d1df0fc0d3/0a0cb/allocation.avif"
            alt=""
          />
        </div>
      </div>

      <div className="py-40  px-72  grid grid-cols-2 gap-28 text-black justify-center h-[508px]">
        <div className="mr-10 w-[500px]">
          <img
        src="https://polkadot.network/static/d0c7fc247ca7e8a9355a8e3dae9f7dbb/3290b/cloud-computing.avif"
    alt=""
          />
        </div>

        <div className=" mr-10 w-[500px] ">
          <p className="text-[#E6007A] p-5">A PRIMER</p>
          <h3 className="text-3xl font-[900] font-unbounded">The Web3 cloud and its components</h3>
          <p className="mt-3 text-lg">
          Learn about the concepts behind blockspace,
          <br/> blockspace ecosystems, and coretime.
          </p>
          <button className="mt-10 bg-black text-white px-6 py-5 font-semibold hover:bg-pink-500 rounded-full text-s">
            Learn more
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
