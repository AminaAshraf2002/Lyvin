import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Activity, Leaf, User, Heart, Plus, Play, Stethoscope, FileText, ClipboardList, ChevronLeft, ChevronRight, Calendar, UserRound, ArrowUpRight } from 'lucide-react';
import './About.css';

const testimonials = [
  { text: "Amazing team and excellent care! They explained everything clearly and made my visit stress-free. Highly recommend!", author: "Afsal K.A." },
  { text: "The doctors here are incredibly knowledgeable and compassionate. I always feel heard and respected during my visits.", author: "Sarah John." },
  { text: "State of the art facilities and a wonderful staff. My recovery was much faster than I expected thanks to their expertise.", author: "Akhil R." }
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-page">
      {/* 1. Hero Banner */}
      <div className="about-hero-banner mb-12">
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div className="hero-banner-content">
            <h1 className="hero-title">Your Health,<br /><span className="highlight-teal">Our Priority</span></h1>
            <p className="hero-subtitle">Our experienced medical team is dedicated to providing <br />personalized, high-quality care.</p>
          </div>
        </div>
      </div>

      <div className="about-container">
        {/* 2. Holistic Haven Section */}
        <div className="holistic-haven-section">
          {/* Left Side: Pill Collage */}
          <div className="collage-left">
            <div className="collage-image-1">
              <img src="/assets/pill.png" alt="Doctor" className="collage-img" />
            </div>
            <div className="collage-image-2">
              <img src="/assets/pil3.jpeg" alt="Patient" className="collage-img" />
            </div>
            {/* Play Button Overlay */}
            <div className="play-button-overlay">
              <Play fill="white" color="white" size={32} className="play-button-icon" />
            </div>
            <div className="plus-icon-overlay">
              <Plus size={32} />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="content-right">
            <div className="about-subtitle-tag">
              <Stethoscope size={20} />
              <span>About Us</span>
            </div>
            <h2 className="about-section-title">
              Expert Care You Can Trust
            </h2>
            <p className="about-desc-text">
              Aadithya Lyvin Health Hub provides trusted healthcare services, including General Physician consultations, Laboratory Services, Pharmacy, Internal Medicine, and Minor Procedures. Our experienced team offers personalized, compassionate care with a focus on quality, convenience, and patient well-being. Your health is our priority.
            </p>
            <p className="about-desc-text" style={{ marginTop: '1rem' }}>
              Aadithya Lyvin Health Hub is a local community clinic and pharmacy located near the Adithya Medical Rehabilitation Centre in Kurkancheri, Thrissur, Kerala.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon-wrapper-green">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="feature-item-title">Your Health Our Priority</h4>
                  <p className="feature-item-desc">Compassionate care. Trusted always.</p>
                </div>
              </div>
            </div>

            {/* <button className="btn-primary-read-more">
              Read More <Plus size={18} />
            </button> */}
          </div>
        </div>

        {/* Core Values / Why Choose Us Section (Pill Design) */}
        <h2 className="values-pill-title">Why Choose Us?</h2>
        <div className="values-pill-section mb-20">
          <div className="value-pill-item">
            <div className="value-pill-icon"><Activity size={24} /></div>
            <div className="value-pill-text">
              <span className="value-pill-title">Advanced Technology</span>
              <p className="value-pill-desc">State-of-the-art equipment for precise diagnosis.</p>
            </div>
          </div>

          <div className="value-pill-item">
            <div className="value-pill-icon blue"><Leaf size={24} /></div>
            <div className="value-pill-text">
              <span className="value-pill-title">Comfort Focused</span>
              <p className="value-pill-desc">A calm environment to make every visit stress-free.</p>
            </div>
          </div>

          <div className="value-pill-item">
            <div className="value-pill-icon"><User size={24} /></div>
            <div className="value-pill-text">
              <span className="value-pill-title">Expert Care</span>
              <p className="value-pill-desc">Highly skilled professionals for your oral health.</p>
            </div>
          </div>

          <div className="value-pill-item">
            <div className="value-pill-icon blue"><Heart size={24} /></div>
            <div className="value-pill-text">
              <span className="value-pill-title">Personalized Care</span>
              <p className="value-pill-desc">Customized care plans for your unique needs.</p>
            </div>
          </div>
        </div>


        {/* 4. Mission and Vision Section (Replaced Revitalize Radiance) */}
        <div className="mission-vision-section">
          {/* Left Column */}
          <div className="mv-left">
            <div className="about-subtitle-tag">
              <span>MISSION & VISION</span>
            </div>
            <h2 className="mv-title">
              Our Mission and Vision
            </h2>
            <p className="mv-desc">
              At Aadithya Lyvin Health Hub, we combine expertise, compassion, and advanced technology to deliver exceptional care. Our goal is to help you achieve a healthy, confident life that lasts a lifetime.
            </p>
            <button className="btn-primary-read-more" style={{ marginTop: '2rem' }}>
              Learn More About Us
            </button>
          </div>

          {/* Middle Column */}
          <div className="mv-middle">
            <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Doctor" className="mv-img" />
          </div>

          {/* Right Column */}
          <div className="mv-right">
            <div className="mv-feature-item">
              <div className="mv-feature-icon">
                <Heart size={24} color="#0D7C7C" />
              </div>
              <div className="mv-feature-text">
                <h4>Patient-Centered Care</h4>
                <p>We prioritize your unique health needs and well-being above all else.</p>
              </div>
            </div>
            <div className="mv-feature-item">
              <div className="mv-feature-icon">
                <Activity size={24} color="#0D7C7C" />
              </div>
              <div className="mv-feature-text">
                <h4>Continuous Innovation</h4>
                <p>We constantly evolve our practices to bring you the best in modern healthcare.</p>
              </div>
            </div>
            <div className="mv-feature-item">
              <div className="mv-feature-icon">
                <UserRound size={24} color="#0D7C7C" />
              </div>
              <div className="mv-feature-text">
                <h4>Community Impact</h4>
                <p>Dedicated to improving the overall health and wellness of our local community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Health Guard Marquee */}
      <div className="health-guard-marquee">
        <div className="marquee-content">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <Stethoscope size={24} className="marquee-icon" />
              Health Guard
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. Four Features Grid (Moved to bottom) */}
      <div className="four-features-container">
        <div className="four-features-grid">
          {[
            { icon: <FileText size={24} color="#0D7C7C" />, title: 'Quick Consultations', desc: 'Minimal wait times and efficient service to get you the care you need promptly.' },
            { icon: <ClipboardList size={24} color="#0D7C7C" />, title: 'Comprehensive Care', desc: 'A wide range of healthcare services tailored to meet the needs of our local community.' },
            { icon: <Stethoscope size={24} color="#0D7C7C" />, title: 'Expert Diagnostics', desc: 'Accurate laboratory services and assessments by experienced medical professionals.' },
            { icon: <Heart size={24} color="#0D7C7C" />, title: 'Patient-First Focus', desc: 'Compassionate, personalized attention dedicated entirely to your health and well-being.' }
          ].map((feature, i) => (
            <div key={i}>
              <div className="feature-box-header">
                <div className="feature-box-icon">
                  {feature.icon}
                </div>
                <h4 className="feature-box-title">{feature.title}</h4>
              </div>
              <p className="feature-box-desc">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* Testimonial Section */}
      <div className="testimonial-section-container">
        <div className="about-subtitle-tag" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <span>WHAT OUR PATIENTS SAY</span>
        </div>
        <div className="testimonial-slider">
          <button className="slider-arrow" onClick={prevSlide}>
            <ChevronLeft size={24} color="#0D7C7C" />
          </button>

          <div className="testimonial-content">
            <span className="quote-mark left">“</span>
            <p className="testimonial-text">
              "{testimonials[currentSlide].text}"
            </p>
            <span className="quote-mark right">”</span>
            <div className="testimonial-author">- {testimonials[currentSlide].author}</div>
            <div className="slider-dots">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
          </div>

          <button className="slider-arrow" onClick={nextSlide}>
            <ChevronRight size={24} color="#0D7C7C" />
          </button>
        </div>
      </div>

      {/* CTA Banner (From Services Page) */}
      <div className="cta-banner-container">
        <div className="banner-cta" style={{
          background: '#0D7C7C',
          borderRadius: '24px',
          position: 'relative',
          padding: '3rem 4rem',
          display: 'flex',
          alignItems: 'center',
          minHeight: '300px'
        }}>
          {/* Overflow hidden wrapper just for background shapes */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: '24px', zIndex: 1 }}>
            <div style={{ position: 'absolute', bottom: '-40%', left: '5%', width: '80%', height: '60%', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '0', right: '0', width: '25%', height: '100%', background: 'rgba(255,255,255,0.12)', borderTopLeftRadius: '80%' }}></div>
          </div>

          <div style={{ maxWidth: '50%', zIndex: 2 }}>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>TAKE ACTION TODAY</span>
            <h2 style={{ color: 'white', fontSize: '2rem', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', lineHeight: '1.2' }}>Ready to Take the First Step?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '2rem' }}>Book your appointment today and enjoy a healthier, brighter smile!</p>
            <button style={{ background: 'white', color: '#0D7C7C', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Book Appointment <ArrowUpRight size={20} />
            </button>
          </div>

          {/* Cut-out image placement */}
          <div style={{ position: 'absolute', right: '0', bottom: '0', width: '45%', height: '180%', zIndex: 2, pointerEvents: 'none' }}>
            <img src="/assets/aboutban.png" alt="Clinic Interior" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom right' }} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
