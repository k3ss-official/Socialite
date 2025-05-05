# SOCIALITE Project
Comprehensive Handover Documentation
## Table of Contents
  * [Handover Guide](https://zewamoku.genspark.space/#handover-guide)
  * [Crawl4AI Instructions](https://zewamoku.genspark.space/#crawl4ai-instructions)
  * [Project Overview](https://zewamoku.genspark.space/#project-overview)
  * [Project Components](https://zewamoku.genspark.space/#project-components)
    * [Login Dashboard](https://zewamoku.genspark.space/#login-dashboard)
    * [Search Dashboard](https://zewamoku.genspark.space/#search-dashboard)
    * [Build Dashboard](https://zewamoku.genspark.space/#build-dashboard)
    * [CSS Styles](https://zewamoku.genspark.space/#css-styles)
    * [JavaScript Functionality](https://zewamoku.genspark.space/#javascript-functionality)
  * [Implementation Instructions](https://zewamoku.genspark.space/#implementation-instructions)
    * [Google Places API Integration](https://zewamoku.genspark.space/#google-places-api)
    * [Facebook Scraping with Crawl4AI](https://zewamoku.genspark.space/#facebook-scraping)
    * [Deployment Guidelines](https://zewamoku.genspark.space/#deployment-guidelines)
  * [About Genspark.site](https://zewamoku.genspark.space/#about-genspark)
  * [Demo Links](https://zewamoku.genspark.space/#demo-links)


## Handover Guide
This document provides a comprehensive handover of the Socialite project, which is a business-in-a-box platform designed to help local businesses without websites get online quickly. The platform consists of three main dashboards: Login, Search, and Build.
This handover is specifically designed to be scraped by Crawl4AI, with clear section identifiers and properly formatted code snippets. All necessary components, from HTML structure to JavaScript functionality, are included.
### Handover Context
This project is being transferred to another MoE Operator (Manus) for continued development and implementation. The current state is an MVP demonstration with planned API integrations for Google Places and Facebook content scraping.
## Crawl4AI Instructions
To effectively extract all project components using Crawl4AI, follow these guidelines:
### Scraping Setup
Configure Crawl4AI with the following selectors to target specific content:
```
{
 "url": "https://[handover-page-url]",
 "selectors": {
  "projectOverview": "#project-overview",
  "loginDashboard": "#login-dashboard",
  "searchDashboard": "#search-dashboard",
  "buildDashboard": "#build-dashboard",
  "cssStyles": "#css-styles",
  "javascriptFunctionality": "#javascript-functionality",
  "googlePlacesAPI": "#google-places-api",
  "facebookScraping": "#facebook-scraping",
  "deploymentGuidelines": "#deployment-guidelines"
 },
 "includeHtml": true,
 "includeText": true,
 "depth": 1
}
```
Copy
### Extracting Code Snippets
All code blocks are contained within elements with the class `code-block`. You can extract these specifically with:
```
{
 "selectors": {
  "codeSnippets": ".code-block pre code"
 }
}
```
Copy
### File Extraction Order
For efficient project reconstruction, extract files in this order:
  1. HTML structure (Login, Search, Build dashboards)
  2. CSS styles
  3. JavaScript functionality
  4. API integration code
  5. Implementation instructions


## Project Overview
### Concept
Socialite is a business-in-a-box platform designed to help local businesses without websites get online quickly. It leverages AI-powered site generation and a modular dashboard approach to build and manage websites, with a recurring revenue model from hosting, maintenance, and digital marketing upsells.
### Current State of Development
The project currently consists of a working MVP with three main dashboards:
  * **Login Dashboard:** User authentication with email/password
  * **Search Dashboard:** Displays businesses without websites with "Build It" and "Facebook It" buttons
  * **Build Dashboard:** Website template editor with template switching and Facebook content integration


The front-end functionality is implemented and demonstratable, with plans to integrate real API data.
### Project Goals and Objectives
  * Help small businesses establish an online presence quickly and affordably
  * Leverage existing Facebook content to populate website templates
  * Provide a streamlined, three-step process: Search → Build → Manage
  * Generate recurring revenue through hosting and add-on services
  * Create a scalable platform that can be expanded with additional templates and features


### Target Audience and Use Cases
**Primary Users:** Digital agencies and marketing consultants looking to offer website creation services to small businesses
**End Clients:** Small to medium-sized local businesses without websites, particularly:
  * Hotels and accommodations
  * Restaurants and cafes
  * Service businesses (plumbers, electricians, etc.)
  * Local retail shops
  * Professional services (lawyers, accountants, etc.)


**Key Use Cases:**
  1. Agencies finding local businesses without websites
  2. Quick website creation using existing Facebook content
  3. Template-based website customization
  4. Ongoing website management and upselling additional services


## Project Components
### Login Dashboard
The login dashboard provides user authentication with a clean, minimal interface. It features a three-attempt login system with visual feedback for incorrect credentials.
```
<!-- Login Dashboard HTML -->
<div class="login-container">
  <header>
    <h1 class="site-title">SOCIALITE</h1>
    <p class="site-subtitle">Let's Find Some Clients</p>
  </header>
  
  <div class="login-form-container">
    <div class="login-form">
      <input type="email" id="email-input" placeholder="enter email" class="login-input">
      <button id="next-button" class="login-button">Next</button>
    </div>
    
    <div class="login-error" id="login-error"></div>
    
    <div class="password-form" style="display: none;">
      <input type="password" id="password-input" placeholder="password" class="login-input">
      <button id="login-button" class="login-button">Enter</button>
    </div>
    
    <div class="recovery-options" style="display: none;">
      <button id="reset-password" class="recovery-button">Reset password</button>
      <button id="sign-up" class="recovery-button">Sign up</button>
    </div>
  </div>
  
  <div class="responsive-view-buttons">
    <button class="view-button" data-view="web">Web</button>
    <button class="view-button" data-view="tablet">Tablet</button>
    <button class="view-button" data-view="iphone">iPhone</button>
  </div>
</div>
```
Copy
### Search Dashboard
The search dashboard displays local businesses without websites, allowing users to search and filter results. Each result has "Build It" and "Facebook It" buttons where applicable.
```
<!-- Search Dashboard HTML -->
<div class="search-dashboard">
  <header class="dashboard-header">
    <h1 class="site-title">SOCIALITE</h1>
    <p class="site-subtitle">Let's Find Some Clients</p>
  </header>
  
  <div class="search-container">
    <div class="search-bar-container">
      <input type="text" class="search-input" placeholder="Search for local businesses...">
      <button class="search-button">Search</button>
    </div>
    
    <div class="search-results-container">
      <div class="search-result" data-has-facebook="true">
        <div class="result-info">
          <h3 class="result-title">Mountain View Hotel</h3>
          <p class="result-address">123 Lakeside, Pokhara, Nepal</p>
          <p class="result-phone">+977 61-123456</p>
        </div>
        <div class="result-actions">
          <button class="build-it-button" data-business-id="mountain-view-hotel">Build It</button>
          <button class="facebook-it-button" data-facebook-page="mountainviewhotel">Facebook It</button>
        </div>
      </div>
      
      <div class="search-result" data-has-facebook="false">
        <div class="result-info">
          <h3 class="result-title">Lakeside Café</h3>
          <p class="result-address">45 Lakeside Road, Pokhara, Nepal</p>
          <p class="result-phone">+977 61-789012</p>
        </div>
        <div class="result-actions">
          <button class="build-it-button" data-business-id="lakeside-cafe">Build It</button>
        </div>
      </div>
      
      <div class="search-result" data-has-facebook="true">
        <div class="result-info">
          <h3 class="result-title">Himalayan Spa Retreat</h3>
          <p class="result-address">78 Mountain View Road, Pokhara, Nepal</p>
          <p class="result-phone">+977 61-345678</p>
        </div>
        <div class="result-actions">
          <button class="build-it-button" data-business-id="himalayan-spa-retreat">Build It</button>
          <button class="facebook-it-button" data-facebook-page="himalayanspa">Facebook It</button>
        </div>
      </div>
      
      <div class="search-result" data-has-facebook="true">
        <div class="result-info">
          <h3 class="result-title">Annapurna Trekking Services</h3>
          <p class="result-address">122 Trekking Avenue, Pokhara, Nepal</p>
          <p class="result-phone">+977 61-234567</p>
        </div>
        <div class="result-actions">
          <button class="build-it-button" data-business-id="annapurna-trekking">Build It</button>
          <button class="facebook-it-button" data-facebook-page="annapurnatrekking">Facebook It</button>
        </div>
      </div>
      
      <div class="search-result" data-has-facebook="false">
        <div class="result-info">
          <h3 class="result-title">Lakeside Souvenirs</h3>
          <p class="result-address">56 Tourist Lane, Pokhara, Nepal</p>
          <p class="result-phone">+977 61-456789</p>
        </div>
        <div class="result-actions">
          <button class="build-it-button" data-business-id="lakeside-souvenirs">Build It</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
Copy
### Build Dashboard
The build dashboard provides a template-based website builder with Facebook content integration and template switching capabilities.
```
<!-- Build Dashboard HTML -->
<div class="build-dashboard">
  <header class="dashboard-header">
    <h1 class="site-title">SOCIALITE</h1>
    <p class="site-subtitle">Let's Build Some Cool Websites</p>
  </header>
  
  <div class="dashboard-container">
    <div class="editing-panel">
      <div class="editing-input-container">
        <input type="text" class="editing-input" placeholder="Describe what you want to change...">
        <button class="apply-edit-button">Apply</button>
      </div>
      
      <div class="facebook-content-panel">
        <h3 class="panel-title">Facebook Content</h3>
        <div class="facebook-profile">
          <img src="https://www.wildernesstravel.com/wp-content/uploads/2023/06/1-hotel-barahi-swimming-pool-exterior.jpg" alt="Facebook Profile" class="fb-profile-image">
          <div class="fb-profile-info">
            <p class="fb-page-name">Mountain View Hotel</p>
            <p class="fb-page-category">Hotel · Resort</p>
          </div>
        </div>
        
        <div class="facebook-about">
          <h4>About</h4>
          <p>Luxury hotel with stunning mountain views. Experience premium accommodation and exceptional service in the heart of Pokhara.</p>
        </div>
        
        <div class="facebook-posts">
          <h4>Recent Posts</h4>
          <div class="fb-post">
            <p>Special summer discount! Book now and get 20% off on all rooms. Limited time offer.</p>
          </div>
          <div class="fb-post">
            <p>New amenities in our premium suites. Check out our renovated rooms with mountain views.</p>
          </div>
        </div>
        
        <div class="facebook-contact">
          <h4>Contact Info</h4>
          <p>📞 +977 61-123456</p>
          <p>📧 info@mountainviewhotel.com</p>
          <p>🌐 Lakeside, Pokhara, Nepal</p>
        </div>
        
        <button class="apply-facebook-button">Apply Facebook Content</button>
      </div>
    </div>
    
    <div class="preview-container">
      <div class="website-preview" id="template-preview">
        <!-- Hotel Website Template - Mountain View -->
        <div class="hotel-template template-1 active-template" id="mountain-view-template">
          <header class="hotel-header">
            <div class="hotel-logo">Mountain View Hotel</div>
            <nav class="hotel-nav">
              <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Amenities</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </header>
          
          <div class="hero-section">
            <img src="https://www.wildernesstravel.com/wp-content/uploads/2023/06/1-hotel-barahi-swimming-pool-exterior.jpg" alt="Mountain View Hotel" class="hero-image">
            <div class="hero-overlay">
              <h1>Experience Luxury in the Heart of Pokhara</h1>
              <p>Stunning views, exceptional service, unforgettable memories</p>
              <button class="book-now-button">Book Now</button>
            </div>
          </div>
          
          <div class="booking-section">
            <div class="booking-form">
              <h2>Check Availability</h2>
              <div class="form-group">
                <label>Check In</label>
                <input type="date" class="booking-input">
              </div>
              <div class="form-group">
                <label>Check Out</label>
                <input type="date" class="booking-input">
              </div>
              <div class="form-group">
                <label>Guests</label>
                <select class="booking-input">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <button class="check-availability-button">Check Availability</button>
            </div>
          </div>
          
          <div class="amenities-section">
            <h2>Hotel Amenities</h2>
            <div class="amenities-grid">
              <div class="amenity">
                <i class="amenity-icon">🏊‍♂️</i>
                <h3>Swimming Pool</h3>
                <p>Enjoy our outdoor pool with stunning mountain views</p>
              </div>
              <div class="amenity">
                <i class="amenity-icon">🍽️</i>
                <h3>Restaurant</h3>
                <p>Taste local and international cuisine at our restaurant</p>
              </div>
              <div class="amenity">
                <i class="amenity-icon">💆‍♀️</i>
                <h3>Spa</h3>
                <p>Relax and rejuvenate with our spa services</p>
              </div>
              <div class="amenity">
                <i class="amenity-icon">🚘</i>
                <h3>Free Parking</h3>
                <p>Complimentary parking for all our guests</p>
              </div>
            </div>
          </div>
          
          <div class="about-section">
            <h2>About Mountain View Hotel</h2>
            <p>Nestled in the heart of Pokhara, Mountain View Hotel offers a perfect blend of luxury and comfort with breathtaking views of the Annapurna mountain range. Our prime location provides easy access to popular attractions while ensuring a peaceful retreat for our guests.</p>
            <p>With spacious rooms, top-notch amenities, and exceptional service, we strive to make your stay in Pokhara unforgettable. Whether you're visiting for business or leisure, our dedicated staff is committed to providing you with a memorable experience.</p>
          </div>
          
          <div class="testimonials-section">
            <h2>Guest Reviews</h2>
            <div class="testimonials-grid">
              <div class="testimonial">
                <div class="rating">★★★★★</div>
                <p>"Amazing hotel with stunning views. The staff was incredibly helpful and made our stay perfect."</p>
                <p class="testimonial-author">- Sarah J., United Kingdom</p>
              </div>
              <div class="testimonial">
                <div class="rating">★★★★★</div>
                <p>"Perfect location, excellent amenities, and the most comfortable beds! Will definitely return."</p>
                <p class="testimonial-author">- Michael T., Australia</p>
              </div>
              <div class="testimonial">
                <div class="rating">★★★★☆</div>
                <p>"Great value for money. The restaurant serves delicious food and the pool is fantastic."</p>
                <p class="testimonial-author">- Raj P., India</p>
              </div>
            </div>
          </div>
          
          <div class="contact-section">
            <h2>Contact Us</h2>
            <div class="contact-container">
              <div class="contact-info">
                <div class="contact-item">
                  <i class="contact-icon">📍</i>
                  <p>123 Lakeside, Pokhara, Nepal</p>
                </div>
                <div class="contact-item">
                  <i class="contact-icon">📞</i>
                  <p>+977 61-123456</p>
                </div>
                <div class="contact-item">
                  <i class="contact-icon">📧</i>
                  <p>info@mountainviewhotel.com</p>
                </div>
              </div>
              <div class="contact-map">
                <div class="map-placeholder">Google Map Integration</div>
              </div>
            </div>
          </div>
          
          <footer class="hotel-footer">
            <div class="footer-content">
              <div class="footer-logo">Mountain View Hotel</div>
              <div class="footer-social">
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">TripAdvisor</a>
              </div>
              <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Sitemap</a>
              </div>
            </div>
            <div class="footer-copyright">
              <p>© 2025 Mountain View Hotel. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
        
        <!-- Additional templates would be here, initially hidden -->
      </div>
    </div>
    
    <div class="editing-tools">
      <div class="tools-section">
        <h3 class="tools-title">Text Editing</h3>
        <button class="tool-button">Edit Headlines</button>
        <button class="tool-button">Edit Content</button>
        <button class="tool-button">Change Font</button>
      </div>
      
      <div class="tools-section">
        <h3 class="tools-title">Images</h3>
        <button class="tool-button">Replace Images</button>
        <button class="tool-button">Add Gallery</button>
        <button class="tool-button">Edit Hero Image</button>
      </div>
      
      <div class="tools-section">
        <h3 class="tools-title">Colors</h3>
        <div class="color-schemes">
          <div class="color-scheme active" data-scheme="default"></div>
          <div class="color-scheme" data-scheme="blue"></div>
          <div class="color-scheme" data-scheme="green"></div>
          <div class="color-scheme" data-scheme="red"></div>
          <div class="color-scheme" data-scheme="purple"></div>
        </div>
      </div>
      
      <div class="tools-section">
        <h3 class="tools-title">Actions</h3>
        <button class="action-button save-button">Save</button>
        <button class="action-button publish-button">Publish</button>
      </div>
    </div>
  </div>
  
  <div class="template-gallery">
    <h3 class="gallery-title">Choose a Template</h3>
    <div class="templates-container">
      <div class="template-item active" data-template="mountain-view-template">
        <img src="https://www.wildernesstravel.com/wp-content/uploads/2023/06/1-hotel-barahi-swimming-pool-exterior.jpg" alt="Mountain View Template" class="template-thumbnail">
        <p class="template-name">Mountain View</p>
      </div>
      <div class="template-item" data-template="lakeside-template">
        <img src="https://barahi.pokharahotelspage.com/data/Pics/OriginalPhoto/15423/1542371/1542371521/hotel-barahi-pokhara-pic-1.JPEG" alt="Lakeside Template" class="template-thumbnail">
        <p class="template-name">Lakeside</p>
      </div>
      <div class="template-item" data-template="luxury-template">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/29/33/70/35/hotel-barahi.jpg" alt="Luxury Template" class="template-thumbnail">
        <p class="template-name">Luxury</p>
      </div>
      <div class="template-item" data-template="modern-template">
        <img src="https://barahi.com/wp-content/themes/yootheme/cache/2c/barahi-blurred-2cd57e06.jpeg" alt="Modern Template" class="template-thumbnail">
        <p class="template-name">Modern</p>
      </div>
      <div class="template-item" data-template="boutique-template">
        <img src="https://pavo.elongstatic.com/i/Mobile720_720/nw_1sgjJ5uCdB6.jpg" alt="Boutique Template" class="template-thumbnail">
        <p class="template-name">Boutique</p>
      </div>
    </div>
  </div>
</div>
```
Copy
### CSS Styles
These styles define the appearance of all three dashboards, ensuring a consistent and professional look across the platform.
```
/* Common Styles */
:root {
  /* Login Dashboard - Greys and blacks */
  --login-bg-color: #f5f5f5;
  --login-text-color: #333333;
  --login-accent-color: #666666;
  --login-error-color: #ff3333;
  
  /* Search Dashboard - Coastal Blossom palette */
  --search-primary-color: #6FB3CE; /* Soft ocean blue */
  --search-secondary-color: #F9C6B5; /* Warm peach */
  --search-accent-color: #3A7A99; /* Deeper blue */
  --search-bg-color: #F8F9FA; /* Light background */
  --search-text-color: #333333;
  
  /* Build Dashboard - Dynamic Wave palette */
  --build-primary-color: #82C09A; /* Vibrant green */
  --build-secondary-color: #F8784D; /* Bold orange */
  --build-accent-color: #395B7F; /* Deep blue */
  --build-highlight-color: #FF7BAC; /* Vibrant pink */
  --build-bg-color: #F8F9FA; /* Light background */
  --build-text-color: #333333;
  
  /* Common */
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --border-radius: 8px;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}
/* Global Styles */
body {
  font-family: var(--font-family);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
  border: none;
  border-radius: var(--border-radius);
  transition: var(--transition);
}
input {
  border-radius: var(--border-radius);
  border: 1px solid #ddd;
  padding: 10px 15px;
  font-size: 16px;
  transition: var(--transition);
}
input:focus {
  outline: none;
  border-color: #999;
}
/* Login Dashboard Styles */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--login-bg-color);
  position: relative;
}
.site-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}
.site-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--login-accent-color);
}
.login-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 400px;
}
.login-form, .password-form {
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
}
.login-input {
  flex: 1;
  margin-right: 10px;
}
.login-button {
  background-color: var(--login-text-color);
  color: white;
  padding: 10px 20px;
}
.login-button:hover {
  background-color: #555;
}
.login-error {
  color: var(--login-error-color);
  font-size: 14px;
  margin-bottom: 1rem;
  min-height: 20px;
}
.recovery-options {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.recovery-button {
  background-color: white;
  color: var(--login-text-color);
  border: 1px solid #ddd;
  padding: 10px 15px;
  width: 48%;
}
.recovery-button:hover {
  background-color: #f5f5f5;
}
.responsive-view-buttons {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}
.view-button {
  background-color: var(--login-text-color);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
}
/* Search Dashboard Styles */
.search-dashboard {
  min-height: 100vh;
  background-color: var(--search-bg-color);
  padding: 2rem;
}
.dashboard-header {
  text-align: center;
  margin-bottom: 2rem;
}
.search-container {
  max-width: 1200px;
  margin: 0 auto;
}
.search-bar-container {
  display: flex;
  margin-bottom: 2rem;
}
.search-input {
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}
.search-button {
  background-color: var(--search-primary-color);
  color: white;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}
.search-button:hover {
  background-color: var(--search-accent-color);
}
.search-results-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 1.5rem;
}
.search-result {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: var(--transition);
}
.search-result:hover {
  box-shadow: var(--shadow-md);
}
.result-title {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--search-accent-color);
}
.result-address, .result-phone {
  margin: 0.25rem 0;
  color: var(--search-text-color);
  font-size: 0.9rem;
}
.result-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.build-it-button {
  background-color: var(--search-primary-color);
  color: white;
  padding: 8px 16px;
}
.build-it-button:hover {
  background-color: var(--search-accent-color);
}
.facebook-it-button {
  background-color: #4267B2; /* Facebook blue */
  color: white;
  padding: 8px 16px;
}
.facebook-it-button:hover {
  background-color: #365899; /* Darker Facebook blue */
}
/* Build Dashboard Styles */
.build-dashboard {
  min-height: 100vh;
  background-color: var(--build-bg-color);
  padding: 2rem;
}
.dashboard-container {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}
.editing-panel {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
}
.editing-input-container {
  display: flex;
  margin-bottom: 1.5rem;
}
.editing-input {
  flex: 1;
  margin-right: 10px;
}
.apply-edit-button {
  background-color: var(--build-primary-color);
  color: white;
  padding: 8px 16px;
}
.apply-edit-button:hover {
  background-color: #6ba77f; /* Darker green */
}
.facebook-content-panel {
  margin-top: 1.5rem;
}
.panel-title {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--build-accent-color);
}
.facebook-profile {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.fb-profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}
.fb-page-name {
  font-weight: bold;
  margin: 0;
}
.fb-page-category {
  font-size: 0.8rem;
  color: #666;
  margin: 0;
}
.facebook-about, .facebook-posts, .facebook-contact {
  margin-bottom: 1rem;
}
.facebook-about h4, .facebook-posts h4, .facebook-contact h4 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--build-accent-color);
}
.fb-post {
  font-size: 0.85rem;
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: var(--border-radius);
  margin-bottom: 0.5rem;
}
.apply-facebook-button {
  background-color: var(--build-secondary-color);
  color: white;
  padding: 8px 16px;
  width: 100%;
  margin-top: 1rem;
}
.apply-facebook-button:hover {
  background-color: #e16c41; /* Darker orange */
}
.preview-container {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  overflow: auto;
}
.website-preview {
  border: 1px solid #ddd;
  min-height: 600px;
  overflow: auto;
}
.editing-tools {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
}
.tools-section {
  margin-bottom: 1.5rem;
}
.tools-title {
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--build-accent-color);
}
.tool-button {
  background-color: #f5f5f5;
  color: var(--build-text-color);
  padding: 8px 12px;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: left;
}
.tool-button:hover {
  background-color: #e9e9e9;
}
.color-schemes {
  display: flex;
  gap: 0.5rem;
}
.color-scheme {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
}
.color-scheme.active {
  border-color: var(--build-accent-color);
}
.color-scheme[data-scheme="default"] {
  background-color: var(--build-primary-color);
}
.color-scheme[data-scheme="blue"] {
  background-color: #4f9ec9;
}
.color-scheme[data-scheme="green"] {
  background-color: #5cb85c;
}
.color-scheme[data-scheme="red"] {
  background-color: #d9534f;
}
.color-scheme[data-scheme="purple"] {
  background-color: #9b59b6;
}
.action-button {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 0.5rem;
}
.save-button {
  background-color: var(--build-accent-color);
  color: white;
}
.save-button:hover {
  background-color: #2d4a68; /* Darker blue */
}
.publish-button {
  background-color: var(--build-secondary-color);
  color: white;
}
.publish-button:hover {
  background-color: #e16c41; /* Darker orange */
}
.template-gallery {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  margin-top: 1.5rem;
}
.gallery-title {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--build-accent-color);
}
.templates-container {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}
.template-item {
  flex: 0 0 auto;
  width: 150px;
  cursor: pointer;
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 2px solid transparent;
  transition: var(--transition);
}
.template-item.active {
  border-color: var(--build-secondary-color);
}
.template-item:hover {
  transform: translateY(-3px);
}
.template-thumbnail {
  width: 100%;
  height: 100px;
  object-fit: cover;
}
.template-name {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  text-align: center;
}
/* Hotel Website Template Styles */
.hotel-template {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}
.hotel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.hotel-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}
.hotel-nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.hotel-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}
.hotel-nav a:hover, .hotel-nav a.active {
  color: #4f9ec9;
}
.hero-section {
  position: relative;
  height: 500px;
  overflow: hidden;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 2rem;
}
.hero-overlay h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
.hero-overlay p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}
.book-now-button {
  background-color: #4f9ec9;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.book-now-button:hover {
  background-color: #3c8ab5;
}
.booking-section {
  padding: 2rem;
  background-color: #f8f9fa;
}
.booking-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.booking-form h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4f9ec9;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.booking-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.check-availability-button {
  width: 100%;
  background-color: #4f9ec9;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}
.check-availability-button:hover {
  background-color: #3c8ab5;
}
.amenities-section, .about-section, .testimonials-section, .contact-section {
  padding: 4rem 2rem;
}
.amenities-section h2, .about-section h2, .testimonials-section h2, .contact-section h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #333;
  font-size: 2.2rem;
}
.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.amenity {
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.amenity:hover {
  transform: translateY(-5px);
}
.amenity-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}
.amenity h3 {
  margin-bottom: 0.5rem;
  color: #4f9ec9;
}
.about-section {
  background-color: #f8f9fa;
  text-align: center;
}
.about-section p {
  max-width: 800px;
  margin: 0 auto 1.5rem;
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.testimonial {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.rating {
  color: gold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.testimonial-author {
  font-style: italic;
  margin-top: 1rem;
  text-align: right;
}
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
.contact-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #4f9ec9;
}
.map-placeholder {
  height: 300px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.hotel-footer {
  background-color: #333;
  color: white;
  padding: 3rem 2rem 1.5rem;
}
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
}
.footer-logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.social-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}
.social-link:hover {
  color: #4f9ec9;
}
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}
.footer-links a:hover {
  color: #4f9ec9;
}
.footer-copyright {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.9rem;
}
```
Copy
### JavaScript Functionality
The JavaScript code handles user interactions, form submissions, and dynamic content updates across all three dashboards.
```
// Common Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize based on current page
  const currentPage = getCurrentPage();
  
  if (currentPage === 'login') {
    initLoginDashboard();
  } else if (currentPage === 'search') {
    initSearchDashboard();
  } else if (currentPage === 'build') {
    initBuildDashboard();
  }
});
function getCurrentPage() {
  // In a real implementation, this would determine the current page
  // For demo purposes, default to login
  const path = window.location.pathname;
  if (path.includes('search')) return 'search';
  if (path.includes('build')) return 'build';
  return 'login';
}
// Login Dashboard Functionality
function initLoginDashboard() {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  const nextButton = document.getElementById('next-button');
  const loginButton = document.getElementById('login-button');
  const loginForm = document.querySelector('.login-form');
  const passwordForm = document.querySelector('.password-form');
  const recoveryOptions = document.querySelector('.recovery-options');
  const loginError = document.getElementById('login-error');
  const resetPasswordButton = document.getElementById('reset-password');
  const signUpButton = document.getElementById('sign-up');
  
  let attemptCount = 0;
  
  // Initialize responsive view buttons
  initResponsiveViewButtons();
  
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      if (emailInput.value === 'test@test.com') {
        loginForm.style.display = 'none';
        passwordForm.style.display = 'flex';
      } else {
        attemptCount++;
        handleFailedAttempt(loginError, emailInput, attemptCount);
      }
    });
  }
  
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      if (passwordInput.value === 'test') {
        // Successful login - redirect to search dashboard
        window.location.href = 'search.html';
      } else {
        attemptCount++;
        handleFailedAttempt(loginError, passwordInput, attemptCount);
        
        if (attemptCount >= 3) {
          passwordForm.style.display = 'none';
          recoveryOptions.style.display = 'flex';
        }
      }
    });
  }
  
  // Handle "Enter" key press
  if (emailInput) {
    emailInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        nextButton.click();
      }
    });
  }
  
  if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginButton.click();
      }
    });
  }
  
  // Recovery buttons
  if (resetPasswordButton) {
    resetPasswordButton.addEventListener('click', function() {
      alert('Password reset functionality would be implemented here.');
    });
  }
  
  if (signUpButton) {
    signUpButton.addEventListener('click', function() {
      alert('Sign up functionality would be implemented here.');
    });
  }
}
function handleFailedAttempt(errorElement, inputElement, attemptCount) {
  // Add error animation and message
  inputElement.classList.add('error-shake');
  errorElement.textContent = attemptCount === 1 ? 'Invalid credentials. Try again.' 
               : attemptCount === 2 ? 'Second attempt failed. One more try.' 
               : 'Final attempt failed.';
  
  // Remove animation class after animation completes
  setTimeout(() => {
    inputElement.classList.remove('error-shake');
  }, 500);
  
  // Clear input field
  inputElement.value = '';
  
  // Update placeholder based on attempt
  if (attemptCount === 1) {
    inputElement.placeholder = '2nd attempt';
  } else if (attemptCount === 2) {
    inputElement.placeholder = 'final attempt';
  }
}
function initResponsiveViewButtons() {
  const viewButtons = document.querySelectorAll('.view-button');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      const viewType = this.getAttribute('data-view');
      showResponsivePreview(viewType);
    });
  });
}
function showResponsivePreview(viewType) {
  // In a real implementation, this would show a responsive preview
  alert(`Showing ${viewType} preview. This would display how the site looks on a ${viewType} device.`);
}
// Search Dashboard Functionality
function initSearchDashboard() {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  const buildButtons = document.querySelectorAll('.build-it-button');
  const facebookButtons = document.querySelectorAll('.facebook-it-button');
  
  if (searchButton) {
    searchButton.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
  }
  
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch(this.value);
      }
    });
  }
  
  buildButtons.forEach(button => {
    button.addEventListener('click', function() {
      const businessId = this.getAttribute('data-business-id');
      navigateToBuildDashboard(businessId);
    });
  });
  
  facebookButtons.forEach(button => {
    button.addEventListener('click', function() {
      const facebookPage = this.getAttribute('data-facebook-page');
      scrapeFacebookPage(facebookPage);
    });
  });
}
function performSearch(query) {
  // In a real implementation, this would perform an API search
  console.log(`Searching for: ${query}`);
  // For demo purposes, just show a message
  alert(`Searching for businesses: ${query}`);
}
function navigateToBuildDashboard(businessId) {
  // In a real implementation, this would navigate to the build dashboard with the business ID
  console.log(`Navigating to build dashboard for: ${businessId}`);
  // For demo purposes, navigate to the build page
  window.location.href = 'build.html?business=' + businessId;
}
function scrapeFacebookPage(facebookPage) {
  // In a real implementation, this would use an API to scrape Facebook content
  console.log(`Scraping Facebook page: ${facebookPage}`);
  // For demo purposes, just show a message
  alert(`Scraping Facebook page: ${facebookPage}\nThis would extract content from the business's Facebook page.`);
}
// Build Dashboard Functionality
function initBuildDashboard() {
  const applyEditButton = document.querySelector('.apply-edit-button');
  const applyFacebookButton = document.querySelector('.apply-facebook-button');
  const saveButton = document.querySelector('.save-button');
  const publishButton = document.querySelector('.publish-button');
  const templateItems = document.querySelectorAll('.template-item');
  const colorSchemes = document.querySelectorAll('.color-scheme');
  const editingInput = document.querySelector('.editing-input');
  const toolButtons = document.querySelectorAll('.tool-button');
  
  // Get business ID from URL (in a real implementation)
  const businessId = getBusinessIdFromUrl();
  
  // Initialize the template with business data
  initializeTemplate(businessId);
  
  if (applyEditButton) {
    applyEditButton.addEventListener('click', function() {
      const editDescription = editingInput.value;
      applyEdit(editDescription);
    });
  }
  
  if (applyFacebookButton) {
    applyFacebookButton.addEventListener('click', function() {
      applyFacebookContent();
    });
  }
  
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      saveWebsite();
    });
  }
  
  if (publishButton) {
    publishButton.addEventListener('click', function() {
      publishWebsite();
    });
  }
  
  templateItems.forEach(item => {
    item.addEventListener('click', function() {
      const templateId = this.getAttribute('data-template');
      switchTemplate(templateId, this);
    });
  });
  
  colorSchemes.forEach(scheme => {
    scheme.addEventListener('click', function() {
      const schemeType = this.getAttribute('data-scheme');
      applyColorScheme(schemeType, this);
    });
  });
  
  toolButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent;
      handleToolButtonClick(buttonText);
    });
  });
  
  // Initialize website editor functionality
  initWebsiteEditor();
}
function getBusinessIdFromUrl() {
  // In a real implementation, this would extract the business ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('business') || 'mountain-view-hotel';
}
function initializeTemplate(businessId) {
  console.log(`Initializing template for business: ${businessId}`);
  // In a real implementation, this would load business data into the template
}
function applyEdit(editDescription) {
  // In a real implementation, this would apply the edit to the website
  console.log(`Applying edit: ${editDescription}`);
  alert(`Applying edit: ${editDescription}\nThis would update the website based on your description.`);
}
function applyFacebookContent() {
  // Add loading animation to the preview
  const preview = document.getElementById('template-preview');
  preview.classList.add('loading');
  
  // Simulate a loading delay
  setTimeout(() => {
    // In a real implementation, this would apply Facebook content to the template
    console.log('Applying Facebook content to template');
    
    // Update the template with Facebook content (for demo purposes)
    updateTemplateWithFacebookContent();
    
    // Remove loading animation
    preview.classList.remove('loading');
    
    // Show success message
    alert('Facebook content applied to template successfully!');
  }, 1500);
}
function updateTemplateWithFacebookContent() {
  // Update hotel name
  const hotelLogo = document.querySelector('.hotel-logo');
  if (hotelLogo) hotelLogo.textContent = 'Mountain View Hotel';
  
  // Update hero section
  const heroTitle = document.querySelector('.hero-overlay h1');
  if (heroTitle) heroTitle.textContent = 'Experience Luxury in the Heart of Pokhara';
  
  const heroDescription = document.querySelector('.hero-overlay p');
  if (heroDescription) heroDescription.textContent = 'Stunning views, exceptional service, unforgettable memories';
  
  // Update about section
  const aboutText = document.querySelector('.about-section p:first-of-type');
  if (aboutText) aboutText.textContent = 'Nestled in the heart of Pokhara, Mountain View Hotel offers a perfect blend of luxury and comfort with breathtaking views of the Annapurna mountain range. Our prime location provides easy access to popular attractions while ensuring a peaceful retreat for our guests.';
  
  // This would update more elements in a real implementation
}
function saveWebsite() {
  // In a real implementation, this would save the website
  console.log('Saving website');
  alert('Website saved successfully!');
}
function publishWebsite() {
  // In a real implementation, this would publish the website
  console.log('Publishing website');
  alert('Website published successfully!');
}
function switchTemplate(templateId, clickedItem) {
  // Mark the clicked template as active
  document.querySelectorAll('.template-item').forEach(item => {
    item.classList.remove('active');
  });
  clickedItem.classList.add('active');
  
  // In a real implementation, this would switch the website template
  console.log(`Switching to template: ${templateId}`);
  
  // For demo purposes, show the template change with an alert
  alert(`Switching to the ${clickedItem.querySelector('.template-name').textContent} template. This would completely change the website layout and design.`);
}
function applyColorScheme(schemeType, clickedScheme) {
  // Mark the clicked scheme as active
  document.querySelectorAll('.color-scheme').forEach(scheme => {
    scheme.classList.remove('active');
  });
  clickedScheme.classList.add('active');
  
  // In a real implementation, this would apply the color scheme
  console.log(`Applying color scheme: ${schemeType}`);
  alert(`Applying the ${schemeType} color scheme. This would update all colors on the website.`);
}
function handleToolButtonClick(toolName) {
  // In a real implementation, this would activate the selected tool
  console.log(`Activating tool: ${toolName}`);
  alert(`Activating the "${toolName}" tool. This would allow you to edit specific elements on the website.`);
}
function initWebsiteEditor() {
  // Make text elements editable on click
  const editableElements = document.querySelectorAll('.hotel-template h1, .hotel-template h2, .hotel-template h3, .hotel-template p');
  
  editableElements.forEach(element => {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
      makeElementEditable(this);
    });
  });
}
function makeElementEditable(element) {
  // Save original content
  const originalContent = element.textContent;
  
  // Make the element editable
  element.setAttribute('contenteditable', 'true');
  element.focus();
  
  // Add editing style
  element.classList.add('editing');
  
  // Handle blur event to save changes
  element.addEventListener('blur', function() {
    element.removeAttribute('contenteditable');
    element.classList.remove('editing');
  }, { once: true });
  
  // Handle Enter key to save changes
  element.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      element.blur();
    }
    
    // Handle Escape key to cancel changes
    if (e.key === 'Escape') {
      element.textContent = originalContent;
      element.blur();
    }
  });
}
```
Copy
## Implementation Instructions
### Google Places API Integration
To integrate the Google Places API for finding businesses without websites, follow these steps:
  1. Sign up for a Google Developer account and create a project
  2. Enable the Places API for your project
  3. Generate an API key with appropriate restrictions
  4. Implement the API in your search functionality


#### API Configuration
First, configure your Google Places API key:
```
// Initialize Google Places API
const googlePlacesAPI = {
  apiKey: 'YOUR_GOOGLE_API_KEY',
  baseUrl: 'https://maps.googleapis.com/maps/api/place',
  
  init: function() {
    // Load the Google Places library
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places&callback=googlePlacesAPI.onLoad`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
  
  onLoad: function() {
    console.log('Google Places API loaded');
    // Initialize your application here
  }
};
```
Copy
#### Search Implementation
Next, implement the search functionality with filtering for businesses without websites:
```
// Function to search for businesses without websites
function searchBusinessesWithoutWebsites(query, location, radius = 10000) {
  return new Promise((resolve, reject) => {
    // Create a PlacesService object
    const placesService = new google.maps.places.PlacesService(document.createElement('div'));
    
    // Define the search request
    const request = {
      query: query,
      fields: ['name', 'formatted_address', 'place_id', 'website', 'photos', 'formatted_phone_number'],
      locationBias: {
        center: location,
        radius: radius
      }
    };
    
    // Perform the search
    placesService.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Filter results to find places without websites
        const businessesWithoutWebsites = results.filter(place => !place.website);
        resolve(businessesWithoutWebsites);
      } else {
        reject(`Places API Error: ${status}`);
      }
    });
  });
}
// Example usage
async function findLocalBusinessesWithoutWebsites() {
  try {
    const query = 'hotels in Pokhara';
    const location = { lat: 28.2096, lng: 83.9856 }; // Pokhara coordinates
    
    const businesses = await searchBusinessesWithoutWebsites(query, location);
    console.log(`Found ${businesses.length} businesses without websites`);
    
    // Process and display the results
    displaySearchResults(businesses);
  } catch (error) {
    console.error('Error searching for businesses:', error);
  }
}
// Function to display search results
function displaySearchResults(businesses) {
  const resultsContainer = document.querySelector('.search-results-container');
  resultsContainer.innerHTML = ''; // Clear previous results
  
  businesses.forEach(business => {
    // Create a result element for each business
    const resultElement = document.createElement('div');
    resultElement.className = 'search-result';
    resultElement.setAttribute('data-has-facebook', 'true'); // This would be determined by checking Facebook
    
    // Populate the result with business information
    resultElement.innerHTML = `${business.name}${business.formatted_address}${business.formatted_phone_number || 'No phone number'}
      
      
        Build It
        ${business.hasFacebook ? 'Facebook It' : ''}`;
    
    // Add the result to the container
    resultsContainer.appendChild(resultElement);
  });
  
  // Add event listeners to new buttons
  document.querySelectorAll('.build-it-button').forEach(button => {
    button.addEventListener('click', function() {
      const businessId = this.getAttribute('data-business-id');
      navigateToBuildDashboard(businessId);
    });
  });
  
  document.querySelectorAll('.facebook-it-button').forEach(button => {
    button.addEventListener('click', function() {
      const facebookPage = this.getAttribute('data-facebook-page');
      scrapeFacebookPage(facebookPage);
    });
  });
}
```
Copy
### Facebook Scraping with Crawl4AI
To implement Facebook content scraping with Crawl4AI, follow these steps:
  1. Set up Crawl4AI for your project
  2. Configure selectors for Facebook page elements
  3. Create a mapping function for template fields
  4. Implement content application to templates


#### Crawl4AI Configuration
Configure Crawl4AI to scrape public Facebook content:
```
// Initialize Crawl4AI for Facebook scraping
const facebookScraper = {
  init: function() {
    // Load the Crawl4AI library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/crawl4ai@latest/dist/crawl4ai.min.js';
    script.onload = () => console.log('Crawl4AI loaded');
    document.head.appendChild(script);
  },
  
  // Function to scrape a Facebook page
  scrapeFacebookPage: async function(facebookPageUrl) {
    try {
      // Configure Crawl4AI for Facebook
      const crawlOptions = {
        url: facebookPageUrl,
        selectors: {
          // Basic business information
          name: '.x9f619.x1n2onr6.x1ja2u2z h1',
          category: '.x9f619.x1n2onr6.x1ja2u2z h2',
          profileImage: '.x1rg5ohu.x1n2onr6.x3ajldb img',
          coverPhoto: '.x1qjc9v5.x1q0q8m5.x1qhh985 img',
          
          // About section
          about: '[data-key="about_section"] .x1iorvi4 span',
          
          // Contact information
          address: '[data-key="about_section"] [data-sigil*="address"] span',
          phone: '[data-key="about_section"] [data-sigil*="phone"] span',
          email: '[data-key="about_section"] [data-sigil*="email"] span',
          website: '[data-key="about_section"] [data-sigil*="website"] span',
          
          // Posts
          posts: '[data-sigil="feed-story"]',
          postText: '.story_body_container div.story_body',
          postImages: '.story_body_container img',
          
          // Reviews
          reviews: '.recommendation',
          reviewText: '.recommendation .recommendationBody',
          reviewRating: '.recommendation .starRating',
          reviewAuthor: '.recommendation .recommendationActorName'
        },
        maxDepth: 1,
        imgDownload: true
      };
      
      // Execute the scrape
      const result = await crawl4ai.scrape(crawlOptions);
      console.log('Facebook scraping result:', result);
      
      // Process the scraped data
      return this.processFacebookData(result);
    } catch (error) {
      console.error('Error scraping Facebook page:', error);
      throw error;
    }
  },
  
  // Process the scraped Facebook data
  processFacebookData: function(scrapedData) {
    return {
      businessName: scrapedData.name || 'Business Name',
      category: scrapedData.category || 'Business',
      profileImage: scrapedData.profileImage || '',
      coverPhoto: scrapedData.coverPhoto || '',
      about: scrapedData.about || 'No description available',
      contactInfo: {
        address: scrapedData.address || '',
        phone: scrapedData.phone || '',
        email: scrapedData.email || '',
        website: scrapedData.website || ''
      },
      posts: Array.isArray(scrapedData.posts) 
        ? scrapedData.posts.map(post => ({
          text: post.postText || '',
          image: post.postImages && post.postImages.length > 0 ? post.postImages[0] : ''
        }))
        : [],
      reviews: Array.isArray(scrapedData.reviews)
        ? scrapedData.reviews.map(review => ({
          text: review.reviewText || '',
          rating: review.reviewRating || '5/5',
          author: review.reviewAuthor || 'Anonymous'
        }))
        : []
    };
  }
};
```
Copy
#### Mapping Content to Templates
Create a function to map Facebook content to your website templates:
```
// Function to apply Facebook content to templates
async function applyFacebookContentToTemplate(facebookPageUrl, templateId) {
  try {
    // Show loading indicator
    showLoadingIndicator();
    
    // Scrape Facebook page
    const facebookData = await facebookScraper.scrapeFacebookPage(facebookPageUrl);
    
    // Get the template elements
    const template = document.getElementById(templateId);
    
    // Map Facebook content to template elements
    mapContentToTemplate(template, facebookData);
    
    // Hide loading indicator
    hideLoadingIndicator();
    
    // Return success
    return { success: true, message: 'Facebook content applied successfully' };
  } catch (error) {
    // Hide loading indicator
    hideLoadingIndicator();
    
    // Return error
    return { success: false, message: error.message };
  }
}
// Function to map Facebook content to template elements
function mapContentToTemplate(template, facebookData) {
  // Map business name
  const nameElements = template.querySelectorAll('.hotel-logo, .footer-logo');
  nameElements.forEach(element => element.textContent = facebookData.businessName);
  
  // Map hero section
  const heroTitle = template.querySelector('.hero-overlay h1');
  if (heroTitle) {
    heroTitle.textContent = `Experience ${facebookData.businessName}`;
  }
  
  const heroDescription = template.querySelector('.hero-overlay p');
  if (heroDescription) {
    heroDescription.textContent = facebookData.about.slice(0, 100) + (facebookData.about.length > 100 ? '...' : '');
  }
  
  // Map about section
  const aboutText = template.querySelector('.about-section p');
  if (aboutText) {
    aboutText.textContent = facebookData.about;
  }
  
  // Map contact information
  const contactItems = template.querySelectorAll('.contact-item');
  if (contactItems.length > 0) {
    // Address
    const addressItem = contactItems[0].querySelector('p');
    if (addressItem) {
      addressItem.textContent = facebookData.contactInfo.address || addressItem.textContent;
    }
    
    // Phone
    const phoneItem = contactItems[1].querySelector('p');
    if (phoneItem) {
      phoneItem.textContent = facebookData.contactInfo.phone || phoneItem.textContent;
    }
    
    // Email
    const emailItem = contactItems[2].querySelector('p');
    if (emailItem) {
      emailItem.textContent = facebookData.contactInfo.email || emailItem.textContent;
    }
  }
  
  // Map images
  if (facebookData.coverPhoto) {
    const heroImage = template.querySelector('.hero-image');
    if (heroImage) {
      heroImage.src = facebookData.coverPhoto;
    }
  }
  
  if (facebookData.profileImage) {
    // Could be used for logo or other branding elements
  }
  
  // Map posts to testimonials or news sections
  const testimonials = template.querySelectorAll('.testimonial');
  if (testimonials.length > 0 && facebookData.posts.length > 0) {
    for (let i = 0; i < Math.min(testimonials.length, facebookData.posts.length); i++) {
      const post = facebookData.posts[i];
      const testimonial = testimonials[i];
      
      const testimonialText = testimonial.querySelector('p:not(.testimonial-author)');
      if (testimonialText) {
        testimonialText.textContent = post.text || testimonialText.textContent;
      }
    }
  }
  
  // Map reviews if available
  if (facebookData.reviews && facebookData.reviews.length > 0) {
    const testimonials = template.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
      for (let i = 0; i < Math.min(testimonials.length, facebookData.reviews.length); i++) {
        const review = facebookData.reviews[i];
        const testimonial = testimonials[i];
        
        const testimonialText = testimonial.querySelector('p:not(.testimonial-author)');
        if (testimonialText) {
          testimonialText.textContent = review.text || testimonialText.textContent;
        }
        
        const testimonialAuthor = testimonial.querySelector('.testimonial-author');
        if (testimonialAuthor) {
          testimonialAuthor.textContent = `- ${review.author}`;
        }
        
        const rating = testimonial.querySelector('.rating');
        if (rating) {
          // Convert rating to stars
          const stars = parseInt(review.rating) || 5;
          rating.textContent = '★'.repeat(stars) + '☆'.repeat(5 - stars);
        }
      }
    }
  }
}
```
Copy
### Deployment Guidelines
Follow these guidelines to deploy the Socialite platform:
#### 1. Environment Setup
  * Set up a web server (Node.js, Express, etc.)
  * Configure a database (MongoDB, PostgreSQL, etc.) for storing user data, templates, and websites
  * Implement authentication and authorization
  * Set up environment variables for API keys


#### 2. Frontend Deployment
  * Organize HTML, CSS, and JavaScript files
  * Implement a bundler (Webpack, Parcel, etc.) for production
  * Set up a CDN for static assets
  * Implement responsive design for all device sizes


#### 3. API Integration
  * Set up secure API endpoints for Google Places and Crawl4AI
  * Implement rate limiting and error handling
  * Create middleware for request validation
  * Configure CORS for client-server communication


#### 4. Static IP Configuration
For deployment on a cloud instance with static IP:
```
# Example Nginx configuration for Socialite
server {
  listen 80;
  server_name your-domain.com;
  
  # Redirect HTTP to HTTPS
  location / {
    return 301 https://$host$request_uri;
  }
}
server {
  listen 443 ssl;
  server_name your-domain.com;
  
  # SSL configuration
  ssl_certificate /path/to/cert.pem;
  ssl_certificate_key /path/to/key.pem;
  
  # Static files
  location / {
    root /path/to/socialite/public;
    try_files $uri $uri/ /index.html;
  }
  
  # API endpoints
  location /api/ {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```
Copy
#### 5. Security Considerations
  * Implement HTTPS for all connections
  * Secure API keys with environment variables
  * Implement proper authentication and authorization
  * Validate and sanitize all user inputs
  * Implement rate limiting for API requests
  * Regularly update dependencies


### Deployment Checklist
  1. Set up server environment
  2. Configure database connection
  3. Secure API keys and sensitive information
  4. Deploy frontend assets
  5. Configure web server and routing
  6. Set up SSL certificates
  7. Test deployment end-to-end
  8. Monitor for errors and performance issues


## About Genspark.site
### What is Genspark.site?
Genspark.site is a sandbox environment provided to AI assistants for creating and demonstrating HTML content. It allows AI to generate interactive web pages, demos, and prototypes that users can access via unique URLs.
### Capabilities
  * Creation of HTML, CSS, and JavaScript content
  * Generation of publicly accessible URLs
  * Support for interactive elements and user inputs
  * Ability to demonstrate concepts and designs


### Limitations
  * No direct API access for content extraction
  * No built-in download functionality for created assets
  * No programmatic access to retrieve source code
  * No direct integration with version control systems
  * Limited server-side functionality (primarily client-side)
  * No persistent storage or database connections


### Why Crawl4AI is Needed
Due to the limitations of genspark.site, Crawl4AI is necessary to extract content from the generated pages. Crawl4AI can efficiently scrape HTML, CSS, and JavaScript from the pages, making it possible to:
  * Extract complete source code from demo pages
  * Pull specific components using CSS selectors
  * Capture the structure and styling of the UI
  * Enable the transition from sandbox to development environment


### Navigating the Sandbox
When accessing genspark.site pages:
  * Use the browser's developer tools to inspect elements and source code
  * Right-click and "View Page Source" to see the HTML structure
  * Use the Network tab to inspect CSS and JavaScript resources
  * For extracting content, use Crawl4AI with specific selectors


### Important Note
Genspark.site pages have limited persistence. It's recommended to extract and save any important content as soon as possible to prevent potential loss of work.
## Demo Links
Below are links to all the Socialite demos created during development. Each link takes you to a different version of the platform, showing its evolution.
### Socialite MVP v1
Initial MVP with dark theme and purple accents.
**Login:** test/test
[View Demo](https://page.genspark.site/page/toolu_01BagA1CSf6xpkqnGQNGw44C/socialite_mvp_v1.html)
### Socialite Final Polished MVP
Refined version with improved UI and animations.
**Login:** test@test.com/test
[View Demo](https://page.genspark.site/page/toolu_017pM2nku2Uw1z7QPKNSyFYZ/socialite_final_polished_mvp.html)
### Socialite Complete Platform
Full flow implementation with all three dashboards.
**Login:** test@test.com/test
[View Demo](https://page.genspark.site/page/toolu_01U2ZuLuos4ReV3N7qkG8rYz/socialite_complete_platform.html)
### Socialite Fully Functional
Enhanced version with working template switching and Facebook integration.
**Login:** test@test.com/test
[View Demo](https://page.genspark.site/page/toolu_01QGpWAViJjAJR5JtVP264EJ/socialite_fully_functional.html)
### Socialite Dynamic Wave Build
Build dashboard with Dynamic Wave color palette.
**Login:** test@test.com/test
[View Demo](https://page.genspark.site/page/toolu_011JzTMbmbkpaCrCCeyjmzk6/socialite_dynamic_wave_build.html)
Socialite Project Handover Documentation
Created for project transfer to another MoE Operator
