import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hedaer(){

    return(
        <>
          <div className="flex justify-between items-center px-80 mt-20 ">
          <div className="max-w-2xl">
      <h1 className="font-unbounded font-bold text-black text-6xl leading-tight">
        The blockspace ecosystem for boundless innovation
      </h1>
      <p className="text-gray-700 mt-7 text-lg">
        Get your Web3 ideas to market fast
        <br /> with economics that work for you
      </p>
      <Link href="Learn_about_blockscope" passHref>
        <button className="mt-10 bg-black text-white px-6 py-5 font-semibold hover:bg-pink-500 rounded-full text-s" >
          Learn about blockspace
        </button>
      </Link>
    </div>
        
        <div className="flex-shrink-0">
          <Image
            src="/images/hero.avif"
            width={500}
            height={500}
            alt="Blockspace ecosystem cubes"
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-white  px-60 mt-[-150px]">
        <div className="flex space-x-10 ml-12">
          <div className="w-[390px] h-[400px] ">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="m-0 h-9 w-9 stroke-[#E6007A]"
              >
                <path d="M9.36649 24.4503C15.3574 26.7917 22.1118 23.8339 24.4529 17.8438C26.7939 11.8537 23.8351 5.09971 17.8442 2.75833C11.8533 0.416941 5.09886 3.3748 2.75781 9.36488C0.416752 15.355 3.37556 22.109 9.36649 24.4503Z"></path>
                <path d="M10.3107 13.9197L12.2736 10.8418M16.7663 13.5669L15.2206 10.8713M15.4945 16.4535L12.1033 16.4399"></path>
                <path d="M17.3645 18.9673C18.7605 19.5136 20.3365 18.8183 20.8845 17.4143C21.4325 16.0104 20.7451 14.4294 19.3491 13.8832C17.9531 13.3369 16.3771 14.0322 15.8291 15.4362C15.2811 16.8401 15.9685 18.4211 17.3645 18.9673Z"></path>
                <path d="M7.81566 19.0113C9.21166 19.5575 10.7876 18.8622 11.3356 17.4583C11.8837 16.0543 11.1962 14.4734 9.80024 13.9271C8.40424 13.3809 6.82829 14.0762 6.28026 15.4801C5.73223 16.8841 6.41965 18.465 7.81566 19.0113Z"></path>
                <path d="M12.7483 11.014C14.1443 11.5603 15.7203 10.865 16.2683 9.46104C16.8163 8.05709 16.1289 6.47614 14.7329 5.92989C13.3369 5.38364 11.761 6.07893 11.2129 7.48288C10.6649 8.88683 11.3523 10.4678 12.7483 11.014Z"></path>
              </svg>
            </span>

            <h1 className="text-black text-base font-medium font-unbounded">
              True interoperability
            </h1>
            <p className="text-gray-800 font-normal mt-3">
              Polkadot enables cross-blockchain transfers of any type of data or
              asset, not just tokens. Connecting to Polkadot gives you the
              ability to interoperate with a wide variety of blockchains in the
              Polkadot network.
            </p>
          </div>
          <div className="w-[390px] h-[400px] ">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="m-0 h-9 w-9 stroke-[#e6007a]"
              >
                <g>
                  <path
                    d="M20.8572 2.01674L25.9634 2L25.9802 7.09755"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M7.12347 2.01674L2.01726 2L2.00049 7.09755"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M2.01674 20.877L2 25.9832L7.09755 26"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M25.964 20.877L25.9807 25.9832L20.8832 26"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M25.4783 2.67474L18.0904 9.96275"
                    stroke-miterlimit="10"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M2.5026 2.67474L9.89059 9.96275"
                    stroke-miterlimit="10"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M2.67484 25.498L9.96285 18.11"
                    stroke-miterlimit="10"
                    fill="none"
                    data-nofill="true"
                  ></path>
                  <path
                    d="M25.3061 25.498L18.0181 18.11"
                    stroke-miterlimit="10"
                    fill="none"
                    data-nofill="true"
                  ></path>
                </g>
              </svg>
            </span>
            <h1 className="text-black text-base font-medium font-unbounded">
              Economic & transactional scalability
            </h1>
            <p className="text-gray-800 font-normal mt-3">
              Polkadot provides unprecedented economic scalability by enabling a
              common set of validators to secure multiple blockchains. Polkadot
              provides transactional scalability by spreading transactions
              across multiple parallel blockchains.
            </p>
          </div>
          <div className="w-[390px] h-[400px] ">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200">
              <svg
                width="28"
                height="28"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="m-0 h-9 w-9 stroke-[#E6007A]"
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
            </span>
            <h1 className="text-black text-base font-medium font-unbounded">
              Easy blockchain innovation
            </h1>
            <p className="text-gray-800 font-normal mt-3">
              Create a custom blockchain in minutes using the Substrate↗
              framework. Connect your chain to Polkadot and get interoperability
              and security from day one. This ease of development helps
              Polkadot’s network grow.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-white  px-60 mt-[-680px]">
        <div className="flex space-x-10 ml-12">
          <div className="w-[390px] h-[400px] ">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200">
              <svg
                width="28"
                height="28"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="m-0 h-9 w-9 stroke-[#E6007A]"
              >
                <path d="M2.02344 4.875L2.02344 25L15.9877 25L15.9877 4.875L12.2727 4.875L12.2913 2L5.73844 2L5.73844 4.875L2.02344 4.875Z"></path>
                <path d="M8.78498 9.28687L7.08417 14.6728H11.1473L9.25747 20.0588"></path>
              </svg>
            </span>
            <h1 className="text-black text-base font-medium font-unbounded">
              High energy efficiency
            </h1>
            <p className="text-gray-800 font-normal mt-3">
              Polkadot consumes a small fraction of the energy used by
              conventional blockchains thanks to its next-generation nominated
              proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US
              households worth of energy per year, Polkadot has the lowest
              carbon footprint↗ among proof-of-stake protocols analyzed in
              recent research↗.
            </p>
          </div>
          <div className="w-[390px] h-[400px] ">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="m-0 h-9 w-9 stroke-[#E6007A]"
              >
                <g>
                  <path d="M13.9349 25.9999C15.4059 25.9999 16.5981 24.8077 16.5981 23.3367C16.5981 21.8657 15.4059 20.6735 13.9349 20.6735C12.4639 20.6735 11.2716 21.8657 11.2716 23.3367C11.2716 24.8077 12.4639 25.9999 13.9349 25.9999V25.9999Z"></path>
                  <path d="M23.8451 8.52062C25.3161 8.52062 26.5083 7.32839 26.5083 5.85739C26.5083 4.38639 25.3161 3.19415 23.8451 3.19415C22.3741 3.19415 21.1818 4.38639 21.1818 5.85739C21.1818 7.32839 22.3741 8.52062 23.8451 8.52062Z"></path>
                  <path d="M4.66323 8.52068C6.13423 8.52068 7.32647 7.32845 7.32647 5.85745C7.32647 4.38645 6.13423 3.19421 4.66323 3.19421C3.19223 3.19421 2 4.38645 2 5.85745C2 7.32845 3.19223 8.52068 4.66323 8.52068Z"></path>
                  <path d="M23.8451 8.52063C22.3741 8.52063 21.1818 7.32839 21.1818 5.8574C21.1818 5.43394 21.2899 5.03942 21.4654 4.68445L14.1288 2L7.00237 4.61018C7.20204 4.98348 7.32647 5.40404 7.32647 5.8574C7.32647 7.32839 6.13424 8.52063 4.66324 8.52063C4.58028 8.52063 4.50215 8.50327 4.42113 8.49651V14.0313C4.42113 16.983 5.9201 19.7311 8.40103 21.3294L11.2871 23.1882C11.3652 21.7876 12.515 20.6735 13.9349 20.6735C15.4059 20.6735 16.5981 21.8657 16.5981 23.3367V23.3483L19.8661 21.2416C22.3461 19.6433 23.8451 16.8952 23.8451 13.9445V8.52063Z"></path>
                  <path d="M11.6575 11.9555V10.2395C11.6575 9.58362 11.9179 8.95374 12.3828 8.48978C12.8468 8.02581 13.4767 7.7644 14.1326 7.7644C14.7876 7.7673 15.4145 8.0287 15.8766 8.49267C16.3386 8.95664 16.5981 9.58459 16.5981 10.2395V11.9555"></path>
                  <path d="M18.0797 12.2469H10.1865V17.2251H18.0797V12.2469Z"></path>
                </g>
              </svg>
            </span>
            <h1 className="text-black text-base font-medium font-unbounded">
              Security for everyone
            </h1>
            <p className="text-gray-800 font-normal mt-3">
              Polkadot's novel data availability and validity scheme allows
              chains to interact with each other in a meaningful way. Chains
              remain independent in their governance, but united in their
              security.
            </p>
          </div>
          <div className="w-[390px] h-[400px] ">
            <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-200">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="m-0 h-9 w-9 stroke-[#E6007A]"
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
            </span>
            <h1 className="text-black text-base font-medium font-unbounded">
              User-driven governance
            </h1>
            <p className="text-gray-800 font-normal mt-3">
              Polkadot has a sophisticated governance system where all
              stakeholders have a voice. Network upgrades are coordinated
              on-chain and enacted autonomously and without forking the network,
              ensuring that Polkadot’s development remains future-proof and
              community-driven.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-black mb-20 mt-[-300px]">
        <div className="font-unbounded font-bold text-4xl mb-2">
          Learn more about
        </div>

        <div className="font-unbounded font-bold text-4xl mb-4">
          Polkadot’s technology
        </div>

        <div className="mt-5">
          <Link
            href="/page1"
            className="bg-black text-white font-semibold py-4 px-4 rounded-full hover:bg-pink-600"
          >
            Discover Polkadot
          </Link>
        </div>
      </div>
        
        </>
    )
}