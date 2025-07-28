import React from "react";
import Footer from "./footer";

const founders = [
  {
    name: "Shreyas Sawant",
    role: "Co-founder",
    image: "/static/founder1.jpg",
    bio: "MBA student.",
  },
  {
    name: "Meera Nair",
    role: "Co-founder",
    image: "/static/founder2.jpg",
    bio: "MBA student.",
  },
  {
    name: "Ravi Verma",
    role: "Co-founder",
    image: "/static/founder3.jpg",
    bio: "MBA student.",
  },
  {
    name: "Divya Joshi",
    role: "Co-founder",
    image: "/static/founder4.jpg",
    bio: "MBA student.",
  },
];

const AboutPage = () => {
  return (
    <div>
      <div className="about-page">
        <section className="vision">
          <h1>Our Vision</h1>
          <p>
            At Krishi Reboot, our vision is to revolutionize small-scale farming
            in India by equipping farmers with affordable, climate-resilient,
            and easy-to-use tools. We aim to empower 10 lakh farmers by 2030
            through portable crop protection and on-field soil testing solutions
            that increase yield, reduce risk, and support data-driven decisions
            — all in their local language and at their fingertips.
          </p>
        </section>

        <section className="founders">
          <h2>Meet the Founders</h2>
          <div className="founder-grid">
            {founders.map((founder, idx) => (
              <div key={idx} className="founder-card">
                <img src={founder.image} alt={founder.name} />
                <h3>{founder.name}</h3>
                <p className="role">{founder.role}</p>
                <p className="bio">{founder.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
