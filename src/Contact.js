import React from 'react'  
import './Contact.css'
class Contact extends React.Component {  
  render() {  
    return(
      <section id="contact">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
      <div class="container" data-aos="fade-up">
        <div class="text-center">
          <h2>Contact</h2>
          <p>When in doubt ping us your questions!</p>
        </div>

        <div class="row justify-content-center">

          <div class="col-lg-3 col-md-4">

            <div class="info">
              <div>
                <i class="fa fa-map-marker"></i>
                <p>128/1, G.A Avenue<br></br>New Delhi,765655 </p>
              </div>

              <div class="email">
                <i class="fa fa-envelope"></i>
                <p>info@poetryforum.com</p>
              </div>

              <div>
                <i class="fa fa-phone"></i>
                <p>+91 558955488</p>
              </div>
            </div>

            <div class="social-links">
              <a href="www.poetryforum.com" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="www.poetryforum.com" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="www.poetryforum.com" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="www.poetryforum.com" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-5 col-md-8">
            <div class="form">
              <form>
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                </div>
                <div class="text-center"><button class="btn btn-info" type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
          <p>&copy; Copyrights PoetryForum. All rights reserved.</p>
        </div>
      </div>
    </section>
    );  
  }  
}  
export default Contact;  