import React, { useEffect } from 'react';
import './About.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Banner (Same style as About page) */}
      <div className="about-hero-banner mb-12" style={{ background: 'url("/assets/privacy.png") center/cover no-repeat' }}>
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div className="hero-banner-content">
            <h1 className="hero-title">Privacy <br /><span className="highlight-teal">Policy</span></h1>
            <p className="hero-subtitle">Your privacy is important to us. <br />Learn how we protect your data.</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: '5rem', lineHeight: '1.8', color: '#475569' }}>
        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '2rem' }}>
          We collect information to provide better healthcare services to all our patients. This may include personal information such as your name, contact details, medical history, and payment information when you register at our clinic.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>2. How We Use Information</h2>
        <p style={{ marginBottom: '2rem' }}>
          The information we collect is used solely for the purpose of providing you with medical care, managing your appointments, processing payments, and improving our services. We do not sell or share your personal data with third parties for marketing purposes.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>3. Data Security</h2>
        <p style={{ marginBottom: '2rem' }}>
          We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal and medical information. Our systems are designed with your privacy in mind.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>4. Your Rights</h2>
        <p style={{ marginBottom: '2rem' }}>
          You have the right to request access to the personal information we hold about you, to request corrections to that information, and to withdraw your consent for us to use your data (subject to legal and medical record-keeping requirements).
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our treatment of your personal data, please contact us at lyvinhealthclinic@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
