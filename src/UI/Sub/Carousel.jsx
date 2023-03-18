import a from './../../assets/AocAbout.jpg';
import b from './../../assets/Home.jpg';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
export default function Carousel() {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage
          className='d-block w-full h-[800px] ml-10 mr-10'
          src={a}
          alt='slide 1'
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className='d-block w-full h-[800px] ml-10 mr-10'
          src={b}
          alt='slide 2'
        />
      </CCarouselItem>
    </CCarousel>
  );
}
