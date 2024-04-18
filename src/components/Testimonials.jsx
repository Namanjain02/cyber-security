import Swiper from 'swiper';
import 'swiper/css';
import sergio from "../assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg";
import hugo from "../assets/hugo-barbosa-AZ1dAHLnYFc-unsplash.jpg";
import christopher from '../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

const Testimonials = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-4 py-4">

    <h2 className='font-bold text-3xl text-indigo-900'>What Our Users Say</h2>
    <div className="swiper h-[500px] w-[90%]">
      <div className="swiper-wrapper">
        <div className="swiper-slide flex justify-center items-center flex-col text-center p-8">
          <figure className='h-[100px] w-[100px]' ><img className='rounded-full h-full w-full' src={sergio} alt=""/></figure>
          <p className='m-8 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam animi magnam voluptates autem numquam,
            similique harum obcaecati maiores aliquid eveniet repellat nihil architecto quisquam tempora delectus aut
            mollitia quia reprehenderit doloremque rem adipisci.</p>
          <h5 className='mt-1 text-indigo-900 font-bold'>Alexa Brown</h5>
        </div>
        <div className="swiper-slide flex justify-center items-center flex-col text-center p-8">
        <figure className='h-[100px] w-[100px]' ><img className='rounded-full h-full w-full'src={hugo} alt=""/></figure>
          <p className='m-8 text-sm md:text-base'>Adipisicing elit. Ipsam animi magnam voluptates autem numquam,
            similique repellat nihil architecto quisquam tempora delectus aut. Lorem ipsum dolor sit amet, consectetur
            mollitia quia harum obcaecati maiores aliquid eveniet reprehenderit doloremque rem adipisci.</p>
            <h5 className='mt-1 text-indigo-900 font-bold'>Mr Laptop</h5>
        </div>
        <div className="swiper-slide flex justify-center items-center flex-col text-center p-8">
        <figure className='h-[100px] w-[100px]' ><img className='rounded-full h-full w-full'src={christopher} alt=""/></figure>
          <p className='m-8 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam animi magnam voluptates autem numquam,
            similique harum obcaecati maiores aliquid eveniet repellat nihil architecto quisquam tempora delectus aut
            mollitia quia reprehenderit doloremque rem adipisci.</p>
            <h5 className='mt-1 text-indigo-900 font-bold'>Sana Khan</h5>
        </div>


      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  </section>
  )
}

export default Testimonials