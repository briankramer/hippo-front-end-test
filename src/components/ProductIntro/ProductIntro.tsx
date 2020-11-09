import React from 'react';
import './ProductIntro.scss';

function ProductIntro() {
  return (
    <div className="row">
      <div className="col-6">
        <h2>Learn. Grow. Thrive.</h2>

        <h5>
          At Hippo Education, we believe that medical education should upgrade
          your practice and your life.
        </h5>

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

        <h2>Education Designed for People Like You</h2>

        <h5>Authentic, Engaging, and Human</h5>

        <p>
          We’re obsessed with making education that respects your time,
          attention span, and humanity. Every piece of education we produce is
          made with intention for a consistently rewarding learning experience.
        </p>

        <h5>Unrivaled Educational Excellence</h5>

        <p>
          Our physician-led education is carefully designed and presented by
          some of the most qualified and passionate faculty in the world. It
          makes the most of your investment, energy, and intellect and delivers
          a lasting impact far beyond CME credit.
        </p>

        <button className="btn btn-primary">Explore Our Products</button>

        <h5>However and Whenever Your Need It</h5>

        <p>
          Get education that seamlessly fits into your busy life with
          convenient, tech-forward podcasts, video lectures, and articles, all
          on the go from your phone or tablet.
        </p>
      </div>
      <div className="col-6">
        <h2>See (and Hear) the Hippo Difference for Yourself</h2>
      </div>
    </div>
  );
}

export default ProductIntro;
