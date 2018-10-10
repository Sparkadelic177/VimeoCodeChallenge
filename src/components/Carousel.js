import React ,{Component} from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import '../css/carousel.css';

// the data thats going to be rendered on the slide
const data = [
  {
    image:require("../images/huntforthewilderpeople.jpeg"),
    title: "Hunt for the Wilderpeople" ,
    description: "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows." ,
  },
  {
    image:require("../images/a_decent-man.jpeg"),
    title: "Nichts passiert / A Decent Man" ,
    description: "A Swiss family takes ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moreal quandaries" ,
  },
  {
    image:require("../images/vice_versa.jpeg"),
    title: "Vice Versa" ,
    description: "Come along with the Good Company crew as they travel through the US, Japan, BC and Quebec to showcase skiing in the best way possible" ,
  },
  {
    image:require("../images/the_fourth_phase.jpeg"),
    title: "The Fourth Phase" ,
    description: "From the creators of Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring athlete Travis Rice" ,
  }
]

class Carousel extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0,
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  //for the left arrow
  previousSlide () {
    const { currentIndex } = this.state;

    //if the slide is at the start it doesnt slide futher back
    if(currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

   //this doesn't fire if the above logic is true
   this.setState(prevState => ({
     currentIndex: prevState.currentIndex - 1,
     translateValue: prevState.translateValue - -(this.slideWidth())
   }));
 }

 //for the right arrow
 nextSlide () {
   const { currentIndex } = this.state;

   //if the current index is at the end of the arrow, start over
   if(currentIndex === data.length- 1) {
     return this.setState({
       currentIndex: 0,
       translateValue: 0
     });
   }

   //this doesn't fire if the above logic is true
   this.setState(prevState => ({
     currentIndex: prevState.currentIndex + 1,
     translateValue: prevState.translateValue + -(this.slideWidth())
   }));
 }

//getting the current width of the screen
 slideWidth = () => {
   return document.querySelector('.carousel-container').offsetWidth
}


  render(){
    return (
      <div className="carousel-container">

        {
          //mapping all of the data values to the ImageSlide component
          data.map((data, index) => {

            return(
              <div style={{
                    transform: `translateX(${this.state.translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                   }}
                   key={index}
                   className="slider"
               >
                <ImageSlide key={index} data={data} currentIndex={index} />
              </div>
            )
          })
         }

          <div className='left-arrow arrow-style'>
            <Arrow clickFunction={this.previousSlide} direction="fas fa-angle-left" />
          </div>

          <div className="right-arrow arrow-style">
            <Arrow clickFunction={this.nextSlide} direction="fas fa-angle-right"  />
          </div>

      </div>
    )
  }
}


export default Carousel;
