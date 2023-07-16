import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import './testimonial.css'

const Testimonials = () => {

   return (
      <section className="testimonial-section">
         <Carousel infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2500}>
            <div className="testimonial-slide">
               <div className='tf'>
            <img src={ava01} alt="Testimonial 1" className="testimonial-image" />
               <h3 className="testimonial-name">Nax Patel</h3>
               </div>
               <div className="testimonial-content">
                  <p className="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit impedit voluptatibus obcaecati. Sed sunt est quos unde illum accusamus maiores fugiat minima officia nisi placeat, optio porro expedita cupiditate neque incidunt deserunt praesentium magni quod atque in a delectus nostrum vero. Nisi, veritatis dignissimos iste quo eligendi sit atque aut?</p>
               </div>
               </div>


               <div className="testimonial-slide">
               <div className='tf'>
            <img src={ava02} alt="Testimonial 2" className="testimonial-image" />
               <h3 className="testimonial-name">Khushi Patel</h3>
               </div>
               <div className="testimonial-content">
                  <p className="testimonial-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque sit enim possimus, explicabo voluptas eos, ullam mollitia nemo dolore voluptate unde laborum rerum ab sed accusamus voluptates aut. Exercitationem iure dolorum ex libero voluptate eius ut deleniti sit atque maiores consectetur quibusdam tempora molestiae maxime dicta, nobis magni nemo.</p>
               </div>
               </div>

         </Carousel>
      </section>
   )
};

export default Testimonials