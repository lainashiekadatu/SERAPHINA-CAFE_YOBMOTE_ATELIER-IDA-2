import React from "react";
import { Link } from "react-router-dom";
import "./AboutUsPage.css";

// Import images
import cafe from "../images/cafe.png";
import brew from "../images/brew.png";
import team from "../images/team.jpg";
import interior from "../images/interior.png";
import vision from "../images/vision.png";

function AboutUsPage() {
  return (
    <div className="about-page-container">

      {/* TITLE */}
      <div className="titleBox">ABOUT US</div>

      {/* HERO SECTION */}
      <div className="hero-section">
        <img src={cafe} alt="Cafe Exterior" className="hero-img" />
      </div>

      {/* MISSION */}
      <section className="section missionSection">
        <div className="sectionTitle">MISSION</div>

        <p className="missionText">
          At Café Yobmôté Atelier, our mission is to provide a warm and welcoming
          space where people can enjoy quality coffee, delicious meals, and
          meaningful moments. We aim to serve with passion, support our
          community, and create a unique café experience every day.
        </p>
      </section>

      {/* VISION */}
      <section className="sectionFlex">

        <div className="visionText">
          <div className="sectionTitle">VISION</div>

          <p className="missionText">
            Our vision is to become a beloved café known for quality,
            creativity, and community connection—where every visit feels
            special and memorable.
          </p>
        </div>

        <div className="visionImage">
          <img src={vision} alt="Our Vision" />
        </div>
      </section>

      {/* VALUES */}
      <section className="section valuesSection">

        <div className="sectionTitle">OUR VALUES</div>

        <div className="valuesRow">

          {["Quality", "Community", "Sustainability"].map((item) => (

            <div key={item} className="valueCard">

              <div className="icon-placeholder"></div>

              <div className="valueTitle">{item}</div>

              <p className="valueDesc">
                We are committed to delivering the best experience in every
                service we offer.
              </p>

            </div>

          ))}

        </div>

        {/* BUTTONS */}
        <div className="buttonRow">

          <Link to="/menu" className="primaryBtn">
            VIEW MENU
          </Link>

          <Link to="/contact" className="secondaryBtn">
            CONTACT US
          </Link>

        </div>

      </section>

      {/* STORY */}
      <section className="section storySection">

        <div className="sectionTitle">OUR STORY</div>

        <p className="missionText">
          Café Yobmôté Atelier started as a simple idea—to bring people together
          through good coffee and a cozy atmosphere. Over time, it grew into a
          space where creativity, passion, and community meet.
        </p>

        <div className="imageRow">

          <div className="storyImg">
            <img src={team} alt="Our Team" />
          </div>

          <div className="storyImg">
            <img src={interior} alt="Cafe Interior" />
          </div>

          <div className="storyImg">
            <img src={brew} alt="Coffee Brewing" />
          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutUsPage;