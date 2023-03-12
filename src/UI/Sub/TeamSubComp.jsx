import { useState, useEffect } from 'react';
import * as contentful from 'contentful';

export default function TeamSubComp() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchContentModel() {
      const client = contentful.createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE,
        accessToken: import.meta.env.VITE_CONTENTFUL_PRIVATE_API_KEY,
      });

      const contentModel = await client.getEntries({ content_type: 'team' });
      const contentData = contentModel.items;
      const res = contentData.reverse();
      setData(res);
    }

    fetchContentModel();
  }, []);

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='mb-16 max-w-xl mx-auto text-center'>
        <span className='inline-block mb-2 text-sm text-yellow-500 font-bold uppercase tracking-widest'>
          Our team
        </span>
        <h2 className='font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight'>
          AOC Real Members
        </h2>
      </div>
      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {data.map((e, k) => (
          <div key={k}>
            <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={e.fields.pic.fields.file.url}
                alt='Person'
              />
              <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                <p className='mb-1 text-lg font-bold text-gray-100'>
                  {e.fields.name}
                </p>
                <p className='mb-4 text-xs text-gray-100'>{e.fields.post}</p>
                <p className='mb-4 text-xs tracking-wide text-gray-400'>
                  {e.fields.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
