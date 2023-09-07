// testimonial data
import farouk from "../assets/farouk.png"
import mahmoud from "../assets/mahmoud.png"
import jhon from "../assets/t-avt-3.png"
const testimonialData = [
  {
    image: farouk,
    name: 'Farouk',
    position: 'Sales Manager',
    message:
      'Oussama is a rockstar software engineer. He is willing to work with you around the clock until he has captured your brief to perfection.',
  },
  {
    image: mahmoud,
    name: 'Mahmoud Abdelkader',
    position: 'Biomedical Engineer',
    message:
      'Working with Oussama was a fantastic experience. I found him a professional with great experience and profound knowledge of business solutions. He understands complex issues even when outside of his immediate area of expertise. ',
  },
  {
    image: jhon,
    name: 'Jhon Doe',
    position: 'HR manager',
    message:
      "Oussama was one of the best web designer i've personally worked with. Full of ideas, great sencce of taste and always managed to provide me with beautiful and functional design work.",
  },
];


import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {FaQuoteLeft} from 'react-icons/fa'
import {SwiperSlide, Swiper} from 'swiper/react';
import {Pagination,Navigation} from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={{Navigation,Pagination}}
      className="h-[400px]"
    >
    {testimonialData.map((person,index)=>{
      return(
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16 cursor-pointer'>
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center
            items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto rounded'>
                  <Image className='rounded' src={person.image} width={100} height={100} alt={person.name}/>
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extralight tracking-widest'>
                  {person.position}
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center
            before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
            xl:before:h-[200px] relative xl:pl-20'>
            <div className='mb-4'>
              <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
            </div>
            <div className='xl:text-lg text-center md:text-left'>
              {person.message}
            </div>
            </div>
          </div>
        </SwiperSlide>
      )
    })}

  </Swiper>
  )
};

export default TestimonialSlider;


