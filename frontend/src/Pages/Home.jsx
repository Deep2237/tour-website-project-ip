import React from 'react'

import '../styles/home.css'
import { Container, Row, Col, CardSubtitle } from 'reactstrap'
import Subtitle from './../Shared/subtitle'
import Searchbar from '../Shared/Searchbar'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import Testimonials from '../components/Testimonals/Testimonals'
import NewsLetter from '../Shared/Newsletter'


const Home = () => {
   return <>
      <section>
         <Container>
            <Row>
               <Col lg='50'>
                     <div className="bci d-flex align-items-center">
                     <div className="content">                     
                     <h1>Welcome to Travel Guru</h1>
                     <Subtitle subtitle={'Explore the World: Your Ultimate Travel Guide'} />
                   </div>       
                  </div>
               </Col>
               <Searchbar/>
               {/* <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
               </Col> */}
            </Row>
         </Container>
      </section>

      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Explore'} />
                  <h2 className='featured__tour-title'>Our featured tours</h2>
               </Col>
               <FeaturedTourList />
            </Row>
         </Container>
      </section>

      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>12k+</span>
                        <h6>Successful trip</h6>
                     </div>
                     <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                     </div>
                     <div className="counter__box">
                        <span>15</span>
                        <h6>Year experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      <section>
         <Container>
            <Row>
               <Col lg='12'>
                  <Subtitle subtitle={'Fans Love'} />
                  <h2 className="testimonial__title">What our fans say about us</h2>
               </Col>
               <Col lg='12'>
                  <Testimonials />
               </Col>
            </Row>
         </Container>
      </section>
      <NewsLetter />
</>}
export default Home