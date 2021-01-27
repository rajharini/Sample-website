import React from 'react'
import {ReactComponent as Codes} from'./code.svg';
import {ReactComponent as Pixel} from'./pixel.svg';
import {ReactComponent as Paint} from'./paint-palette.svg';
import {ReactComponent as Apps} from'./cloud-computing.svg';
import {ReactComponent as Easy} from'./design-tool.svg';
import {ReactComponent as Retina} from'./vector.svg';
import {ReactComponent as User} from'./asteroid.svg';
import {ReactComponent as Update} from'./tools.svg';

import './App.css'; 
class App extends React.Component {  
  render() {  
    return (
    <div>
      <div id="features" class="text-center">
        <br/>
        <br/>
        <div class="container">
          <div class="text-center">
            <h2>Amazing Features.</h2>
            <p class="separator">We provide only the best for the user's comfort</p>
          </div>
          <br/>
          <div class="row">

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Paint/>
                <h4>Creative freedom</h4>
                <p>Any kind of poems, as long as it follows the guidelines are allowed</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Retina/>
                <h4>Retina Ready</h4>
                <p>Easy on the eye design, which makes the page comfortable</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Easy/>
                <h4>Easy to use</h4>
                <p>Easy and simple interface which makes usage easy</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <User/>
                <h4>Frequent Updates</h4>
                <p>Update from any author are frequently upgraded.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Update/>
                <h4>24/7 support</h4>
                <p>Any kind of trouble and our support is ready</p>
              </div>
            </div>

            

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Apps/>
                <h4>Available in app store</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Pixel/>
                <h4>Perfect Poetry</h4>
                <p>We are also in the app store and google play</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="feature-block">
                <Codes/>
                <h4>User Friendly</h4>
                <p>Our features are fine-tuned for the users</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    <div class="footer">
      <div class="container">
        <div class="row"></div>
          <div class="col-md-12 col-lg-4">
            <div class="footer-logo">
              <a class="navbar-brand" href="www.poetryforum.com">Poetry Forum</a>
              <br></br>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <br></br>
      <div class="copyrights">
        <div class="container">
          <p>&copy; Copyrights Poetryforum. All rights reserved.</p>
        </div>
      </div>
    </div>
    );
  }  
}  

export default App;
