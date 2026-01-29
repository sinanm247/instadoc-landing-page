import { useState } from "react";
import "./FAQSection.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    id: 1,
    question: "How fast can a doctor reach me?",
    answer: "Doctors are usually dispatched within 30–60 minutes, depending on your location."
  },
  {
    id: 2,
    question: "What happens during a home visit?",
    answer: "The doctor reviews symptoms, checks vital signs, performs an examination, and creates a clear treatment plan."
  },
  {
    id: 3,
    question: "Do doctors come prepared?",
    answer: "Yes. Our doctors carry essential equipment to manage common medical conditions at home."
  },
  {
    id: 4,
    question: "Is InstaDoc available at night or on weekends?",
    answer: "Yes. Our Doctor at Home service operates 24/7."
  },
  {
    id: 5,
    question: "Which locations do you serve?",
    answer: "We cover Dubai, Abu Dhabi, Sharjah, and Ajman."
  },
  {
    id: 6,
    question: "How do you maintain safety and hygiene?",
    answer: "All visits follow strict medical hygiene and infection-control standards."
  },
  {
    id: 7,
    question: "Can I speak in my preferred language?",
    answer: "Yes. Our medical team speaks multiple languages."
  },
  {
    id: 8,
    question: "Can extra services be added during the visit?",
    answer: "Yes. Lab tests, IV therapies, ECG, and other services can be arranged if recommended."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-container">
      <div className="faq-wrapper">
        <h1 className="section-title">Frequently Asked Questions</h1>
        {/* <p className="faq-description">
          Find answers to common questions about City Doctor's home medical services. 
          If you have additional questions, feel free to contact us directly.
        </p> */}

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <IoChevronUp className="chevron-icon" />
                  ) : (
                    <IoChevronDown className="chevron-icon" />
                  )}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

