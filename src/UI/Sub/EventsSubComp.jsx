import { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import { Link } from 'react-router-dom';

export default function EventsSubComp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchContentModel() {
      const client = contentful.createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE,
        accessToken: import.meta.env.VITE_CONTENTFUL_PRIVATE_API_KEY,
      });

      const contentModel = await client.getEntries({ content_type: 'posts' });
      const contentData = contentModel.items;
      const res = contentData.reverse();
      console.log(res);
      setData(res);
    }

    fetchContentModel();
  }, []);

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='mb-16 max-w-xl mx-auto text-center'>
          <span className='inline-block mb-2 text-sm text-yellow-500 font-bold uppercase tracking-widest'>
            AOC Events
          </span>
          <h2 className='font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight'>
            Our latest events
          </h2>
        </div>
        <div className='flex flex-wrap -m-4'>
          {data.map((e, k) => (
            <div className='p-4 md:w-1/3' key={k}>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={e.fields.postCover.fields.file.url}
                  alt='blog'
                />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    {e.fields.type}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    {e.fields.postTitle}
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    {e.fields.postContent.slice(0, 130) + ' ...'}
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <Link
                      to={'/events/' + e.sys.id}
                      className='text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0'
                    >
                      Learn More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
