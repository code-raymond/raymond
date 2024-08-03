import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Portfolio
              </h3>
              <p className="subtitle-a">
                My recent projects.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                <div className="work-img">
                  <img src="assets/img/work-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Project Name</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Category</span> / <span className="w-date">Date</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="bi bi-plus-circle"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
