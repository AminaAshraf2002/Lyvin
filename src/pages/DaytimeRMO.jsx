import React from 'react';
import { Activity, Wind, Syringe, Droplets, Bandage, Pill, Phone, Clock, Stethoscope, ArrowRight, User, Shield, UserPlus, Heart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './DaytimeRMO.css';

const DaytimeRMO = () => {
  return (
    <div className="rmo-page">
      
      {/* 1. Hero Section (Curved layout) */}
      <div className="rmo-hero-new">
        <div className="rmo-hero-text">
          <h1 className="rmo-hero-title">
            Daytime RMO. <span>Expert Care.</span>
          </h1>
          <p className="rmo-hero-subtitle">
            We provide immediate, high-quality medical care for you and your family without the wait of an emergency room.
          </p>
          <div className="rmo-hero-buttons">
            <a href="tel:+91963322149" className="btn btn-gradient" style={{ padding: '0.55rem 1.25rem', borderRadius: '30px', fontSize: '0.9rem' }}>
              <Clock size={16} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/> Book Appointment
            </a>
            <button className="rmo-hero-btn-outline" style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              Watch Video
            </button>
          </div>
          
          <div className="rmo-hero-features-bottom">
            <div className="rmo-hb-feature"><Stethoscope size={18} color="#0D7C7C" /> Patient Focused</div>
            <div className="rmo-hb-feature"><Activity size={18} color="#0D7C7C" /> Advanced Technology</div>
            <div className="rmo-hb-feature"><User size={18} color="#0D7C7C" /> Experienced Team</div>
          </div>
        </div>
        
        <div className="rmo-hero-image-wrapper">
          <img src="/assets/hero_doctor_patient_1786421909994.png" alt="RMO Doctor" className="rmo-hero-image" />
        </div>
      </div>

      {/* 2. Medical Procedures (Our Services layout) */}
      <div className="rmo-services-replica">
        <div className="rmo-services-header">
          <span className="rmo-subtitle-tag">MEDICAL PROCEDURES</span>
          <h2>Complete Medical Care <br /> for a <span style={{ color: '#0D7C7C' }}>Healthier You</span></h2>
        </div>
        
        <div className="rmo-services-grid">
          <div className="rmo-srv-card">
            <img src="/assets/clinic_waiting_area_1786421958277.png" alt="ECG" className="rmo-srv-card-img" />
            <div className="rmo-srv-card-overlay">
              <div className="rmo-srv-card-text">
                <h3>ECG</h3>
                <p>Electrocardiograms for monitoring heart rhythms and identifying abnormalities.</p>
              </div>
              
            </div>
          </div>
          
          <div className="rmo-srv-card">
            <img src="/assets/nurse_assisting_1786422015946.png" alt="Nebulisation" className="rmo-srv-card-img" />
            <div className="rmo-srv-card-overlay">
              <div className="rmo-srv-card-text">
                <h3>Nebulisation</h3>
                <p>Breathing treatments to deliver medication directly to your lungs.</p>
              </div>
             
            </div>
          </div>

          <div className="rmo-srv-card">
            <img src="/assets/lab_technician_1786421990882.png" alt="Fluid Tapping" className="rmo-srv-card-img" />
            <div className="rmo-srv-card-overlay">
              <div className="rmo-srv-card-text">
                <h3>Ascitic Fluid Tapping</h3>
                <p>Safe removal of excess fluid from the abdominal cavity.</p>
              </div>
              
            </div>
          </div>

          <div className="rmo-srv-card">
            <img src="/assets/pharmacist_counter_1786421972648.png" alt="IVF Admin" className="rmo-srv-card-img" />
            <div className="rmo-srv-card-overlay">
              <div className="rmo-srv-card-text">
                <h3>IVF Administration</h3>
                <p>Intravenous fluid administration for hydration and medical needs.</p>
              </div>
              
            </div>
          </div>

          <div className="rmo-srv-card">
            <img src="/assets/clinic_reception_1786422048271.png" alt="Minor Sutures" className="rmo-srv-card-img" />
            <div className="rmo-srv-card-overlay">
              <div className="rmo-srv-card-text">
                <h3>Minor Sutures</h3>
                <p>Cleaning, stitching, and bandaging of minor lacerations and wounds.</p>
              </div>
              
            </div>
          </div>

          <div className="rmo-srv-card">
            <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Antibiotics" className="rmo-srv-card-img" />
            <div className="rmo-srv-card-overlay">
              <div className="rmo-srv-card-text">
                <h3>Parenteral Antibiotic Administration</h3>
                <p>Administration of antibiotics via injection for faster absorption.</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* 3. Why See Our RMO? (About Us layout) */}
      <div className="rmo-about-replica">
        {/* Left: Text */}
        <div className="rmo-about-text">
          <span className="rmo-subtitle-tag">WHY RMO</span>
          <h2>Dedicated to Your Health and Well-Being</h2>
          <p>
            At Lyvin Health Hub, our Daytime RMO combines expertise, compassion, and advanced technology to deliver exceptional immediate care. Our goal is to help you achieve a healthy, confident life without the long waits associated with emergency rooms.
          </p>
          <button className="btn btn-gradient" style={{ borderRadius: '8px' }}>Learn More About Us</button>
        </div>
        
        {/* Middle: Image */}
        <div className="rmo-about-image-wrapper">
          <img src="/assets/rmo_doctor_1786422032572.png" alt="Doctor Consulting Patient" className="rmo-about-image" />
        </div>
        
        {/* Right: Features */}
        <div className="rmo-about-features">
           <div className="rmo-about-feature">
             <div className="rmo-af-icon"><User size={24} color="#0D7C7C" /></div>
             <div className="rmo-af-text">
               <h4>Expert Medical Team</h4>
               <p>Skilled and friendly professionals committed to your care.</p>
             </div>
           </div>
           
           <div className="rmo-about-feature">
             <div className="rmo-af-icon"><Activity size={24} color="#0D7C7C" /></div>
             <div className="rmo-af-text">
               <h4>Advanced Technology</h4>
               <p>We use the latest technology for accurate diagnosis and treatment.</p>
             </div>
           </div>
           
           <div className="rmo-about-feature">
             <div className="rmo-af-icon"><Heart size={24} color="#0D7C7C" /></div>
             <div className="rmo-af-text">
               <h4>Comfortable Experience</h4>
               <p>We create a relaxing environment so you can feel at ease.</p>
             </div>
           </div>
        </div>
      </div>

      {/* 4. How It Works (From Home Page) */}
      <section className="section bg-white" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span style={{ color: '#0D7C7C', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>How It Works</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: "'Inter', sans-serif", color: '#1B3C59', fontWeight: '700' }}>Simple Steps to Get Care</h2>
              <Activity size={32} color="#E2E8F0" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="how-it-works-steps">
            {/* Smoother, Deeper Wavy Connecting Line */}
            <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '50px', zIndex: 1 }}>
              <svg viewBox="0 0 300 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path d="M 0,25 Q 50,-10 100,25 T 200,25 T 300,25" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6, 6" />
              </svg>
            </div>
            
            {[
              { num: "01", title: "Walk In", desc: "Arrive at our clinic anytime during the day.", icon: <User size={24} color="#0D7C7C" /> },
              { num: "02", title: "Consultation", desc: "Immediate assessment by our RMO.", icon: <Shield size={24} color="#0D7C7C" /> },
              { num: "03", title: "Procedure", desc: "Expert minor procedures performed safely.", icon: <UserPlus size={24} color="#0D7C7C" /> },
              { num: "04", title: "Recovery", desc: "Rest assured you are in good hands.", icon: <Activity size={24} color="#0D7C7C" /> }
            ].map((step, i) => (
              <div key={i} className="how-it-works-step">
                
                {/* Mobile-only connecting lines for each row */}
                {(i === 0 || i === 2) && (
                  <div className="mobile-wavy-line" style={{ position: 'absolute', top: '15px', left: '50%', width: 'calc(100% + 1.5rem)', height: '50px', zIndex: -1 }}>
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                      <path d="M 0,25 Q 50,-10 100,25" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6, 6" />
                    </svg>
                  </div>
                )}

                <div style={{ width: '80px', height: '80px', background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', boxShadow: '0 0 0 10px white' }}>
                  {step.icon}
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.25rem' }}>{step.num}</div>
                <h4 style={{ color: '#1E293B', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: '1.5' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <div className="cta-banner-container">
        <div className="banner-cta">
          {/* Overflow hidden wrapper just for background shapes */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: '24px', zIndex: 1 }}>
            <div style={{ position: 'absolute', bottom: '-40%', left: '5%', width: '80%', height: '60%', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: '0', right: '0', width: '25%', height: '100%', background: 'rgba(255,255,255,0.12)', borderTopLeftRadius: '80%' }}></div>
          </div>

          <div className="banner-cta-text">
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>IMMEDIATE ASSISTANCE</span>
            <h2 style={{ color: 'white', fontSize: '2rem', fontFamily: "'Inter', sans-serif", marginBottom: '1rem', lineHeight: '1.2' }}>Need Immediate Medical Care?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '2rem' }}>Our Daytime RMO is available for walk-ins and urgent consultations.</p>
            <a href="tel:+91963322149" style={{ display: 'inline-flex', background: 'white', color: '#0D7C7C', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <Phone size={20} /> Call Emergency Line
            </a>
          </div>
          
          {/* Cut-out image placement */}
          <div className="banner-cta-img-wrapper">
             <img src="/assets/rmo1.png" alt="Medical Care" className="banner-cta-img" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default DaytimeRMO;
