const Header = () => (
  <nav className="bg-pink-300 border-black-200 px-40 lg:px-50000 py-2.5 dark:bg-gray-800 backdrop-blur-xl">
    <div className="flex flex-wrap justify-between items-center mb-1.5 max-w-9xl">
      <a href="letra" className="items-center"></a>
      <a href="#" className="auto items-">
        <img
          src="<https: br.freepik.com/vetores-gratis/modelo-de-logotipo-gradiente-nerd_21077469.html/>"
          className="mr-3 h-6 sm:h-6"
          alt=" Logo"
        />
      </a>
      <div
        className="inline justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-8 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              href="#"
              className=" first-line: backdrop-blur-xl justify-center items-center py-2 pr-4 pl-3 text-white rounded bg-red-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="content-center py-4 pr-4 pl-7 text-black border-b border-gray-100 hover:bg-black-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Our works
            </a>
          </li>
          <li>
            <a
              href="#"
              className="content-center py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="content-center py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Product
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
