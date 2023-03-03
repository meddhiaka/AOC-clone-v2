import Logo from './../assets/aocLogo.png';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    className='block h-8 w-auto lg:hidden'
                    src={Logo}
                    alt='Your Company'
                  />
                  <img
                    className='hidden h-8 w-auto lg:block'
                    src={Logo}
                    alt='Your Company'
                  />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    <Link
                      to='/'
                      class='text-yellow-300 rounded-md px-3 py-2 text-sm font-medium'
                      aria-current='page'
                    >
                      Home
                    </Link>

                    <a
                      href='#'
                      class='text-gray-300 hover:text-yellow-300 rounded-md px-3 py-2 text-sm font-medium'
                    >
                      About
                    </a>

                    <Link
                      to='/team'
                      class='text-gray-300 hover:text-yellow-300 rounded-md px-3 py-2 text-sm font-medium'
                    >
                      Team
                    </Link>

                    <a
                      href='#'
                      class='text-gray-300 hover:text-yellow-300 rounded-md px-3 py-2 text-sm font-medium'
                    >
                      Events
                    </a>
                    <Link
                      to='/contact'
                      class='text-gray-300 hover:text-yellow-300 rounded-md px-3 py-2 text-sm font-medium'
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <Link
                to='/'
                class='bg-yellow-500 text-white block rounded-md px-3 py-2 text-base font-medium'
                aria-current='page'
              >
                Home
              </Link>

              <a
                href='#'
                class='text-gray-300 hover:bg-yellow-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
              >
                About
              </a>

              <Link
                to='/team'
                class='text-gray-300 hover:bg-yellow-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
              >
                Team
              </Link>

              <a
                href='#'
                class='text-gray-300 hover:bg-yellow-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
              >
                Events
              </a>

              <Link
                to='/contact'
                class='text-gray-300 hover:bg-yellow-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
