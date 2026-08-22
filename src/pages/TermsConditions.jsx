import React, { useEffect } from 'react';
import './About.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Banner (Same style as About page) */}
      <div className="about-hero-banner mb-12" style={{ background: 'url("/assets/terms.png") center/cover no-repeat' }}>
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div className="hero-banner-content">
            <h1 className="hero-title">Terms & <br /><span className="highlight-teal">Conditions</span></h1>
            <p className="hero-subtitle">Please read these terms carefully <br />before using our services.</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: '5rem', lineHeight: '1.8', color: '#475569' }}>
        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: '2rem' }}>
          By accessing and using the services provided by Aadithya Lyvin Health Hub, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>2. Medical Disclaimer</h2>
        <p style={{ marginBottom: '2rem' }}>
          The information provided on our website and through our services is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>3. Clinic Policies</h2>
        <p style={{ marginBottom: '2rem' }}>
          Patients are expected to arrive on time for their appointments. We reserve the right to reschedule appointments for late arrivals. Payment for services is due at the time of consultation or as otherwise agreed upon.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>4. Limitation of Liability</h2>
        <p style={{ marginBottom: '2rem' }}>
          To the fullest extent permitted by applicable law, Aadithya Lyvin Health Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
        </p>

        <h2 style={{ color: '#1B3C59', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use our services after changes become effective, you agree to be bound by the revised terms.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
