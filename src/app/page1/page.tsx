import React from "react";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/footer";

export default function page1() {
  return (
    <>
<NavBar/>

      <div className="bg-gray-100 px-60 py-9 text-black ">
        <section>
          <img src="/images/page1.webp" alt="" />

          <div className="">
            <div className="py-10">
              <h1 className=" font-unbounded text-5xl">
                Unleash the <br /> power of Polkadot
              </h1>
              <p className=" py-5 text-base">
                Innovate without constraints using Polkadot’s powerful, secure,
                and flexible multi-chain platform
              </p>
              <button className="bg-black  text-white font-unbounded font-semibold py-3 px-6 rounded-lg hover:bg-[#E6007A]">
                START BUILDING &rarr;
              </button>

              <div className=" py-16 ">
                <h2 className="text-3xl font-bold mb-6">
                  Push the boundaries of what's possible
                </h2>
                <p className=" mb-12 text-base">
                  Explore the three core components that make Polkadot the
                  powerful, secure core of Web3: the versatile Polkadot SDK, the
                  interoperable <br /> Polkadot Chain, and the unstoppable
                  Polkadot DAO.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                  <div className="bg-white rounded-lg shadow-md ">
                    <img
                      src="./images/card1.webp"
                      alt="Polkadot SDK"
                      className="rounded-t-lg mb-4"
                    />
                    <div className="px-6">
                      <h3 className="text-xl font-semibold mb-2 hover:text-[#E6007A]">
                        Polkadot SDK
                      </h3>
                      <p>A modular toolkit for building custom blockchains</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md ">
                    <img
                      src="./images/card2.webp"
                      alt="Polkadot Chain"
                      className="rounded-t-lg mb-4"
                    />
                    <div className="px-6">
                      <h3 className="text-xl font-semibold mb-2 hover:text-[#E6007A]">
                        Polkadot Chain
                      </h3>
                      <p>
                        A rapidly growing network of applications backed by
                        shared security
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md ">
                    <img
                      src="./images/card3.webp"
                      alt="Polkadot DAO"
                      className="rounded-t-lg mb-4"
                    />
                    <div className="px-6">
                      <h3 className="text-xl font-semibold mb-2 hover:text-[#E6007A]">
                        Polkadot DAO
                      </h3>
                      <p>The world’s largest community-driven ecosystem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </section>
      </div>
<div className="bg-white">
<Footer/>
</div>
     
    </>
  );
}
