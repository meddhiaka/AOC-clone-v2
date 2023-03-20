import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import * as contentful from 'contentful';

export default function Event() {
  const { id } = useParams();
  const [data, setData] = useState();

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
      console.log(res);
    }
    fetchContentModel();
  }, []);

  if (!data) {
    return <p>the fetch isn't done yet so you can't find anything in it</p>;
  }

  let specificEvent = data.find((e) => e.sys.id === id);

  if (!specificEvent) {
    return <p>The thing you're trying to find in data doesn't exist</p>;
  }

  const cData = specificEvent.fields.carousel,
    yesCarousel = specificEvent.fields.yesCarousel;
  cData.map((e) => console.log(e.fields.file.url));

  return (
    <div>
      <Navbar />
      <section className='py-16 md:py-24 bg-white'>
        <div className='container px-4 mx-auto'>
          <div className='md:max-w-2xl mx-auto mb-12 text-center'>
            <h2 className='mb-4 text-3xl md:text-5xl leading-tight text-gray-900 font-bold tracking-tighter'>
              {specificEvent.fields.postTitle}
            </h2>
            <div className='inline-block py-1 px-3 text-xs leading-5 text-yellow-500 font-medium uppercase bg-yellow-100 rounded-full shadow-sm'>
              {specificEvent.fields.type}
            </div>
          </div>
          <div className='flex md:flex-row flex-col justify-center'>
            <div className='md:basis-1/4 max-w-max overflow-hidden rounded-md text-center'>
              <div className='w-full h-full flex flex-row items-center'>
                <img
                  src={specificEvent.fields.postCover.fields.file.url}
                  alt=''
                />
              </div>
            </div>
            <p className='md:basis-1/2 text-base md:text-lg text-gray-500'>
              <div className='w-full h-full md:m-10 flex flex-row items-center md:text-xl'>
                <p className=''>{specificEvent.fields.postContent}</p>
              </div>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
