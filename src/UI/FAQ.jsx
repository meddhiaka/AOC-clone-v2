import AboutPic from './../assets/AocAbout.jpg';
import LogoConcept from './../assets/LogoConcept.jpg';
import { useState } from 'react';

const Item = ({ title, children, isOpenByDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className='border-b'>
      <button
        type='button'
        aria-label='Open item'
        title='Open item'
        className='flex items-center justify-between w-full p-4 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg font-medium'>{title}</p>
        <svg
          viewBox='0 0 24 24'
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <polyline
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeMiterlimit='10'
            points='2,7 12,17 22,7'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {isOpen && (
        <div className='p-4 pt-0'>
          <p className='text-gray-700'>{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
      <div className='mb-16 max-w-xl mx-auto text-center'>
        <span className='inline-block mb-2 text-sm text-yellow-500 font-bold uppercase tracking-widest'>
          Our team story
        </span>
        <h2 className='font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight'>
          Top relevant questions
        </h2>
      </div>
      <div class='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div class='space-y-4'>
            <Item title='AOC Objectives' isOpenByDefault={true}>
              <ul class='mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400'>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Collaboration between IT students in order to learn and excel
                    in Computer Science field.
                  </span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Essential training and workshops to all students to establish
                    basic knowledge in programming and coding.
                  </span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Simulation of the real-world challenges by applying the
                    acquired skills.
                  </span>
                </li>
              </ul>
            </Item>
            <Item title='AOC Concept'>
              <ul class='mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400'>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Code is systematic, organized and scientific.</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Art is freedom, expressiveness and ambiguity.</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-yellow-500 dark:text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Two topics that may seem completely opposite but the
                    intersection between them can be very interesting. Solving
                    problems with code involves an immense amount of creativity.
                    When a developer architects the structure of a program and
                    infuses each step of the process with specific design choices,
                    they are being creative. Any software developer has
                    experienced code that is beautiful. When code is simple,
                    intuitive and logical, it evokes a sense of harmony.
                  </span>
                </li>
              </ul>
              <img
                class='h-auto max-w-xl rounded-lg shadow-md shadow-yellow-400 w-full'
                src={AboutPic}
              />
            </Item>
            <Item title='Logo Concept'>
              <img
                src={LogoConcept}
                alt=''
                className='h-auto max-w-xl rounded-lg shadow-md shadow-yellow-400 w-full'
              />
            </Item>
          </div>
      </div>
    </div>
  );
}
