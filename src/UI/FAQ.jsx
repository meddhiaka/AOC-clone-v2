import Home from './../assets/Home.jpg';
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <section className='relative pb-20 lg:pb-20 lg:pt-20 2xl:py-40 bg-gray-800 overflow-hidden'>
      <div className='relative w-full lg:w-1/2 lg:ml-auto mb-20 lg:mb-0'>
        <img
          className='hidden lg:block lg:absolute right-0 top-0 w-full h-128 object-cover'
          src={Home}
          alt=''
        />
        <img className='lg:hidden w-full h-96 object-cover' src={Home} alt='' />
      </div>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='max-w-lg'>
              <h2 className='mb-12 lg:mb-20 text-5xl lg:text-7xl lg:text-center font-bold font-heading text-yellow-400'>
                Who <br />
                Are
                <br /> We?
              </h2>
              <div className='flex items-center mb-8 pb-14 border-b border-gray-500'>
                <div className='max-w-sm'>
                  <p className='text-lg text-gray-200'>
                    <strong>Art of Code Club</strong> is a collaboration between
                    IT Students of the Faculty of Science of Bizerte in order to
                    learn and excel in Computer Science field.
                  </p>
                </div>
              </div>
              <a
                className='flex items-center justify-end font-bold text-gray-200'
                href='#'
              >
                <Link to='/about'>
                  <span>Discover our team story</span>
                </Link>
                <span className='ml-5'>
                  <svg
                    width='19'
                    height='20'
                    viewbox='0 0 19 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.7387 1.47293L18.7387 10.93L17.5565 10.93L17.5565 2.89739L0.835337 19.6245L0.00193592 18.7911L16.7231 2.064L9.28164 2.064L9.28164 0.881867L18.1476 0.881866C18.4741 0.881866 18.7387 1.14648 18.7387 1.47293Z'
                      fill='white'
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
