import React, { Component } from 'react';
import { 
	MDBContainer, 
	MDBCard, 
	MDBCardBody, 
	Carousel, 
	CarouselInner,
	CarouselItem,
	View, Mask,
	CarouselCaption
} from 'mdbreact';
// Components
import cyt from '../../images/cyt.png';
import BarAppMobile from './BarAppMobile.js';

class Home extends Component {

  render() {
    	return (
    		<div>
    		<BarAppMobile/> 
    		<div style={{marginTop: 40}}>
    			<MDBContainer>
	    			<MDBCard>
		    			<MDBCardBody>
		    				<Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
						        <CarouselInner>
						          <CarouselItem itemId="1">
						            <View>
						              <img src={cyt} className="rounded mx-auto d-block" alt="aligment" />
						            </View>
						            <CarouselCaption>
						              <h3 className="h3-responsive"></h3>
						              <p></p>
						            </CarouselCaption>
						          </CarouselItem>
						          <CarouselItem itemId="2">
						            <View>
						              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
						              <Mask overlay="black-strong" />
						            </View>
						            <CarouselCaption>
						              <h3 className="h3-responsive">Strong mask</h3>
						              <p>Second text</p>
						            </CarouselCaption>
						          </CarouselItem>
						          <CarouselItem itemId="3">
						            <View>
						              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
						              <Mask overlay="black-slight" />
						            </View>
						            <CarouselCaption>
						              <h3 className="h3-responsive">Slight mask</h3>
						              <p>Third text</p>
						            </CarouselCaption>
						          </CarouselItem>
						          <CarouselItem itemId="4">
						            <View>
						              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
						              <Mask overlay="black-light" />
						            </View>
						            <CarouselCaption>
						              <h3 className="h3-responsive">Sopot Beach</h3>
						              <p>Taken june 21th by @mattonit</p>
						            </CarouselCaption>
						          </CarouselItem>
						        </CarouselInner>
						      </Carousel>
		    			</MDBCardBody>
		    		</MDBCard>
		    	</MDBContainer>
			</div>
			</div>
    	);
 	}
	
}
export default Home;