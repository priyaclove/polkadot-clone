// components/Footer.js
import Link from 'next/link';
import { FaTwitter, FaRedditAlien, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-28  bg-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Ecosystem Column */}
        <div>
          <h2 className="text-pink-600 font-bold mb-4 text-sm">ECOSYSTEM</h2>
          <ul className="space-y-2">
            {['Community', 'Jobs', 'Wallets', 'Dapps', 'Brand Hub', 'Telemetry ↗', 'Treasury'].map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-black hover:text-pink-600 text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Features Column */}
        <div>
          <h2 className="text-pink-600 font-bold mb-4 text-sm">FEATURES</h2>
          <ul className="space-y-2">
            {['Technology', 'Blockspace', 'DOT token', 'Staking', 'Parachains', 'System parachains', 'XCM', 'Auctions', 'OpenGov'].map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-black hover:text-pink-600 text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Development Column */}
        <div>
          <h2 className="text-pink-600 font-bold mb-4 text-sm">DEVELOPMENT</h2>
          <ul className="space-y-2">
            {['Documentation', 'Grants ↗', 'Bounties ↗', 'Blockchain Academy', 'Build', 'Substrate ↗', 'Alpha Program', 'P <-> K Bridge Bounty'].map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-black hover:text-pink-600 text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Column */}
        <div>
          <h2 className="text-pink-600 font-bold mb-4 text-sm">ABOUT</h2>
          <ul className="space-y-2">
            {['About Polkadot', 'Blog', 'Newsroom', 'Roadmap', 'Whitepaper', 'Wiki ↗', 'FAQ', 'Support ↗', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link href="#" className="text-black hover:text-pink-600 text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h2 className="text-pink-600 font-bold mb-4 text-sm">NEWSLETTER</h2>
          <p className="text-black text-sm mb-4">Subscribe to hear about Polkadot updates and events.</p>
          <button className="bg-white text-black border border-black rounded-full px-6 py-2 hover:bg-pink-600 hover:text-white hover:border-pink-600 text-sm">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-16 pt-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 ">
            <span className="text-xs text-black">
            <svg
                version="1.1"
                id="Content"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 6593.8 1410.3"
                xmlSpace="preserve"
                className="w-40 -contain"
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
            </span>
            
          </div>
          <div className="flex space-x-4 text-sm text-black font-light">
          <Link href="#">© 2024 Web3 Foundation ↗</Link>
            <Link href="#">Legal Disclosures</Link>
            <Link href="#">Disclaimer</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Manage Cookies</Link>
          </div>
          <div className="flex space-x-8 text-black">
            <Link href="#"><FaTwitter size={20} /></Link>
            <Link href="#"><FaRedditAlien size={20} /></Link>
            <Link href="#"><FaGithub size={20} /></Link>
            <Link href="#"><FaYoutube size={20} /></Link>
            <Link href="#"><FaDiscord size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
