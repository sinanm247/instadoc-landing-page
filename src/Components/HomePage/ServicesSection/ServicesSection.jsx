import "./ServicesSection.scss";
import { FaWhatsapp } from "react-icons/fa";
import service1 from "../../../assets/Services/image-1.png";
import service2 from "../../../assets/Services/image-2.png";
import service3 from "../../../assets/Services/image-3.png";
import service4 from "../../../assets/Services/image-4.png";
import service5 from "../../../assets/Services/image-5.png";
import service6 from "../../../assets/Services/image-6.png";
import service7 from "../../../assets/Services/image-7.png";
import service8 from "../../../assets/Services/image-8.png";
import service9 from "../../../assets/Services/image-9.png";
import service10 from "../../../assets/Services/image-10.png";

const services = [
  {
    id: 1,
    image: service1,
    title: "Nausea & Vomiting",
    description: "Sudden vomiting with weakness."
  },
  {
    id: 2,
    image: service2,
    title: "Food Poisoning & Diarrhea",
    description: "Acute stomach infection symptoms."
  },
  {
    id: 3,
    image: service3,
    title: "Fever & Flu",
    description: "High fever with body aches."
  },
  {
    id: 4,
    image: service4,
    title: "Cough & Congestion",
    description: "Heavy chest and blocked breathing."
  },
  {
    id: 5,
    image: service5,
    title: "Kids Fever, Vomiting & Rashes",
    description: "Child fever, vomiting or rashes."
  },
  {
    id: 6,
    image: service6,
    title: "UTI Symptoms",
    description: "Painful urination and discomfort."
  },
  {
    id: 7,
    image: service7,
    title: "Headache & Migraine",
    description: "Severe headache needing relief."
  },
  {
    id: 8,
    image: service8,
    title: "Rash & Allergies",
    description: "Sudden rashes and itching."
  },
  {
    id: 9,
    image: service9,
    title: "Ear Pain & Wax",
    description: "Sharp ear pain or blockage."
  },
  {
    id: 10,
    image: service10,
    title: "Period Pain & PMS",
    description: "Sudden cramps and discomfort."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        <h1 className="section-title">Get Treated Without<br/> Leaving Home</h1>
        <p className="section-description">
          Accurate diagnosis and fast treatment support at your location. We also offer lab tests, blood tests, IV drips, nebulization, and additional care services at home.
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="whatsapp-booking-wrapper">
          <a href="https://wa.me/971503509100" className="btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="btn-icon" />
            Book instantly via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
