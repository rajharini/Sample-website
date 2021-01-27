import React from 'react';
import {ReactComponent as Codes} from'./eagle.svg';
import {ReactComponent as Pixel} from'./joy.svg';
import {ReactComponent as Paint} from'./snowflake.svg';
import {ReactComponent as Apps} from'./skull.svg';
import './About.css'
class About extends React.Component {
  render() {
    return (
     <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
            <section id="team" class="padd-section text-center">

<div class="container">
  <div class="section-title text-center">
<br></br>
    <h2>Poetry</h2>
    <p class="separator">Some of the famous poems..</p>
  </div>
      <br></br>
  <div class="row">

    <div class="col-md-6 col-md-4 col-lg-3" >
      <div class="team-block bottom">
        <Codes/>
        <div class="team-content">
        <h4>The Eagle</h4>
          <p>
          He clasps the crag with crooked hands;<br></br>
          Close to the sun in lonely lands,<br></br>
          Ring’d with the azure world, he stands.<br></br>
          <br></br>
          The wrinkled sea beneath him crawls;<br></br>
          He watches from his mountain walls,<br></br>
          And like a thunderbolt he falls.<br></br>
    
          </p>
          <span>Alfred Lord Tennyson</span>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-md-4 col-lg-3">
      <div class="team-block bottom">
        <Pixel/>
        <div class="team-content">
        <h4>Joy</h4>
          <p>
          Joy and woe are woven fine,<br></br>
          A clothing for the soul divine;<br></br>
          Under every grief and pine,<br></br>
          Runs a joy with silken twine.<br></br>
          It is right it should be so;<br></br>
          Man was made for joy and woe;<br></br>
          And when this we rightly know,<br></br>
          Safely through the world we go<br></br>
          </p>
          <span>William Blake</span>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-md-4 col-lg-3">
      <div class="team-block bottom">
        <Paint/>
        <div class="team-content">
          <h4>Fire and Ice</h4>
          <p>
          Some say the world will end in fire,<br></br>
          Some say in ice.<br></br>
          From what I've tasted of desire<br></br>
          I hold with those who favor fire.<br></br>
          But if it had to perish twice,<br></br>
          I think I know enough of hate<br></br>
          To know that for destruction ice<br></br>
          Is also great<br></br>
          And would suffice.<br></br>
          </p>
          <span>Robert Frost</span>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-md-4 col-lg-3">
      <div class="team-block bottom">
        <Apps/>
        <div class="team-content">
        <h4>He wishes for the Clothes of Heaven</h4>
          <p>
          Had I the heaven’s embroidered cloths,<br></br>
          Enwrought with golden and silver light,<br></br>
          The blue and the dim and the dark cloths<br></br>
          The blue and the dim and the dark cloths<br></br>
          I would spread the cloths under your feet:<br></br>
          But I, being poor, have only my dreams;<br></br>
          I have spread my dreams under your feet;<br></br>
          Tread softly because you tread on my dreams.<br></br>
          </p>
          <span>William Butler Yeats</span>
        </div>
      </div>
    </div>

  </div>
</div>
</section> 
<br></br>
<br></br>
<section id="newsletter" class="newsletter text-center">
        <div class="container">
            <div class="col-md-3"></div>
            <div class="col-md-8">
              <form>
                <br></br>
                <input type="email" class="form-control " placeholder="Email Adress" name="email"/>
                <br></br>
                <button type="submit" class="btn btn-info btn lg"><i class="fa fa-location-arrow"></i>Subscribe</button>
                <br></br>
              </form>
          </div>
        </div>
    </section>
    <br></br>
    <br></br>
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
export default About;
