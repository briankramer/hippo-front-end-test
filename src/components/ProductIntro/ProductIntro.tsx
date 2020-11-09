import React from 'react';
import './ProductIntro.scss';
import home1 from '../../images/home1.png';
import home2 from '../../images/home2.png';
import home3 from '../../images/home3.png';
import home4 from '../../images/home4.png';

function ProductIntro() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <div id="learn-grow-thrive" className="mx-auto row">
            <h2>Learn. Grow.</h2>
            <h2>Thrive.</h2>
          </div>
          <div>
            <img
              className="img-fluid rounded float-left"
              alt="home 1"
              src={home1}
            />
          </div>
        </div>

        <div className="row">
          <h2>Education Designed for People Like You</h2>

          <h4>Authentic, Engaging, and Human</h4>

          <p>
            We’re obsessed with making education that respects your time,
            attention span, and humanity. Every piece of education we produce is
            made with intention for a consistently rewarding learning
            experience.
          </p>
        </div>

        <div className="row">
          <img
            className="img-fluid rounded float-left"
            alt="home 3"
            src={home3}
          />
        </div>

        <div className="row">
          <h4>However and Whenever Your Need It</h4>

          <p>
            Get education that seamlessly fits into your busy life with
            convenient, tech-forward podcasts, video lectures, and articles, all
            on the go from your phone or tablet.
          </p>
        </div>

        <div className="row">
          <h2>See (and Hear) the Hippo Difference for Yourself</h2>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <h4>
            At Hippo Education, we believe that medical education should upgrade
            your practice and your life.
          </h4>

          <p>
            This lifelong learning should be exciting, and something we look
            forward to. It should connect us to our fellow clinicians and remind
            us, as a community, why we practice medicine, not just how. We exist
            not only to change your practice, but to change your mind about what
            truly great education can achieve.
          </p>

          <p>
            If you want to swap CME that merely checks the boxes for a community
            of like-minded people learning, growing, and doing their best work
            together—welcome.You’ve found what you’re looking for.
          </p>

          <p>You've found what you're looking for.</p>

          <button className="btn btn-primary">Explore Our Products</button>
        </div>

        <div className="row">
          <img
            className="img-fluid rounded float-left"
            alt="home 2"
            src={home2}
          />
        </div>

        <div className="row">
          <h4>Unrivaled Educational Excellence</h4>

          <p>
            Our physician-led education is carefully designed and presented by
            some of the most qualified and passionate faculty in the world. It
            makes the most of your investment, energy, and intellect and
            delivers a lasting impact far beyond CME credit.
          </p>

          <button className="btn btn-primary">Explore Our Products</button>
        </div>

        <div className="row">
          <img
            className="img-fluid rounded float-left"
            alt="product 4"
            src={home4}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductIntro;
