import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 px-16 py-8">
      <a href="/">
        <h2 className="text-cyan-600 font-black text-3xl">SECUREM4</h2>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 ml-16 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 ml-16 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 ml-16 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b text-cyan-600 border-indigo-900 font-bold my-8 uppercase">
                <a onClick={() => setIsNavOpen((prev) => !prev)} href="/home">Home</a>
              </li>
              <li className="border-b text-cyan-600 border-indigo-900 font-bold my-8 uppercase">
                <a  onClick={() => setIsNavOpen((prev) => !prev)} href="#about">About</a>
              </li>
              <li className="border-b text-cyan-600 border-indigo-900 font-bold my-8 uppercase">
                <a  onClick={() => setIsNavOpen((prev) => !prev)} href="#features">Features</a>
              </li>
              <li className="border-b text-cyan-600 border-indigo-900 font-bold my-8 uppercase">
                <a onClick={() => setIsNavOpen((prev) => !prev)} href="#contact">Contact</a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 24 24"
                    fill="#0196e3"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook rounded-full m-4 p-2 bg-white shadow-xl"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 24 24"
                    fill="#0196e3"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter rounded-full p-2 m-4 bg-white shadow-xl"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="37"
                    viewBox="0 0 24 24"
                    fill="#0196e3"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram rounded-full m-4 p-2 bg-white shadow-xl"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        <li className="font-bold">
            <a href="#home">Home</a>
          </li>
          <li className="font-bold">
            <a href="#about">About</a>
          </li>
          <li className="font-bold">
            <a href="#features">Features</a>
          </li>
          <li className="font-bold">
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}