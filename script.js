// Common Functionality
document.addEventListener("DOMContentLoaded", function() {
  // Initialize based on current page
  const currentPage = getCurrentPage();
  
  if (currentPage === "login") {
    initLoginDashboard();
  } else if (currentPage === "search") {
    initSearchDashboard();
  } else if (currentPage === "build") {
    initBuildDashboard();
  }
});

function getCurrentPage() {
  // In a real implementation, this would determine the current page
  // For demo purposes, default to login
  const path = window.location.pathname;
  if (path.includes("search")) return "search";
  if (path.includes("build")) return "build";
  return "login";
}

// Login Dashboard Functionality
function initLoginDashboard() {
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const nextButton = document.getElementById("next-button");
  const loginButton = document.getElementById("login-button");
  const loginForm = document.querySelector(".login-form");
  const passwordForm = document.querySelector(".password-form");
  const recoveryOptions = document.querySelector(".recovery-options");
  const loginError = document.getElementById("login-error");
  const resetPasswordButton = document.getElementById("reset-password");
  const signUpButton = document.getElementById("sign-up");
  
  let attemptCount = 0;
  
  // Initialize responsive view buttons
  initResponsiveViewButtons();
  
  if (nextButton) {
    nextButton.addEventListener("click", function() {
      if (emailInput.value === "test@test.com") {
        loginForm.style.display = "none";
        passwordForm.style.display = "flex";
      } else {
        attemptCount++;
        handleFailedAttempt(loginError, emailInput, attemptCount);
      }
    });
  }
  
  if (loginButton) {
    loginButton.addEventListener("click", function() {
      if (passwordInput.value === "test") {
        // Successful login - redirect to search dashboard
        // In a real app, use proper routing or page navigation
        alert("Login successful! Redirecting..."); 
        // window.location.href = "search.html"; // Example redirection
      } else {
        attemptCount++;
        handleFailedAttempt(loginError, passwordInput, attemptCount);
        
        if (attemptCount >= 3) {
          passwordForm.style.display = "none";
          recoveryOptions.style.display = "flex";
        }
      }
    });
  }
  
  // Handle "Enter" key press
  if (emailInput) {
    emailInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        nextButton.click();
      }
    });
  }
  
  if (passwordInput) {
    passwordInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        loginButton.click();
      }
    });
  }
  
  // Recovery buttons
  if (resetPasswordButton) {
    resetPasswordButton.addEventListener("click", function() {
      alert("Password reset functionality would be implemented here.");
    });
  }
  
  if (signUpButton) {
    signUpButton.addEventListener("click", function() {
      alert("Sign up functionality would be implemented here.");
    });
  }
}

function handleFailedAttempt(errorElement, inputElement, attemptCount) {
  // Add error animation and message
  inputElement.classList.add("error-shake");
  errorElement.textContent = attemptCount === 1 ? "Invalid credentials. Try again." 
               : attemptCount === 2 ? "Second attempt failed. One more try." 
               : "Final attempt failed.";
  
  // Remove animation class after animation completes
  setTimeout(() => {
    inputElement.classList.remove("error-shake");
  }, 500);
  
  // Clear input field
  inputElement.value = "";
  
  // Update placeholder based on attempt
  if (attemptCount === 1) {
    inputElement.placeholder = "2nd attempt";
  } else if (attemptCount === 2) {
    inputElement.placeholder = "final attempt";
  }
}

function initResponsiveViewButtons() {
  const viewButtons = document.querySelectorAll(".view-button");
  const container = document.querySelector(".login-container"); // Adjust selector if needed

  viewButtons.forEach(button => {
    button.addEventListener("click", function() {
      const view = this.getAttribute("data-view");
      // Remove existing view classes
      container.classList.remove("web-view", "tablet-view", "iphone-view");
      
      // Add the new view class
      if (view === "tablet") {
        container.classList.add("tablet-view");
      } else if (view === "iphone") {
        container.classList.add("iphone-view");
      } else {
        container.classList.add("web-view");
      }
      
      // Update active button state (optional)
      viewButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      
      alert(`Switched to ${view} view (styling needs implementation)`);
    });
  });
}

// Search Dashboard Functionality
function initSearchDashboard() {
  const buildButtons = document.querySelectorAll(".build-it-button");
  const facebookButtons = document.querySelectorAll(".facebook-it-button");

  buildButtons.forEach(button => {
    button.addEventListener("click", function() {
      const businessId = this.getAttribute("data-business-id");
      alert(`Navigating to Build Dashboard for: ${businessId}`);
      // In a real app, navigate to the build page with the business ID
      // window.location.href = `build.html?business=${businessId}`;
    });
  });

  facebookButtons.forEach(button => {
    button.addEventListener("click", function() {
      const facebookPage = this.getAttribute("data-facebook-page");
      alert(`Fetching Facebook content for: ${facebookPage} (requires backend integration)`);
      // In a real app, trigger backend process to scrape Facebook content
    });
  });
}

// Build Dashboard Functionality
function initBuildDashboard() {
  const applyFacebookButton = document.querySelector(".apply-facebook-button");
  const templateItems = document.querySelectorAll(".template-item");
  const websitePreview = document.getElementById("template-preview");
  const colorSchemes = document.querySelectorAll(".color-scheme");

  if (applyFacebookButton) {
    applyFacebookButton.addEventListener("click", function() {
      alert("Applying Facebook content to template (requires implementation)");
      // Logic to parse Facebook data and update the active template
      // Example: Update hotel name, description, images, etc.
      const hotelNameElement = websitePreview.querySelector(".active-template .hotel-logo");
      const aboutTextElement = websitePreview.querySelector(".active-template .about-section p");
      const fbPageName = document.querySelector(".fb-page-name").textContent;
      const fbAboutText = document.querySelector(".facebook-about p").textContent;
      
      if(hotelNameElement) hotelNameElement.textContent = fbPageName;
      if(aboutTextElement) aboutTextElement.textContent = fbAboutText;
      // ... update other elements
    });
  }

  templateItems.forEach(item => {
    item.addEventListener("click", function() {
      const templateId = this.getAttribute("data-template");
      
      // Update active state for thumbnails
      templateItems.forEach(i => i.classList.remove("active"));
      this.classList.add("active");
      
      // Switch active template in preview
      const templates = websitePreview.querySelectorAll(".hotel-template");
      templates.forEach(template => {
        if (template.id === templateId) {
          template.classList.add("active-template");
        } else {
          template.classList.remove("active-template");
        }
      });
      alert(`Switched to ${this.querySelector(".template-name").textContent} template`);
    });
  });
  
  colorSchemes.forEach(scheme => {
    scheme.addEventListener("click", function() {
        const schemeName = this.getAttribute("data-scheme");
        // Update active state for color schemes
        colorSchemes.forEach(s => s.classList.remove("active"));
        this.classList.add("active");
        
        // Apply color scheme (requires CSS variables or class toggling)
        // Example: document.documentElement.setAttribute("data-color-scheme", schemeName);
        alert(`Applied ${schemeName} color scheme (styling needs implementation)`);
    });
  });
  
  // Add listeners for other editing tools (Text, Images, Actions)
  const saveButton = document.querySelector(".save-button");
  const publishButton = document.querySelector(".publish-button");
  
  if(saveButton) {
      saveButton.addEventListener("click", () => alert("Save functionality requires backend implementation."));
  }
  if(publishButton) {
      publishButton.addEventListener("click", () => alert("Publish functionality requires backend implementation."));
  }
}

