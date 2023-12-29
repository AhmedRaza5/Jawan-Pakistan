import React from 'react'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <h1>What people are saying...</h1>
        <div className='parentBox'>
            <div className='box'>
                <img src="/src/assets/img/testimonials-1.jpg" alt="Testimonial-Image" />
                <h4>Margaret E.</h4>
                <p>"This is fantastic! Thanks so much guys!"</p>
            </div>
            <div className='box'>
                <img src="/src/assets/img/testimonials-2.jpg" alt="Testimonial-Image" />
                <h4>Fred S.</h4>
                <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
            </div>
            <div className='box'>
                <img src="/src/assets/img/testimonials-3.jpg" alt="Testimonial-Image" />
                <h4>Sarah W.</h4>
                <p>"Thanks so much for making these free resources available to us!"</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial