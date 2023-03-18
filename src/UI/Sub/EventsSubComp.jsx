import { useState, useEffect } from 'react';
import * as contentful from 'contentful';

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
      setData(res);
    }

    fetchContentModel();
  }, []);

  return (
    <section className='pt-20 lg:pt-[120px] pb-10 lg:pb-20'>
      <div className='container'>
        <div className='flex items-stretch flex-wrap justify-center -mx-4'>
          <div className='w-full px-4'>
            <div className='text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]'>
              <span className='font-semibold text-lg text-yellow-500 mb-2 block'>
                AOC Events
              </span>
              <h2
                className='
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  '
              >
                Our Recent Events
              </h2>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          {data.map((e, k) => (
            <div key={k} className='w-full md:w-1/2 lg:w-1/3 px-4'>
              <div className='max-w-[370px] mx-auto mb-10'>
                <div className='rounded overflow-hidden mb-8'>
                  <img
                    src={e.fields.postCover.fields.file.url}
                    alt='image'
                    className='w-full object-cover md:h-[203px]'
                  />
                </div>
                <div>
                  <span
                    className='
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     '
                  >
                    {e.fields.type}
                  </span>
                  <h3>
                    <a
                      href='#'
                      className='
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        '
                    >
                      {e.fields.postTitle}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
