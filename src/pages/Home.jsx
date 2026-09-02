import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, ChevronLeft, Heart, Shield, Star, CheckCircle2, ArrowRight, Clock, Stethoscope, Award, Users, Activity, MapPin, Phone, Mail, User, UserPlus, Pill, Microscope, Play, PlayCircle, UserRound, BriefcaseMedical, FlaskConical, HeartPulse, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: <>Your Health, Our Priority.<br /><span className="highlight-teal">Expert Care.</span></>,
    desc: "Compassionate care. Advanced technology. Better health for a better tomorrow.",
    img: "/assets/lyvin_hero_bg.png",
    mobileImg: "/assets/mobile1.png",
    doctor: {
      name: "Expert Specialist",
      role: "Pediatric Dentistry",
      experience: "Highly Experienced",
      rating: "4.5",
      img: "/assets/bannercut.png"
    }
  },
  {
    id: 2,
    title: <>Advanced Care,<br /><span className="highlight-teal">Modern Technology.</span></>,
    desc: "State-of-the-art facilities designed for accurate diagnosis and effective treatments.",
    img: "/assets/banner2.png",
    mobileImg: "/assets/mobile2.png",
    doctor: {
      name: "Senior Consultant",
      role: "Cardiology Specialist",
      experience: "Highly Experienced",
      rating: "4.9",
      img: "/assets/bannercut.png"
    }
  },
  {
    id: 3,
    title: <>Compassionate Care,<br /><span className="highlight-teal">24/7 Availability.</span></>,
    desc: "Round-the-clock care whenever you need it, focused entirely on your wellbeing.",
    img: "/assets/banner3.png",
    doctor: {
      name: "Resident Medical Officer",
      role: "General Surgeon",
      experience: "Highly Experienced",
      rating: "4.8",
      img: "/assets/bannercut.png"
    }
  }
];

const tags = ["Expert Doctors", "Advanced Care", "24/7 Services", "Patient First"];

const promoCardsData = [
  <div className="promo-card" style={{ height: '100%' }}>
    <div className="promo-card-content">
      <h3>Health Checkup<br/>Packages</h3>
      <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
        <span style={{ color: '#F97316', fontSize: '0.8rem', fontWeight: '600', display: 'block' }}>Starting From</span>
        <span style={{ color: '#F97316', fontSize: '2rem', fontWeight: '700' }}>$49</span>
      </div>
      <div style={{ marginTop: 'auto' }}>
        <button className="promo-btn-outline">View Packages</button>
      </div>
    </div>
    <img src="/assets/promo_family.png" alt="Family" className="promo-img-bottom-right" />
  </div>,
  <div className="promo-card" style={{ height: '100%' }}>
    <div className="promo-card-content">
      <h3>Why Choose Us?</h3>
      <ul className="promo-list">
        <li><CheckCircle2 size={16} className="promo-check" /> Experienced Doctors</li>
        <li><CheckCircle2 size={16} className="promo-check" /> Modern Facilities</li>
        <li><CheckCircle2 size={16} className="promo-check" /> Patient First Approach</li>
        <li><CheckCircle2 size={16} className="promo-check" /> Affordable Pricing</li>
      </ul>
      <div style={{ marginTop: 'auto' }}>
        <button className="promo-btn-outline">Learn More</button>
      </div>
    </div>
  </div>,
  <div className="promo-card" style={{ height: '100%' }}>
    <div className="promo-card-content">
      <h3>Take Care of<br/>Yourself Today</h3>
      <p>Early diagnosis, better treatment, healthier life.</p>
      <div style={{ marginTop: 'auto' }}>
        <button className="promo-btn-solid">Book Now</button>
      </div>
    </div>
    <img src="/assets/promo_woman.png" alt="Woman" className="promo-img-bottom-right" />
  </div>,
  <div className="promo-card" style={{ height: '100%' }}>
    <div className="promo-card-content">
      <h3>We're Here for You</h3>
      <div style={{ margin: '0.5rem 0' }}>
        <span style={{ color: '#F97316', fontSize: '2rem', fontWeight: '700' }}>24/7</span>
      </div>
      <p>Emergency Care<br/>You Can Trust.</p>
      <div style={{ marginTop: 'auto' }}>
        <button className="promo-btn-outline">Get Help Now</button>
      </div>
    </div>
    <img src="/assets/promo_ambulance.png" alt="Ambulance" className="promo-img-bottom-right" />
  </div>
];

const allPromoCards = [...promoCardsData, ...promoCardsData, ...promoCardsData, ...promoCardsData];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const promoTimer = setInterval(() => {
      setCurrentPromoSlide((prev) => {
        const isMob = window.innerWidth <= 768;
        const maxSlide = allPromoCards.length - (isMob ? 1 : 3);
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 3500);
    
    return () => {
      clearInterval(timer);
      clearInterval(promoTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
      {/* Auto-Slider Hero Section (Original Layout Style) */}
      <section className="hero-replica">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.mobileImg && isMobile ? slide.mobileImg : slide.img})` }}
          ></div>
        ))}
        <div className="hero-replica-gradient"></div>

        <div className="container hero-replica-content">
          <div className="hero-replica-text">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].desc}</p>
            <div className="hero-replica-actions">
              <a href="tel:+91963322149" className="btn btn-gradient book-btn">
                <Calendar size={18} /> Book Appointment
              </a>
              <button className="btn btn-watch">
                <div className="play-icon">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Video
              </button>
            </div>
          </div>

          <div className="hero-slider-controls" style={{ marginBottom: '2rem' }}>
            <button onClick={prevSlide} className="slider-arrow"><ChevronLeft size={16} /></button>
            <div className="slider-indicator">
              <span>0{currentSlide + 1}</span>
              <div className="slider-progress-bar">
                <div className="slider-progress-fill" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
              </div>
              <span>0{slides.length}</span>
            </div>
            <button onClick={nextSlide} className="slider-arrow"><ChevronRight size={16} /></button>
          </div>
        </div>

        {/* Floating Features Card */}
        <div className="container floating-features-container">
          <div className="floating-features-card">
            <div className="feature-col">
              <div className="feature-icon-wrapper text-teal"><UserRound size={32} /></div>
              <div>
                <h4>Expert Doctors</h4>
                <p>Experienced specialists providing the best care.</p>
              </div>
            </div>
            
            <div className="feature-col">
              <div className="feature-icon-wrapper text-teal"><HeartPulse size={32} /></div>
              <div>
                <h4>Advanced Care</h4>
                <p>State-of-the-art technology for accurate diagnosis.</p>
              </div>
            </div>

            <div className="feature-col">
              <div className="feature-icon-wrapper text-teal"><Clock size={32} /></div>
              <div>
                <h4>24/7 Services</h4>
                <p>Round-the-clock care whenever you need it.</p>
              </div>
            </div>

            <div className="feature-col border-none">
              <div className="feature-icon-wrapper text-teal"><ShieldPlus size={32} /></div>
              <div>
                <h4>Patient First</h4>
                <p>Compassionate care focused on you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip" data-aos="fade-up">
        <div className="container">
          <div className="trust-content mx-auto">
            <img src="/assets/clinic_waiting_area_1786421958277.png" alt="Clinic Team and Waiting Area" />
            <h2>Your Health, Our Priority — Compassionate care. Trusted always.</h2>
          </div>
        </div>
      </section>



      {/* Scaled Wrapper for remaining sections */}
      <div className="home-content-wrapper">
        {/* Services Preview Section */}
        <section className="section bg-white" style={{ paddingTop: '4rem' }} data-aos="fade-up">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <span style={{ color: '#0D7C7C', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>Our Services</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: "'Outfit', sans-serif", color: '#1B3C59', fontWeight: '700', margin: 0, textAlign: 'center' }}>Comprehensive Care for You</h2>
              <Activity size={32} color="#E2E8F0" strokeWidth={1.5} />
            </div>
          </div>
          <div className="services-replica-grid">
            {[
              { icon: <Stethoscope size={28} strokeWidth={2} />, title: "General Consults", desc: "Expert physicians available for routine checkups and common illnesses.", link: "/services" },
              { icon: <Pill size={28} strokeWidth={2} />, title: "In-house Pharmacy", desc: "Get your prescriptions filled immediately after your consultation.", link: "/diagnostics" },
              { icon: <Microscope size={28} strokeWidth={2} />, title: "Lab Diagnostics", desc: "Fast and accurate laboratory testing with modern equipment.", link: "/diagnostics" },
              { icon: <Clock size={28} strokeWidth={2} />, title: "Daytime RMO", desc: "Resident Medical Officer available for minor procedures and observation.", link: "/rmo" }
            ].map((service, index) => (
              <div key={index} className="service-replica-card">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="learn-more-link">
                  Learn More <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 4 Promo Cards */}
        <div className="container" style={{ maxWidth: '1450px', marginTop: '2.5rem' }}>
          <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
            <div className="promo-cards-slider" style={{ 
              display: 'flex', 
              transition: currentPromoSlide === 0 ? 'none' : 'transform 0.5s ease', 
              transform: isMobile ? `translateX(-${currentPromoSlide * 100}%)` : `translateX(-${currentPromoSlide * 33.333}%)`
            }}>
              
              {allPromoCards.map((card, index) => (
                <div key={index} style={{ flex: isMobile ? '0 0 100%' : '0 0 33.333%', padding: '0 0.75rem' }}>
                  {card}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* About Us Section (New Design) */}
      <section className="section bg-white" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)', position: 'relative', overflow: 'hidden' }} data-aos="fade-up">
        {/* Light Blue Blob Background */}
        <div className="bg-light-blue-blob"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-prohealth-grid">
            
            {/* Left Side: Text */}
            <div className="about-prohealth-content">
              <span style={{ color: '#4A7CA6', fontWeight: '700', letterSpacing: '1px', fontSize: '0.85rem', textTransform: 'uppercase' }}>ABOUT US</span>
              <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.7rem)', fontFamily: "'Outfit', sans-serif", color: '#1B3C59', marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight: '1.2' }}>
                Lyvin is a team of <span style={{ color: 'var(--color-teal)' }}>experienced medical professionals</span>
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-start)', marginBottom: '1.5rem' }}>
                <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--color-accent-start)' }}></div>
                <Activity size={24} strokeWidth={2.5} />
                <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--color-accent-start)' }}></div>
              </div>
              <p style={{ color: '#829AB1', fontSize: '1rem', lineHeight: '1.8' }}>
                Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms. From walking in for a quick consultation to getting your lab results, our streamlined process ensures you spend less time waiting.
              </p>
            </div>

            {/* Right Side: Image */}
            <div className="about-prohealth-image" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(27, 60, 89, 0.1)' }}>
              <img src="/assets/hero_doctor_patient_1786421909994.png" alt="Medical Team" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>

          </div>
        </div>
      </section>



      {/* Banner Section */}
      <section className="section bg-white" style={{ paddingTop: '2rem', paddingBottom: '4rem' }} data-aos="fade-up">
        <div className="container" style={{ maxWidth: '1450px' }}>
          <div className="banner-cta home-banner-cta">
            {/* Overflow hidden wrapper just for background shapes */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: '24px', zIndex: 1 }}>
              <div style={{ position: 'absolute', bottom: '-40%', left: '5%', width: '80%', height: '60%', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', top: '0', right: '0', width: '25%', height: '100%', background: 'rgba(255,255,255,0.12)', borderTopLeftRadius: '80%' }}></div>
            </div>

            <div className="banner-cta-text">
              <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 4.8vw, 2.8rem)', fontWeight: '500', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', lineHeight: '1.2' }}>Take the First Step Towards Better Health</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '2rem' }}>Book an appointment now and connect with our expert doctors.</p>
              <button style={{ background: 'white', color: '#0D7C7C', padding: '0.875rem 1.75rem', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>Book Appointment</button>
            </div>
            {/* Scaled up image to pop out of the top */}
            <img src="/assets/bannercut.png" alt="Doctor" className="banner-cta-img" />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section bg-white" style={{ paddingTop: '4rem', paddingBottom: '6rem' }} data-aos="fade-up">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span style={{ color: '#0D7C7C', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>How It Works</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: "'Outfit', sans-serif", color: '#1B3C59', fontWeight: '700' }}>Simple Steps to Better Health</h2>
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
              { num: "01", title: "Contact Us", desc: "Call or WhatsApp us to schedule your visit.", icon: <Phone size={24} color="#0D7C7C" /> },
              { num: "02", title: "Visit Clinic", desc: "Walk into our modern, comfortable facility.", icon: <MapPin size={24} color="#0D7C7C" /> },
              { num: "03", title: "Consult Doctor", desc: "Meet with our experienced specialists.", icon: <Stethoscope size={24} color="#0D7C7C" /> },
              { num: "04", title: "Get Better", desc: "Follow advice and stay healthy.", icon: <Heart size={24} color="#0D7C7C" /> }
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
          
          <div className="text-center" style={{ marginTop: '5rem' }}>
            <a href="tel:+91963322149" style={{ display: 'inline-block', background: '#0D7C7C', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: '600', fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(13,124,124,0.3)', textDecoration: 'none' }}>Call to Schedule</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Redesign */}
      <section className="section bg-white" style={{ paddingBottom: '4rem' }} data-aos="fade-up">
        <div className="container">
          <div className="why-choose-us-grid">
            
            {/* Left Image Block */}
            <div className="why-choose-left-block" style={{ position: 'relative' }}>
              {/* Teal accent block behind the image */}
              <div className="why-choose-accent" style={{ position: 'absolute', background: '#0D7C7C', borderRadius: '24px', zIndex: 1 }}></div>
              
              <div className="why-choose-img-container" style={{ position: 'relative', zIndex: 2, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <img src="/assets/nurse_assisting_1786422015946.png" alt="Medical staff" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Wavy thin lines overlay at the bottom */}
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '150px', background: 'linear-gradient(to top, rgba(255,255,255,0.5), transparent)', zIndex: 3 }}>
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none" style={{ width: '100%', height: '100%', position: 'absolute', bottom: '0', opacity: '0.4' }}>
                    <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="white" strokeWidth="0.5" />
                    <path d="M0,15 Q25,25 50,15 T100,15" fill="none" stroke="white" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right Text Block */}
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', fontFamily: "'Outfit', sans-serif", fontWeight: '700', marginBottom: '2rem', lineHeight: '1.2' }}>
                <span style={{ color: '#0D7C7C' }}>Why Choose Us?</span> <br/>
                <span style={{ color: '#1E293B' }}>Your Health, Our Priority</span>
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: <User size={20} color="#0D7C7C" />, title: "Expert Doctors", subtitle: "Highly qualified specialists" },
                  { icon: <Shield size={20} color="#0D7C7C" />, title: "Patient First", subtitle: "Compassionate care approach" },
                  { icon: <Activity size={20} color="#0D7C7C" />, title: "Advanced Tech", subtitle: "Modern medical equipment" },
                  { icon: <Heart size={20} color="#0D7C7C" />, title: "Community Focused", subtitle: "Serving the neighborhood" }
                ].map((stat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '28px', height: '28px', background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', border: '1px solid rgba(13,124,124,0.2)' }}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="#0D7C7C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
                        <span style={{ fontWeight: '600', color: '#1E293B' }}>{stat.title}:</span> {stat.subtitle}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button style={{ background: '#0D7C7C', color: 'white', padding: '0.875rem 2rem', borderRadius: '6px', fontWeight: '600', fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(13,124,124,0.2)' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-white" style={{ paddingBottom: '4rem' }} data-aos="fade-up">
        <div className="container" style={{ maxWidth: '1450px' }}>
          <div className="banner-cta" style={{ 
            background: '#F1F5F9',
            position: 'relative', 
            padding: 'clamp(3rem, 8vw, 5rem) 2rem', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(13,124,124,0.15)'
          }}>
            {/* Overflow hidden wrapper just for background shapes */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: 'inherit', zIndex: 1 }}>
              <div style={{ position: 'absolute', bottom: '-40%', left: '5%', width: '80%', height: '60%', background: 'rgba(13,124,124,0.08)', borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', top: '0', right: '0', width: '25%', height: '100%', background: 'rgba(13,124,124,0.15)', borderTopLeftRadius: '80%' }}></div>
            </div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ color: '#0D7C7C', fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: '600', fontFamily: "'Outfit', sans-serif", marginBottom: '1rem', lineHeight: '1.2' }}>Ready to prioritize your health?</h2>
              <p style={{ color: '#475569', fontSize: 'clamp(1rem, 4vw, 1.15rem)', marginBottom: '2.5rem', fontWeight: '500', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>Walk in today or book an appointment to skip the queue. Our team is ready to provide you with the best care.</p>
              <a href="tel:+91963322149" style={{ background: '#0D7C7C', color: 'white', padding: 'clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2.5rem)', borderRadius: '8px', fontWeight: '700', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(13,124,124,0.3)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} /> Book Your Appointment Now
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>

    </div>
  );
};

export default Home;
