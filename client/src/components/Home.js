import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" 
          //style={{ width: '500px', height: '1000px' }}
          src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ width: '200px', height: '1000px' }}
          src="https://4.bp.blogspot.com/-OCAaH58JNak/XCRL4FAxCZI/AAAAAAABBN4/sJzjyhS7jeU6wV6dEsO375DEKGuhZVHMACLcBGAs/s1600/DC%2BComics%25E2%2580%2599%2BAquaman%2BTeaser%2BMovie%2BPosters%2B%2526%2BBanner%2B%25282%2529.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ width: '200px', height: '1000px' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCttFZWBEQygvVLR3KUFZ9F3S6MQVM3jQZjQ&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
  
}

export default Home;