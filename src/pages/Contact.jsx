import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Globe, ArrowRight, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page bg-offwhite" style={{ paddingTop: 0 }}>
      
      {/* Top Banner (Full Width) */}
      <div className="contact-hero-banner mb-12" style={{
        position: 'relative',
        width: '100%',
        minHeight: '80vh',
        background: 'url("/assets/contacthero.png") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '6rem'
      }}>
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div className="hero-banner-content">
            <h1 className="hero-title">Always Here<br/><span className="highlight-teal">To Help You</span></h1>
            <p className="hero-subtitle">Reach out to us for any questions, appointments, or medical assistance.</p>
          </div>
        </div>
      </div>

      <div className="container contact-container">

        {/* Main Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Info Cards */}
          <div className="contact-left-col">
            
            {/* Contact Numbers Card */}
            <div className="contact-card">
              <h3 className="contact-card-title">
                <Phone size={20} className="text-teal" style={{marginRight: '8px'}} /> Contact Numbers
              </h3>
              
              <a href="tel:+91963322149" className="contact-list-item">
                <div className="contact-list-left">
                  <Phone size={18} className="text-teal" />
                  <span className="contact-list-text">+91 963 322 2149</span>
                </div>
                <ArrowRight size={16} className="text-gray" />
              </a>

              <a href="https://wa.me/91963322143" className="contact-list-item" target="_blank" rel="noreferrer">
                <div className="contact-list-left">
                  <MessageCircle size={18} className="text-teal" />
                  <span className="contact-list-text">WhatsApp: +91 963 322 2143</span>
                </div>
                <ExternalLink size={16} className="text-gray" />
              </a>
            </div>

            {/* Clinic Details Card */}
            <div className="contact-card">
              <h3 className="contact-card-title">
                <MapPin size={20} className="text-teal" style={{marginRight: '8px'}} /> Clinic Details
              </h3>
              
              <div className="clinic-details-list">
                <div className="clinic-detail-item">
                  <Mail size={18} className="text-teal detail-icon" />
                  <div>
                    <div className="detail-label">Email</div>
                    <a href="mailto:lyvinhealthclinic@gmail.com" className="detail-value">lyvinhealthclinic@gmail.com</a>
                  </div>
                </div>

                <div className="clinic-detail-item">
                  <Globe size={18} className="text-teal detail-icon" />
                  <div>
                    <div className="detail-label">Website</div>
                    <a href="https://www.lyvinhealthhub.com" className="detail-value" target="_blank" rel="noreferrer">www.lyvinhealthhub.com</a>
                  </div>
                </div>

                <div className="clinic-detail-item">
                  <Clock size={18} className="text-teal detail-icon" />
                  <div>
                    <div className="detail-label">Clinic Hours</div>
                    <div className="detail-value">Mon - Sat: 8:00 AM - 8:00 PM<br/>Sun: 9:00 AM - 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="contact-right-col">
            <div className="contact-card form-card">
              <div className="form-header">
                <h2>Send an Enquiry</h2>
                <p>We usually respond within 24 hours.</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="How can we help you?" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-teal-solid btn-submit">Submit Enquiry</button>
              </form>
            </div>
          </div>

        </div>

        {/* Location Section */}
        <div className="location-section">
          <h3 className="location-title">Our Location</h3>
          <div className="map-container" style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21027.582307390658!2d76.30422441794849!3d10.005844826336048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1786604745166!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
            
            <div className="map-overlay-card">
              <div className="map-pin-icon-wrapper">
                <MapPin size={24} color="white" />
              </div>
              <div className="map-card-content">
                <h4>Aadithya Lyvin Health Hub</h4>
                <p>Kurkancheri, Thrissur, Kerala.</p>
                <a href="https://share.google/9CAtiXdCxMBPDfJbI" target="_blank" rel="noreferrer" className="btn btn-outline-teal btn-sm mt-2" style={{display: 'inline-block'}}>Get Directions</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
