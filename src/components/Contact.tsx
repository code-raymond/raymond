import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      Send Message Us
                    </h5>
                  </div>
                  <div>
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">
                      Get in Touch
                    </h5>
                  </div>
                  <div className="more-info">
                    <p className="lead">
                      Feel free to reach out to me through the following contact information.
                    </p>
                    <ul className="list-ico">
                      <li><span className="bi bi-phone"></span> (+91) 9895191391</li>
                      <li><span className="bi bi-envelope"></span> raymondmanithara@gmail.com</li>
                    </ul>
                  </div>
                  <div className="socials">
                    <ul>
                      <li><a href="#"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                      <li><a href="#"><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                      <li><a href="https://www.linkedin.com/in/raymond-thomas-50976211b/"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
