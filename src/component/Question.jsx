import React, { useState } from "react";
import q_search from "../assets/q_search.png";
import questyle from "../style/Question.module.css";
import Comontittle from "./Comontittle";
import Qfaqitm from "./Qfaqitm";

export default function Question() {
  // FAQ Data (Static)
  const anscard = [
    {
      id: 1,
      question: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      id: 2,
      question: "Can you create a responsive website?",
      answer:
        "Yes! We use modern design techniques to ensure full responsiveness.",
    },
    {
      id: 3,
      question:
        "Do you offer maintenance services for websites and apps developed by other companies?",
      answer:
        "Yes, we provide ongoing maintenance and support for our clients.",
    },
    {
      id: 4,
      question: "How do you ensure the security of user data?",
      answer:
        "We implement strong encryption and follow best security practices to protect user data.",
    },
    {
      id: 5,
      question:
        "How do you ensure cross-platform compatibility for mobile apps?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      id: 6,
      question: "Can you handle large-scale mobile app development projects?",
      answer:
        "Yes! We use modern design techniques to ensure full responsiveness.",
    },
    {
      id: 7,
      question:
        "What digital marketing strategies do you employ to drive website traffic?",
      answer:
        "Yes, we provide ongoing maintenance and support for our clients.",
    },
    {
      id: 8,
      question: "Can you integrate third-party APIs into our mobile app?",
      answer:
        "We implement strong encryption and follow best security practices to protect user data.",
    },
  ];

  // State for Search & Open FAQ
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(anscard[0].id); // ✅ Only First FAQ Open by Default

  // Search Filter (Combined)
  const filteredFaqs = anscard.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle Function (Only One Open Across Both Columns)
  const toggleFaq = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className={questyle.question}>
      <div className="container-fluid cus_container">
        <Comontittle
          folh1={
            <h1>
              <span style={{ color: "#666666" }}>Frequently</span> Asked
              Questions
            </h1>
          }
        />

        {/* 🔍 Search Box */}
        <div className="row">
          <div className={`col-lg-12 ${questyle.q_search}`}>
            <div className={questyle.search_box}>
              <img
                src={q_search}
                className={questyle.search_icon}
                alt="search icon"
              />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 📜 FAQ List in Two Columns */}
        {filteredFaqs.length > 0 ? (
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              {filteredFaqs.map((card, index) =>
                index % 2 === 0 ? ( // 🡆 Even Index in Left Column
                  <Qfaqitm
                    key={card.id}
                    questyle={questyle}
                    mainqes={card.question}
                    mainans={card.answer}
                    isOpen={expanded === card.id} // ✅ Shared Expand State
                    toggleFaq={() => toggleFaq(card.id)}
                  />
                ) : null
              )}
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              {filteredFaqs.map((card, index) =>
                index % 2 !== 0 ? ( // 🡆 Odd Index in Right Column
                  <Qfaqitm
                    key={card.id}
                    questyle={questyle}
                    mainqes={card.question}
                    mainans={card.answer}
                    isOpen={expanded === card.id} // ✅ Shared Expand State
                    toggleFaq={() => toggleFaq(card.id)}
                  />
                ) : null
              )}
            </div>
          </div>
        ) : (
          <p className={questyle.noresult}>No results found !</p> // ❌ Only One "No Result" Message
        )}
      </div>
    </div>
  );
}
