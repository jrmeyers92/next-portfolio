export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-2">
      <span className="text-5xl p-2 text-green logo font-extrabold ">J</span>
      <ul className="flex">
        <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green">
          <a href="#about">About</a>
        </li>
        <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green">
          <a href="#experience">Experience</a>
        </li>
        {/* <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green">
          <a href="#">Projects</a>
        </li> */}

        <li className="p-[10px] text-[13px] uppercase font-firaCode text-lightestSlate duration-200 ease-in-out hover:text-green">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
