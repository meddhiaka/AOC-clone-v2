import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import * as contentful from 'contentful';

export default function Event() {
  const { id } = useParams();
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

  let specificEvent = data.find((e) => e.sys.id === id);
  console.log(specificEvent);
  return (
    <div>
      <p>{id}</p>
      <Navbar />
      <section>
        <div className='container px-4 mx-auto mt-5 mb-14'>
          <div className='max-w-3xl'>
            <a
              className='inline-block font-heading text-yellow-400 hover:text-yellow-400 mb-2'
              href='#'
            >
              {specificEvent.fields.type}
            </a>
            <h3 className='font-heading text-3xl sm:text-4xl mb-8'>
              {specificEvent.fields.postTitle}
            </h3>
          </div>
        </div>
        <img
          className='block w-full h-112 object-cover'
          src={specificEvent.fields.postCover.fields.file.url}
          alt=''
        />
        <div className='container px-4 mx-auto'>
          <div className='max-w-3xl mx-auto pt-12 pb-14'>
            <p className='text-lg leading-8 mb-6'>
              {specificEvent.fields.postContent}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
