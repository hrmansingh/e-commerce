import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import img from '../assets/raymond-petrik-J_xB2JMOjno-unsplash.jpg'
import img2 from '../assets/james-lee-YIy1cd3xN4w-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  
  return (
    <>
    <CCarousel controls indicators dark>
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
      <CImage className="d-block w-100" src={img2} alt="slide 3" />
      <CCarouselCaption className="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
</>
)
}
