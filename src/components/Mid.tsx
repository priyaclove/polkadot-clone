import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mid = () => {
  return (
    <>
      <section className="section relative bg-[#1c0533] w-full h-[1109px]">
        <div className="flex flex-col justify-center items-center text-[#e5e7eb] ">
          <h1 className="font-unbounded font-bold text-5xl mb-5 mt-28">
            Powering the Polkadot network
          </h1>

          <div className="  text-lg mb-2">
            The DOT token serves three distinct purposes:
          </div>

          <div className="  text-lg mb-4">
            governance over the network, staking and bonding.
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen   px-60 mt-[-200px]">
          <div className="flex space-x-10">
            <div className="w-[368px] h-[448px] flex flex-col items-center">
              <Image
                src="/images/governance.avif"
                width={500}
                height={500}
                alt="Blockspace ecosystem cubes"
                className="w-[208px] h-[208px]"
              />
              <h1 className="text-white text-base font-medium font-unbounded mt-4">
                Governance
              </h1>
              <p className="text-white font-normal mt-3 text-center">
                Polkadot token holders have complete control over the protocol.
                All privileges, which on other platforms are exclusive to
                miners, will be given to the Relay Chain participants (DOT
                holders), including managing exceptional events such as protocol
                upgrades and fixes.
              </p>
            </div>
            <div className="w-[368px] h-[448px] flex flex-col items-center">
              <Image
                src="/images/staking.avif"
                width={500}
                height={500}
                alt="Blockspace ecosystem cubes"
                className="w-[208px] h-[208px]"
              />
              <h1 className="text-white text-base font-medium font-unbounded mt-4">
                Staking
              </h1>
              <p className="text-white font-normal mt-3 text-center">
                Token holders keep the network secure and collect rewards by
                staking DOT. Polkadot’s advanced staking system is designed for
                maximum decentralization and fair representation, rewarding good
                actors and punishing bad actors to ensure network security.
              </p>
            </div>
            <div className="w-[368px] h-[448px] flex flex-col items-center">
              <Image
                src="/images/bonding.avif"
                width={500}
                height={500}
                alt="Blockspace ecosystem cubes"
                className="w-[208px] h-[208px]"
              />
              <h1 className="text-white text-base font-medium font-unbounded mt-4">
                Bonding
              </h1>
              <p className="text-white font-normal mt-3 text-center">
                New parachains are added by bonding tokens. Outdated or
                non-useful parachains are removed by removing bonded tokens.
                This is a form of proof of stake.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-[#e5e7eb]  mb-20 mt-[-210px]">
          <div className="font-unbounded font-bold text-4xl mb-2">
            Learn more about
          </div>

          <div className="font-unbounded font-bold text-4xl mb-4">
            DOT and staking
          </div>

          <div className="mt-5 flex space-x-5">
            <Link
              href="/Discover_DOT"
              className="bg-[#e5e7eb] text-[#1c0533]  font-semibold py-4 px-4 rounded-full hover:bg-pink-600"
            >
              Discover DOT
            </Link>
            <Link
              href="#"
              className="bg-[#1c0533]  text-[#e5e7eb] border border-[#e5e7eb] font-semibold py-4 px-4 rounded-full hover:bg-pink-600"
            >
              Learn staking
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-[#140523] w-full h-[500px] flex flex-col items-center justify-center">
        <div className="flex max-w-6xl mx-auto w-full px-8">
          {/* Left Column */}
          <div className="w-1/2">
            <h1 className="text-[#e5e7eb] font-unbounded font-bold text-4xl leading-tight">
              An open-source protocol built for everyone
            </h1>
          </div>

          {/* Right Column */}
          <div className="w-1/2 text-[#e5e7eb]">
            <p className="text-lg mb-4">
              Polkadot is an open-source project founded by the Web3 Foundation.
            </p>
            <p className="text-lg">
              Web3 Foundation has commissioned five teams and over 100
              developers to build Polkadot, including:
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-52 py-20 mt-8">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/s1.svg"
              alt="Image 1"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/s2.svg"
              alt="Image 2"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/s3.svg"
              alt="Image 3"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/s4.svg"
              alt="Image 4"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center w-full h-[460px] flex flex-col "
        style={{
          backgroundImage:
            "url('https://polkadot.network/static/learn-5fd29ff36775b82dd7dbaf1b9be05257.jpg')",
        }}
      >
        <h2 className="font-unbounded font-bold text-[#e5e7eb] text-5xl w-[896px] h-[190px] p-7 ml-72 mt-20 leading-tight">
          Founded by some of the blockchain industry’s foremost builders
        </h2>

        <Link
          href="#"
          className="bg-white text-black font-semibold mr-10 py-4 px-4 rounded-full hover:bg-pink-600 hover:text-white w-[127px] mt-14 ml-80 "
          style={{ textAlign: "center" }}
        >
          Learn more
        </Link>
      </section>

      <section className="flex justify-center  w-[1280px] h-[742px] mx-auto text-black mb-80">
        <div className="w-[1216px] text-center">
          <h1 className="font-extrabold text-5xl font-unbounded p-20">
            From the blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1216px] mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[389px]">
              <img
                src="https://cms.polkadot.network/content/images/2024/07/Featured-Image-1.png"
                alt="Card Image 1"
                className="w-full h-[194px] object-cover"
              />
              <div className="px-2">
              <h3 className="text-pink-700 font-semibold text-lg">
                  Polkadot
                </h3>
                <h2 className="text-xl font-bold mt-2">
                  The ultimate 2024 Polkadot grants and funding guide
                </h2>
                <p className="text-gray-900 mt-4 font-light leading-relaxed">
                  Explore Polkadot ecosystem funding: grants, venture capital,
                  bounties, and community initiatives. Discover opportunities
                  for blockchain builders today.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[389px]">
              <img
                src="https://cms.polkadot.network/content/images/2024/07/Polkadot-Decoded-2024-Header-Image-with-dots-1.png"
                alt="Card Image 2"
                className="w-full h-[194px] object-cover"
              />
              <div className="px-2">
              <h3 className="text-pink-700 font-semibold text-lg">Events</h3>
                <h2 className="text-xl font-bold mt-2">
                  Decoded 2024: Polkadot’s vision for a decentralized future
                </h2>
                <p className="text-gray-900 mt-4 font-light leading-relaxed">
                  Polkadot Decoded 2024 in Brussels brought together top
                  blockchain minds to explore the future of Web3. Highlights
                  included Björn Wagner’s insights on payments and Dr. Gav
                  Wood's keynote.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[389px]">
              <img
                src="https://cms.polkadot.network/content/images/2024/07/Parity-blog--cover-1.png"
                alt="Card Image 3"
                className="w-full h-[194px] object-cover"
              />
              <div className="px-2">
                <h3 className="text-pink-700 font-semibold text-lg">
                  Technology
                </h3>
                <h2 className="text-xl font-bold mt-2">
                Decoded 2024: Polkadot’s vision <br /> for a decentralized future                </h2>
                <p className="text-gray-900 mt-4 font-light leading-relaxed">
                  Stay updated with the latest Polkadot tech updates, metrics,
                  and insights from June 2024, presented by the Parity Success
                  Team.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-9 mt-20 ">
            <h1 className="font-extrabold text-4xl font-unbounded">
              Want to get involved?
            </h1>
            <Link
              href="#"
              className="bg-black text-white font-semibold py-4 px-6 rounded-full hover:bg-pink-600"
            >
              Join the community
            </Link>
            <p className="text-gray-700">
              or learn about how to build on Polkadot.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mid;
