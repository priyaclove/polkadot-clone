"use client";
import "./Navbar.css";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
<nav className="flex items-center justify-between p-4 bg-white space-x-10 ">
<div className="relative ml-4 md:ml-16 lg:ml-72">
     <Link
            href="/"
            className="w-full pb-0 focus-visible:outline-offset-4 lg:pb-4"
          >
            <div className="flex items-center">
              <svg
                version="1.1"
                id="Content"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 6593.8 1410.3"
                xmlSpace="preserve"
                className="w-40 min-w-[10rem] object-contain"
              >
                <style type="text/css">{`.st0{fill:#E6007A;}`}</style>
                <path d="M2047.8,210.4c-77.2,0-151.6,9.7-181.9,17.9c-44.1,12.4-55.1,31.7-63.4,71.7l-175,807.5c-2.8,16.5-5.5,30.3-5.5,44.1 c0,40,26.2,66.1,68.9,66.1c46.9,0,66.2-30.3,75.8-77.2l49.6-230.1c34.4,4.1,79.9,8.3,144.7,8.3c285.3,0,463-154.3,463-387.2 C2424,327.5,2282,210.4,2047.8,210.4z M1954.1,786.4c-44.1,0-78.6-1.4-110.2-5.5l92.3-428.6c28.9-4.1,71.7-9.7,115.8-9.7 c151.6,0,228.8,71.7,228.8,190.2C2280.7,684.4,2170.4,786.4,1954.1,786.4L1954.1,786.4z"></path>
                <path d="M6537.3,951.7c-23.4,0-38.6,13.8-67.5,45.5c-51,52.4-82.7,81.3-122.6,81.3c-35.8,0-55.1-28.9-55.1-75.8 c0-26.2,5.5-57.9,12.4-92.3l51-239.8h153c48.2,0,77.2-27.6,77.2-77.2c0-27.6-17.9-48.2-59.2-48.2H6383l24.8-111.6 c2.8-16.5,5.5-31.7,5.5-45.5c0-38.6-26.2-66.2-68.9-66.2c-45.5,0-66.1,30.3-75.8,77.2l-31.7,146.1h-64.8 c-49.6,0-78.5,27.6-78.5,77.2c0,27.6,19.3,48.2,60.6,48.2h56.5l-51,237c-5.5,26.2-12.4,68.9-12.4,113 c0,111.6,57.9,192.9,181.9,192.9c71.7,0,135-35.8,183.3-78.6c46.9-41.3,81.3-92.3,81.3-125.4C6593.8,977.9,6569,951.7,6537.3,951.7z "></path>
                <path d="M3367.9,291.7c0-40-27.6-66.2-70.3-66.2c-45.5,0-66.1,30.3-75.8,77.2l-172.2,800.6c-4.1,16.5-6.9,30.3-6.9,44.1 c0,40,27.6,66.1,68.9,66.1c46.9,0,67.5-30.3,77.2-77.2L3361,335.8C3363.8,319.2,3367.9,305.5,3367.9,291.7z"></path>
                <path d="M5827.6,531.4c-220.5,0-370.7,219.1-370.7,427.2c0,3.9,0.1,7.8,0.2,11.6c-34.6,52.5-78.8,106.9-109.1,106.9 c-22,0-30.3-20.7-30.3-52.4c0-38.6,11-103.4,23.4-159.9l114.4-529.2c2.8-16.5,5.5-30.3,5.5-44.1c0-40-26.2-66.2-68.9-66.2 c-46.9,0-66.1,30.3-75.8,77.2l-62,286.6c-33.1-34.4-81.4-57.9-154.4-57.9c-146.4,0-293.7,112.7-351.1,285.6 c-63.2,163.4-119.7,260.1-164.3,260.1c-16.5,0-26.2-13.8-26.2-37.2c0-68.9,38.6-237,55.1-318.3c5.5-30.3,8.3-42.7,8.3-60.6 c0-60.6-100.6-132.3-231.5-132.3c-151.4,0-288.5,95.9-357.2,238.3c-102.1,180.4-195.8,310.1-242.2,310.1c-20.7,0-27.6-26.2-33.1-51 L3723.4,836l210.8-172.2c19.3-16.5,44.1-40,44.1-70.3c0-37.2-24.8-62-62-62c-27.6,0-51,16.5-74.4,35.8L3525,829.1l106.1-493.3 c2.8-16.5,6.9-30.3,6.9-44.1c0-40-27.6-66.2-70.3-66.2c-45.5,0-66.1,30.3-75.8,77.2l-172.2,800.6c-4.1,16.5-6.9,30.3-6.9,44.1 c0,40,27.6,66.1,68.9,66.1c46.9,0,67.5-30.3,77.2-77.2l22.1-103.3l129.5-104.7l31.7,159.8c12.4,63.4,45.5,125.4,130.9,125.4 c85,0,151.9-77.6,218.9-182.5c20.3,109.9,98.5,182.5,207,182.5c108.9,0,183.3-64.8,231.5-151.6v2.8c0,89.6,45.5,148.8,125.4,148.8 c72.3,0,132.3-43.6,185.9-136.2c30.4,80.7,98.4,136.2,193,136.2c111.6,0,191.5-67.5,242.5-161.2v8.3c0,99.2,49.6,153,130.9,153 c71.8,0,132.8-41.7,184.9-109.5c39.6,67.8,110.6,109.5,206.5,109.5c220.5,0,370.7-219.1,370.7-428.6 C6070.2,637.5,5980.6,531.4,5827.6,531.4z M4453.8,811.2c-40,172.2-125.4,270.1-221.9,270.1c-64.8,0-100.6-49.6-100.6-124 c0-146.1,106.1-303.2,248-303.2c42.7,0,75.8,12.4,104.7,30.3L4453.8,811.2z M5221.3,738.2c-44.1,202.6-144.7,343.1-254.9,343.1 c-60.6,0-96.5-46.9-96.5-124c0-147.4,102-300.4,238.4-300.4c52.4,0,92.3,17.9,121.3,41.3L5221.3,738.2z M5716,1081.3 c-79.9,0-113-57.9-113-130.9c0-133.7,92.3-286.6,208.1-286.6c79.9,0,113,57.9,113,130.9C5924.1,929.7,5831.8,1081.3,5716,1081.3z"></path>
                <path d="M2767.1,531.4c-220.5,0-370.7,219.1-370.7,427.2c0,148.8,89.6,254.9,242.5,254.9c220.5,0,370.7-219.1,370.7-428.6 C3009.6,637.5,2920,531.4,2767.1,531.4z M2655.5,1081.3c-79.9,0-113-57.9-113-130.9c0-133.7,92.3-286.6,208.1-286.6 c79.9,0,113,57.9,113,130.9C2863.5,929.7,2771.2,1081.3,2655.5,1081.3z"></path>
                <ellipse
                  className="st0"
                  cx="663"
                  cy="147.9"
                  rx="254.3"
                  ry="147.9"
                ></ellipse>
                <ellipse
                  className="st0"
                  cx="663"
                  cy="1262.3"
                  rx="254.3"
                  ry="147.9"
                ></ellipse>
                <ellipse
                  transform="matrix(0.5 -0.866 0.866 0.5 -279.1512 369.5916)"
                  className="st0"
                  cx="180.5"
                  cy="426.5"
                  rx="254.3"
                  ry="148"
                ></ellipse>
                <ellipse
                  transform="matrix(0.5 -0.866 0.866 0.5 -279.1552 1483.9517)"
                  className="st0"
                  cx="1145.6"
                  cy="983.7"
                  rx="254.3"
                  ry="147.9"
                ></ellipse>
                <ellipse
                  transform="matrix(0.866 -0.5 0.5 0.866 -467.6798 222.044)"
                  className="st0"
                  cx="180.5"
                  cy="983.7"
                  rx="148"
                  ry="254.3"
                ></ellipse>
                <ellipse
                  transform="matrix(0.866 -0.5 0.5 0.866 -59.8007 629.9254)"
                  className="st0"
                  cx="1145.6"
                  cy="426.6"
                  rx="147.9"
                  ry="254.3"
                ></ellipse>
              </svg>
            </div>
          </Link>
        </div>

        <div className="flex space-x-12">
          {/* Ecosystem Button */}
          <div className="relative group">
            <button
              className={`inline-flex items-center text-[14px] font-semibold ${
                openDropdown === "ecosystem" ? "text-[#e6007a]" : "text-black"
              } hover:text-[#e6007a] focus:outline-none gap-2`}
              onClick={() => handleDropdownToggle("ecosystem")}
            >
              Ecosystem
              <svg
                className={`ml-1 w-4 h-4 fill-current ${
                  openDropdown === "ecosystem"
                    ? "text-[#e6007a] rotate-180"
                    : "text-gray-400"
                } group-hover:text-[#e6007a]`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.29 7.71L10 12.41l4.71-4.7a1 1 0 011.42 1.42l-5.4 5.4a1 1 0 01-1.42 0l-5.4-5.4a1 1 0 011.42-1.42z" />
              </svg>
            </button>
            {openDropdown === "ecosystem" && (
              <ul className="absolute left-0 mt-4 w-[700px] mr-96 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-10 grid grid-cols-2 gap-6 p-4 m-5 overflow-hidden">
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Community</h1>
                  <p className="text-sm text-gray-400">
                    Join and contribute to the global Polkadot community.{" "}
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Daps</h1>
                  <p className="text-sm text-gray-400">
                    Browse and try out Polkadot dapps.{" "}
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">
                    Telemetry
                    <span className="external-link-icon ml-1 -mr-1 inline-block h-3.5 w-3.5 text-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 7l-10 10M17 7H7m10 0v10"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">
                    Real-time monitoring tool for tracking the performance of
                    the network.{" "}
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">WAllets</h1>
                  <p className="text-sm text-gray-400">
                    Set up a wallet and start interacting with the Polkadot
                    ecosystem.{" "}
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Brand Hub</h1>
                  <p className="text-sm text-gray-400">
                    Download logos and visual elements of the Polkadot brand for
                    public usage.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Treasury</h1>
                  <p className="text-sm text-gray-400">
                    Decentralized, community-driven funding for Polkadot
                    projects.
                  </p>
                </li>
              </ul>
            )}
          </div>

          {/* Feature Button */}
          <div className="relative group">
            <button
              className={`inline-flex items-center text-[14px] font-semibold ${
                openDropdown === "feature" ? "text-[#e6007a]" : "text-black"
              } hover:text-[#e6007a] focus:outline-none gap-2`}
              onClick={() => handleDropdownToggle("feature")}
            >
              Feature
              <svg
                className={`ml-1 w-4 h-4 fill-current ${
                  openDropdown === "feature"
                    ? "text-[#e6007a] rotate-180"
                    : "text-gray-400"
                } group-hover:text-[#e6007a]`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.29 7.71L10 12.41l4.71-4.7a1 1 0 011.42 1.42l-5.4 5.4a1 1 0 01-1.42 0l-5.4-5.4a1 1 0 011.42-1.42z" />
              </svg>
            </button>
            {openDropdown === "feature" && (
              <ul className="absolute left-0 mt-4 w-[700px] mr-96 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-10 grid grid-cols-2 gap-6 p-4 m-5 overflow-hidden">
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Technology</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">DOT token</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Technology</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Parachains</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">XCM</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Open Gove</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Blockspace</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Staking</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">System Parachains</h1>
                  <p className="text-sm text-gray-400">
                    Earn rewards for helping secure Polkadot's entire
                    multi-chain ecosystem.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">System parachains</h1>
                  <p className="text-sm text-gray-400 ">
                    Function-specific chains for building on Polkadot.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Auction</h1>
                  <p className="text-sm text-gray-400">
                    Additional information goes here.
                  </p>
                </li>
              </ul>
            )}
          </div>

          {/* Development Button */}
          <div className="relative group">
            <button
              className={`inline-flex items-center text-[14px] font-semibold ${
                openDropdown === "development" ? "text-[#e6007a]" : "text-black"
              } hover:text-[#e6007a] focus:outline-none gap-2`}
              onClick={() => handleDropdownToggle("development")}
            >
              Development
              <svg
                className={`ml-1 w-4 h-4 fill-current ${
                  openDropdown === "development"
                    ? "text-[#e6007a] rotate-180"
                    : "text-gray-400"
                } group-hover:text-[#e6007a]`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.29 7.71L10 12.41l4.71-4.7a1 1 0 011.42 1.42l-5.4 5.4a1 1 0 01-1.42 0l-5.4-5.4a1 1 0 011.42-1.42z" />
              </svg>
            </button>
            {openDropdown === "development" && (
              <ul className="absolute left-0 mt-4 w-[700px] mr-96 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-10 grid grid-cols-2 gap-6 p-4 m-5 overflow-hidden">
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold "> Documentaions</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>

                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">P K Bridge Bounty</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Build</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Alpha Programs</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">
                    Grants
                    <span className="external-link-icon ml-1 -mr-1 inline-block h-3.5 w-3.5 text-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 7l-10 10M17 7H7m10 0v10"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Blockchain Academy</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">
                    Substrates
                    <span className="external-link-icon ml-1 -mr-1 inline-block h-3.5 w-3.5 text-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 7l-10 10M17 7H7m10 0v10"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>

                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">
                    Bounties
                    <span className="external-link-icon ml-1 -mr-1 inline-block h-3.5 w-3.5 text-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 7l-10 10M17 7H7m10 0v10"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Technology</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
              </ul>
            )}
          </div>

          {/* Ecosystem Button (Duplicate, adjust if needed) */}
          <div className="relative group">
            <button
              className={`inline-flex items-center text-[14px] font-semibold ${
                openDropdown === "ecosystem2" ? "text-[#e6007a]" : "text-black"
              } hover:text-[#e6007a] focus:outline-none gap-2`}
              onClick={() => handleDropdownToggle("ecosystem2")}
            >
              Ecosystem
              <svg
                className={`ml-1 w-4 h-4 fill-current ${
                  openDropdown === "ecosystem2"
                    ? "text-[#e6007a] rotate-180"
                    : "text-gray-400"
                } group-hover:text-[#e6007a]`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.29 7.71L10 12.41l4.71-4.7a1 1 0 011.42 1.42l-5.4 5.4a1 1 0 01-1.42 0l-5.4-5.4a1 1 0 011.42-1.42z" />
              </svg>
            </button>
            {openDropdown === "ecosystem2" && (
              <ul className="absolute left-0 mt-4 w-[700px] mr-96 bg-white text-black border border-gray-300 rounded-lg shadow-lg z-10 grid grid-cols-2 gap-6 p-4 m-5 overflow-hidden">
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">About Polkadot</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">NewsRoom</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">whitepaper</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Contact</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">FAQ</h1>
                  <p className="text-sm text-gray-400">
                    Technical details on architecture, consensus, governance,
                    and more.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Blog</h1>
                  <p className="text-sm text-gray-400">
                    Earn rewards for helping secure Polkadot's entire
                    multi-chain ecosystem.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">Roadmap</h1>
                  <p className="text-sm text-gray-400 ">
                    Function-specific chains for building on Polkadot.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">
                    wi-ki
                    <span className="external-link-icon ml-1 -mr-1 inline-block h-3.5 w-3.5 text-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 7l-10 10M17 7H7m10 0v10"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">
                    Additional information goes here.
                  </p>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <h1 className="font-semibold ">
                    Support
                    <span className="external-link-icon ml-1 -mr-1 inline-block h-3.5 w-3.5 text-s">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 7l-10 10M17 7H7m10 0v10"
                        />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-sm text-gray-400">
                    Additional information goes here.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="relative">
  <Link
    href="#"
    className="bg-[#e6007a] font-semibold text-base text-white py-3 px-3 rounded-full hover:bg-[#1c0533] mr-[350px]"
    onClick={() => handleDropdownToggle('polkadot')}  >
    Use Polkadot
  </Link>

  {openDropdown === 'polkadot' && (
        <div className="absolute bg-[#1c0533] border text-white border-gray-300 mt-2 py-5 px-7 rounded-lg">
      <ul className="space-y-2">
        <li className="flex items-center py-2  hover:bg-purple-900 font-unbounded">
          <Link href="#" className="flex items-center space-x-2">
            <div className="p-1 bg-white rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 stroke-purple-900"
              >
                <g>
                  <path d="M26.7599 3.24988H1.23975V24.7496H26.7599V3.24988Z"></path>
                  <path d="M26.7742 8.98047H17.7689C14.9968 8.98047 12.7495 11.2277 12.7495 13.9999C12.7495 16.772 14.9968 19.0192 17.7689 19.0192H26.7742V8.98047Z"></path>
                  <circle cx="18" cy="14" r="1"></circle>
                </g>
              </svg>
            </div>
            <span className="text-white">Get wallet</span>
          </Link>
        </li>
        <li className="flex items-center py-2   hover:bg-purple-900 font-unbounded">
          <Link href="#" className="flex items-center space-x-2">
            <div className="p-1 bg-white rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 stroke-purple-900"
              >
                <path d="M22.5109 2.33008H6V26.3301H22.5109V2.33008Z"></path>
                <path d="M13.3052 23.0423H15.205"></path>
              </svg>
            </div>
            <span className="text-white">Explore dapps</span>
          </Link>
        </li>
        <li className="flex items-center py-2  hover:bg-purple-900 font-unbounded">
          <Link href="#" className="flex items-center space-x-2">
            <div className="p-1 bg-white rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 stroke-purple-900"
              >
                <path d="M24.735 15.924V18.5202C24.735 22.3374 20.0933 24.9999 14.3675 24.9999C8.64169 24.9999 4 22.3374 4 18.5202V15.924"></path>
                <path d="M14.3675 21.9761C20.0933 21.9761 24.735 18.8817 24.735 15.0644C24.735 11.2472 20.0933 8.15277 14.3675 8.15277C8.64169 8.15277 4 11.2472 4 15.0644C4 18.8817 8.64169 21.9761 14.3675 21.9761Z"></path>
                <path d="M14.3678 2.99997L14.3678 15.3903M11.3078 13.3305L14.3676 16.3902L17.4273 13.3305"></path>
              </svg>
            </div>
            <span className="text-white">Stake DOT</span>
          </Link>
        </li>
        <li className="flex items-center py-2  hover:bg-purple-900 font-unbounded">
          <Link href="#" className="flex items-center space-x-2">
            <div className="p-1 bg-white rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 stroke-purple-900"
              >
                <g>
                  <circle cx="14.0001" cy="13.8747" r="3.30708"></circle>
                  <circle cx="14.0001" cy="24.1101" r="1.88976"></circle>
                  <circle cx="14.0001" cy="3.88976" r="1.88976"></circle>
                  <circle
                    cx="24.1102"
                    cy="13.9999"
                    r="1.88976"
                    transform="rotate(-90 24.1102 13.9999)"
                  ></circle>
                  <circle
                    cx="3.88976"
                    cy="13.9999"
                    r="1.88976"
                    transform="rotate(-90 3.88976 13.9999)"
                  ></circle>
                  <circle
                    cx="21.149"
                    cy="21.1491"
                    r="1.88976"
                    transform="rotate(-45 21.149 21.1491)"
                  ></circle>
                  <circle
                    cx="6.85112"
                    cy="6.85082"
                    r="1.88976"
                    transform="rotate(-45 6.85112 6.85082)"
                  ></circle>
                  <circle
                    cx="21.149"
                    cy="6.85099"
                    r="1.88976"
                    transform="rotate(-135 21.149 6.85099)"
                  ></circle>
                  <circle
                    cx="6.85107"
                    cy="21.149"
                    r="1.88976"
                    transform="rotate(-135 6.85107 21.149)"
                  ></circle>
                </g>
              </svg>
            </div>
            <span className="text-white">Participate in governance</span>
          </Link>
        </li>
        <li className="flex items-center py-2  hover:bg-purple-900 font-unbounded">
          <Link href="#" className="flex items-center space-x-2 ">
            <div className="p-1 bg-white rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 stroke-purple-900"
              >
                <g>
                  <path d="M4 22.5743V12.0632L13.0655 16.4888V27L4 22.5743Z"></path>
                  <path d="M26.16 22.5743V12.0632L17.0945 16.4888V27L26.16 22.5743Z"></path>
                  <path
                    d="M13.0268 3.97772L15.08 3L17.1332 3.97772M13.0268 11.7994L15.08 12.7772L17.1332 11.7994M22.9017 9.05252L25.346 7.88858L22.9017 6.72463M7.25825 6.72463L4.81396 7.88858L7.25825 9.05252"
                    fill="none"
                    data-nofill="true"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="text-white">Start building</span>
          </Link>
        </li>
      </ul>
    </div>
  )}
</div>



       
      </nav>
    </>
  );
}
