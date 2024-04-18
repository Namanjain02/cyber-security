const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col gap-8 py-4 p-20    ">
      <ul className="flex-col md:flex-row list-none flex items-center justify-end gap-4">
        <a className=" text-[#492e89]" href="#navbar" target="_parent" rel="noopener noreferrer">
          <li>Home</li>
        </a>
        <a className=" text-[#492e89]" href="#about" target="_parent" rel="noopener noreferrer">
          <li>About</li>
        </a>
        <a className=" text-[#492e89]" href="#terms" target="_parent" rel="noopener noreferrer">
          <li>Terms</li>
        </a>
        <a className=" text-[#492e89]" href="#career" target="_parent" rel="noopener noreferrer">
          <li>Career</li>
        </a>
        <a className=" text-[#492e89]" href="#contact" target="_parent" rel="noopener noreferrer">
          <li>Contact</li>
        </a>
      </ul>
      <div className="flex justify-between items-center p-4 gap-20 flex-wrap md:gap-40 w-[100%] border-t border-indigo-900">
        <div className="copyright">
          <p> &copy; Copyright 2023 AnkTech. All Rights Reserved</p>
        </div>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#492e89"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#492e89"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#492e89"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /*
footer {
  background: #f2f3f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10vh 20vw;
  gap: 2rem;
}

footer > ul {
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

footer > ul > a{
  text-decoration: none;
  color: #492e89;
}

footer > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  border-top: 1px solid #492e89;
  width: 100%;
  padding: 1rem;
}

*/
}
