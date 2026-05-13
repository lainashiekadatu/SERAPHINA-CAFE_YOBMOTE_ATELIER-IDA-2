import React from "react";
import { Link } from "react-router-dom";
import "./AboutUsPage.css"; // Lumabas patungong src folder

// Import images mula sa assets (Base sa structure mo: ../assets/)
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

      {/* HERO */}
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
            Our vision is to become a beloved café known for quality, creativity,
            and community connection—where every visit feels special and memorable.
          </p>
        </div>
        <div className="visionImage">
          <img src={vision} alt="Our Vision" />
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section">
        <div className="sectionTitle">OUR VALUES</div>
        <div className="valuesRow">
          {["Quality", "Community", "Sustainability"].map((item) => (
            <div key={item} className="valueCard">
              <div className="icon-placeholder"></div>
              <div className="valueTitle">{item}</div>
              <p className="valueDesc">
                We are committed to delivering the best experience in every service we offer.
              </p>
            </div>
          ))}
        </div>

        <div className="buttonRow">
          <Link to="/menu">
            <button className="primaryBtn">View Menu</button>
          </Link>
          <Link to="/contact">
            <button className="secondaryBtn">Contact Us</button>
          </Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
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
            <img src={interior} alt="Café Interior" />
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