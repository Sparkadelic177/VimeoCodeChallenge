import React, { Component } from 'react';
import Carousel from './components/Carousel';
import './css/App.css';
import './css/mediaQueries.css';


class App extends Component {

  render() {
    return (
      <div className="container">

        <div className="upperSection"> {/*background color and divder*/}
          <div className="imageToText textImagestyle"> {/*hold the image and the text and grid layout*/}
            <img className = "image" src={"https://i.vimeocdn.com/video/595198868_505x160.jpg"} alt="movie cover" />
            <div className="text">
              <h2 className="title"> MONSOON lll </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                nisl neque, tempus sit amet tellus nec, imperdiet eleifend velit.
                Quisque fermentum dapibus tristique. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Vestibulum faucibus nisi nec gravida
                sagittis.
              </p>
            </div>
          </div>
        </div> {/* the end of the upper section*/}

        <div className="lowerSection"> {/*background color and divder*/}
          <div className="textToImage textImagestyle"> {/*hold the image and the text and grid layout*/}
            <img className = "image"  src={"https://i.vimeocdn.com/video/589972810_530x315.jpg"} alt="movie cover"/ >
            <div className="text">
              <h2 className="title"> BEAMS </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                nisl neque, tempus sit amet tellus nec, imperdiet eleifend velit.
                Quisque fermentum dapibus tristique. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Vestibulum faucibus nisi nec gravida
                sagittis.
              </p>
            </div>
          </div>

          <div className="imageToText textImagestyle"> {/*hold the image and the text and grid layout*/}
            <img className = "image"  src={"https://i.vimeocdn.com/video/590587169_530x315.jpg"} alt="movie cover"/ >
            <div className="text">
              <h2 className="title"> Move 2 </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                nisl neque, tempus sit amet tellus nec, imperdiet eleifend velit.
                Quisque fermentum dapibus tristique. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Vestibulum faucibus nisi nec gravida
                sagittis.
              </p>
            </div>
          </div>
        </div> {/* the end of the lower section*/}

        <Carousel />

      </div>



    );
  }
}

export default App;
