import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import img from '../assets/henry-co-cp-VMJ-mdKs-unsplash.jpg'
import img2 from '../assets/engin-akyurt-lJ9A-UopMJE-unsplash.jpg'
import img3 from '../assets/ian-dooley-TT-ROxWj9nA-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';

export default function Home() {
  
  return (
    <>
    <CCarousel className='my-2' controls indicators dark>
    <CCarouselItem>
      <CImage className="d-block w-100" src={img} alt="slide 1" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src={img2} alt="slide 2" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <CImage className="d-block w-100" src={img3} alt="slide 3" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>

  <h1 className='title-arrivals'>NEW ARRIVALS</h1>
  <section className='Trending'>
  <ProductCard links={'/products'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Sweat shirt & Hoodies"}
      description={"explore Now"}
    >
    <NavLink to={'/products'}><i className="fa-solid fa-arrow-right"></i></NavLink>
    </ProductCard>
  <ProductCard links={'/products'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"OverSize T-shirts Collections"}
      description={"explore Now"}
    >
      <NavLink to={'/products'}><i className="fa-solid fa-arrow-right"></i></NavLink>
    </ProductCard>
  <ProductCard links={'/products'} image={"https://cdn-images.farfetch-contents.com/14/82/97/77/14829777_26844957_1000.jpg"}
      brand={"Jeans & Shoes"}
      description={"explore Now"}
    ><NavLink to={'/products'}><i className="fa-solid fa-arrow-right"></i></NavLink>
    </ProductCard>
  </section>

  <div className="payday-sale">
    <div className="payday-container">
    <div className="sale-now">
      <h1 className='payday'>PayDay</h1>
      <h1 className='sale'>SALE NOW</h1>
    </div>
    <div className="spend-container">
     <div className="offer">
      <p className='spend-mini'>spend minimal $100 get 30% voucher code for your next purchase</p>
     </div>
     <div className="offer-deadline">
      <h1 className='date-offer'>1 June - 10 June 2024</h1>
      <p className='term-offer'>*Terms & Condition apply</p>
      <div className="showNow-btn">
        <NavLink className='offer-btn' to={'/products'}>SHOP NOW</NavLink>
      </div>
    </div>
    </div>
  </div>
  </div>
</>
)
}
