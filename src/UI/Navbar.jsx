import Logo from './../assets/aocLogo.png';

export default function Navbar() {
  return (
    <nav class='p-3 border-gray-200 bg-gray-500 dark:bg-gray-800 dark:border-gray-700'>
      <div class='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='#' class='flex items-center'>
          <img src={Logo} class='h-6 mr-3 sm:h-14' alt='AOC Logo' />
        </a>
        <button
          data-collapse-toggle='navbar-solid-bg'
          type='button'
          class='inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-solid-bg'
          aria-expanded='false'
        >
          <span class='sr-only'>Open main menu</span>
          <svg
            class='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
        <div class='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
          <ul class='flex flex-col mt-4 rounded-lg bg-gray-400  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent'>
            <li>
              <a
                href='#'
                class='block text-base py-2 pl-3 pr-4 text-gray-100 bg-yellow-500 rounded md:bg-transparent md:text-yellow-300 md:p-0'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block text-base py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-yellow-500 md:hover:bg-gray-500 md:border-0 md:hover:text-yellow-400 md:p-0 '
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block text-base py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 '
              >
                Team
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block text-base py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 '
              >
                Events
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block text-base py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-yellow-500 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 '
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
