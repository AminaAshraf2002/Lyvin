import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Globe, ArrowRight, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page bg-offwhite" style={{ paddingTop: 0 }}>
      
      {/* Top Banner (Full Width) */}
      <div className="about-hero-banner mb-12" style={{
        background: 'url("/assets/contacthero.png") center/cover no-repeat'
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-teal">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span className="contact-list-text">+91 963 322 2143</span>
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
