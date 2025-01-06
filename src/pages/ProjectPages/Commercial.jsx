import React from "react";
// import HeroSection from '/src/components/herosection/HeroSection.jsx';
import CommercialSlider from '/src/components/picsliders/TrunkeySlider';

const Services = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroWrapper}>
        <CommercialSlider />
      </div>

      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>Trunkey Contracts</h1>
        <p style={styles.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident. Image by Freepik.
        </p>
      </div>

      {/* Services Section */}
      <div style={styles.services}>
        {/* Service 1 */}
        <div style={styles.serviceRow}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Skyscrapers Buildings"
            style={styles.image}
          />
          <div style={styles.textContainer}>
            <h3 style={styles.cardTitle}>Skyscrapers Buildings</h3>
            <p style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div style={styles.serviceRow}>
          <div style={styles.textContainer}>
            <h3 style={styles.cardTitle}>Conceptual Architecture</h3>
            <p style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More
            </a>
          </div>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Conceptual Architecture"
            style={styles.image}
          />
        </div>

        {/* Service 3 */}
        <div style={styles.serviceRow}>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Innovative Designs"
            style={styles.image}
          />
          <div style={styles.textContainer}>
            <h3 style={styles.cardTitle}>Innovative Designs</h3>
            <p style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </p>
            <a href="#" style={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <button
          style={styles.contactButton}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ea580c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f97316")}
        >
          Contact Us
        </button>
      </div>
      <br />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    color: "orange",
    fontFamily: "Arial, sans-serif",
    paddingTop: "4rem", // Adds space for the navbar height
  },
  heroWrapper: {
    width: "100%", // Full width of the viewport
    height: "100vh", // Full height of the viewport
    overflow: "hidden", // Prevent scrollbars
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box", // Ensures padding and borders are included in width/height
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    padding: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0 0 1rem",
  },
  description: {
    fontSize: "1rem",
    color: "black",
  },
  services: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  serviceRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "2rem",
  },
  textContainer: {
    textAlign: "left",
    paddingLeft: "2rem", // Adds space between the browser window and the text
    paddingRight: "2rem", // Optional for symmetric spacing
  },
  cardTitle: {
    fontSize: "1.8rem",
    margin: "0 0 1rem",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "black",
    marginBottom: "1rem",
  },
  learnMore: {
    textDecoration: "none",
    color: "orange",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  footer: {
    textAlign: "center",
    marginTop: "2rem",
  },
  contactButton: {
    backgroundColor: "#f97316", // Default button color
    border: "none",
    borderRadius: "20px",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s ease", // Smooth hover transition
  },
};

export default Services;