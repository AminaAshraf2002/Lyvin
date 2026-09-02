import React, { useRef, useState } from 'react';
import { ArrowRight, Star, ThumbsUp, Activity, Users, Award, ShieldPlus, ChevronRight, ChevronLeft, HeartPulse, Leaf, User, Heart } from 'lucide-react';

const servicesData = [
  { id: 1, title: 'Pharmacy', img: '/assets/pharmacist_counter_1786421972648.png', details: 'Quality Medicines, Prescription Support, Convenient Availability.' },
  { id: 2, title: 'General Physician', img: '/assets/hero_doctor_patient_1786421909994.png', details: 'Our General Physicians offer comprehensive medical care for individuals of all ages.' },
  { id: 3, title: 'Other Specialties', img: '/assets/nurse_assisting_1786422015946.png', details: 'Specialized care provided by our expert medical team.' },
  { id: 4, title: 'Laboratory Services', img: '/assets/lab_technician_1786421990882.png', details: 'Blood Investigations and Routine Diagnostic Tests.' },
  { id: 5, title: 'Internal Medicine', img: '/assets/hero_doctor_patient_1786421909994.png', details: 'Comprehensive management of adult diseases.' },
  { id: 6, title: 'Minor Procedure & Observation Room', img: '/assets/nurse_assisting_1786422015946.png', details: 'Nebulization, Dressing & Wound Care, Injection Services, First Aid & Observation.' }
];

const Services = () => {

  return (
    <div className="services-page" style={{ paddingTop: 0 }}>
      {/* Hero Banner Section */}
      <div className="services-hero-banner mb-12">
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div className="hero-banner-content">
            <h1 className="hero-title">Modern Healthcare<br/><span className="highlight-teal">With Care For You</span></h1>
            <p className="hero-subtitle">Professional medical assistance for a healthy life and confidence.</p>
          </div>
          
          <div className="hero-doctor-card">
            <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Chief Medical Officer" className="hero-doc-img" />
            <div className="hero-doc-info">
              <h4>Chief Medical Officer</h4>
              <span className="hero-doc-spec">General Physician</span>
              <span className="hero-doc-exp">Highly Experienced</span>
              <div className="doc-rating mt-1">
                <span>4.9</span>
                <div className="stars"><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/></div>
                <span className="text-gray text-xs font-normal ml-1">(145 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        
        {/* Services Section */}
        <div className="services-showcase-section">
          <div className="services-showcase-header">
            <div className="showcase-left">
              <h2 className="showcase-title">DISCOVER OUR HEALTHCARE SERVICES</h2>
              
              <div className="reviews-widget mt-8">
                <div className="avatars-group">
                  <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Patient 1" className="avatar" />
                  <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Patient 2" className="avatar" />
                  <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Patient 3" className="avatar" />
                </div>
                <div>
                  <div className="font-bold text-lg">750+</div>
                  <div className="text-sm text-gray">happy patients</div>
                </div>
              </div>
              
              <p className="mt-8 text-sm text-gray max-w-sm mb-6">
                We create a comfortable healing environment for every patient and care deeply about your health.
              </p>
            </div>
            
            <div className="showcase-right">
              <p className="text-gray max-w-lg mb-8">
                Modern healthcare that combines comfort, accuracy, and attention to detail. Our clinic offers a full range of medical services for your family's health and well-being.
              </p>
              
              <div className="services-cards-viewport">
                <div className="services-cards-track">
                  
                  {servicesData.map((service) => (
                    <div className="service-image-card" key={service.id}>
                      <img src={service.img} alt={service.title} />
                      <div className="card-overlay">
                        <h3>{service.title}</h3>
                        <button 
                          className="card-arrow" 
                          onClick={() => {
                            document.getElementById(`service-details-${service.id}`)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          aria-label={`View details for ${service.title}`}
                          style={{ cursor: 'pointer', border: 'none' }}
                        >
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details Panels (All visible) */}
        <div className="all-services-panels" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem' }}>
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              id={`service-details-${service.id}`}
              className={`about-highlight-section relative ${index % 2 !== 0 ? 'reverse' : ''}`} 
              style={{ 
                borderRadius: '30px', 
                backgroundColor: '#f8fcfb'
              }}
            >
              <div className="about-image-left">
                <img src={service.img} alt={service.title} style={{ minHeight: '350px', height: '100%' }} />
              </div>
              
              <div className="about-content-right">
                <span className="text-gray text-sm font-semibold uppercase tracking-wider">{service.title}</span>
                <h2 className="about-highlight-title text-2xl mt-2 mb-4">HIGH STANDARDS OF {service.title.toUpperCase()} AND A PERSONALIZED APPROACH</h2>
                <p className="mb-6 text-gray text-sm leading-relaxed">
                  {service.details} We utilize advanced medical technology and quality care to ensure effective treatment and long-term results.
                </p>
                
                <a href="/about" className="btn btn-outline-teal btn-sm rounded-full flex items-center gap-2 w-max" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
                  More Info <ArrowRight size={14} />
                </a>
                
                <div className="doctors-preview-grid">
                  <div className="doctor-mini-card" style={{ border: 'none', boxShadow: 'none', padding: 0 }}>
                    <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Lead Specialist" className="doc-avatar" />
                    <div className="doc-info">
                      <h4>Lead Specialist</h4>
                      <span className="doc-specialty">Expert Care</span>
                      <span className="doc-exp">Highly Experienced</span>
                      <div className="doc-rating">
                        <span>4.8</span>
                        <div className="stars"><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section (From Home Page) */}
        <div className="banner-cta mt-12 mb-16">
          {/* Overflow hidden wrapper just for background shapes */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: '24px', zIndex: 1 }}>
            <div style={{ position: 'absolute', bottom: '-40%', left: '5%', width: '80%', height: '60%', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '0', right: '0', width: '25%', height: '100%', background: 'rgba(255,255,255,0.12)', borderTopLeftRadius: '80%' }}></div>
          </div>

          <div className="banner-cta-text">
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>Ready for a healthier smile?</span>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.4rem, 5vw, 2rem)', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', lineHeight: '1.2' }}>BOOK YOUR APPOINTMENT TODAY</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '2rem' }}>Our specialists will help you find the best care and treatment for your health needs.</p>
            <a href="/contact" style={{ display: 'inline-block', background: 'white', color: '#0D7C7C', padding: '0.600rem 1.35rem', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Visit site <ArrowRight size={16} style={{ display: 'inline', marginLeft: '5px', verticalAlign: 'text-bottom' }}/></a>
          </div>
          {/* Using the cut-out image placement style from the home page */}
          <div className="banner-cta-img-wrapper">
             <img src="/assets/serviceban.png" alt="Clinic Interior" className="banner-cta-img" />
          </div>
        </div>

        {/* About Clinic Section */}
        <div className="about-highlight-section">
          <div className="about-image-left">
            <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Doctor examining patient" />
          </div>
          
          <div className="about-content-right">
            <h2 className="about-highlight-title">HIGH STANDARDS OF HEALTHCARE AND A PERSONALIZED APPROACH</h2>
            <p className="mb-6 text-gray">
              We utilize advanced medical technology and quality care to ensure effective, painless treatment and long-term well-being for our community.
            </p>
            
            <a href="/about" className="btn btn-outline-teal btn-sm rounded-full flex items-center gap-2 w-max" style={{ marginTop: '3rem', marginBottom: '2.5rem' }}>
              More Info <ArrowRight size={14} />
            </a>
            
            <div className="doctors-preview-grid">
              {/* Doctor 1 */}
              <div className="doctor-mini-card">
                <img src="/assets/hero_doctor_patient_1786421909994.png" alt="General Physician" className="doc-avatar" />
                <div className="doc-info">
                  <h4>General Physician</h4>
                  <span className="doc-specialty">Primary Care</span>
                  <span className="doc-exp">Highly Experienced</span>
                  <div className="doc-rating">
                    <span>4.8</span>
                    <div className="stars"><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/></div>
                  </div>
                </div>
              </div>
              
              {/* Doctor 2 */}
              <div className="doctor-mini-card">
                <img src="/assets/rmo_doctor_1786422032572.png" alt="Internal Medicine" className="doc-avatar" />
                <div className="doc-info">
                  <h4>Internal Medicine</h4>
                  <span className="doc-specialty">Specialist Care</span>
                  <span className="doc-exp">Highly Experienced</span>
                  <div className="doc-rating">
                    <span>4.9</span>
                    <div className="stars"><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/><Star size={12} fill="#FACC15" color="#FACC15"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-bar-section mt-16">
          <div className="stat-item">
            <div className="stat-icon"><ThumbsUp size={24} color="white" /></div>
            <div className="stat-text">
              <span className="stat-number">98%</span>
              <span className="stat-label">satisfied patients</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon blue"><ShieldPlus size={24} color="white" /></div>
            <div className="stat-text">
              <span className="stat-number">50K+</span>
              <span className="stat-label">healthy lives</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon"><Users size={24} color="white" /></div>
            <div className="stat-text">
              <span className="stat-number">4.9</span>
              <span className="stat-label">average clinic rating</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon blue"><Star size={24} color="white" /></div>
            <div className="stat-text">
              <span className="stat-number">1+</span>
              <span className="stat-label">years of patient care</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

