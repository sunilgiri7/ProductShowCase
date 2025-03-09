// Products data (same as before)
const products = [
    {
      id: 1,
      title: "ZP-5000 Diagnostic System",
      description: "Our flagship diagnostic system with 99.8% accuracy and comprehensive analytics capabilities.",
      price: 12499,
      image: "/api/placeholder/400/300",
      category: "diagnostic",
      badge: "Bestseller",
      features: [
        "High-precision sensors",
        "Real-time data analysis",
        "Cloud integration"
      ]
    },
    {
      id: 2,
      title: "ZP-3000 Compact System",
      description: "Portable diagnostic solution ideal for clinics and mobile healthcare units.",
      price: 8999,
      image: "/api/placeholder/400/300",
      category: "diagnostic",
      features: [
        "Lightweight design",
        "Battery operation",
        "Wireless connectivity"
      ]
    },
    {
      id: 3,
      title: "LabPro Analyzer",
      description: "Advanced laboratory analyzer with multi-sample processing capabilities.",
      price: 15750,
      image: "/api/placeholder/400/300",
      category: "laboratory",
      badge: "New",
      features: [
        "96-well capacity",
        "Automated processing",
        "Multiple test protocols"
      ]
    },
    {
      id: 4,
      title: "VitalTrack Monitor",
      description: "Comprehensive patient monitoring system for critical care environments.",
      price: 7499,
      image: "/api/placeholder/400/300",
      category: "monitoring",
      features: [
        "Multi-parameter tracking",
        "Alert system",
        "EHR integration"
      ]
    },
    {
      id: 5,
      title: "ImaginScan MRI",
      description: "High-resolution magnetic resonance imaging system with advanced image processing.",
      price: 189000,
      image: "/api/placeholder/400/300",
      category: "imaging",
      features: [
        "3T magnet strength",
        "Rapid scan technology",
        "AI-enhanced imaging"
      ]
    },
    {
      id: 6,
      title: "QuickScan Portable X-Ray",
      description: "Mobile X-ray solution for bedside and field diagnostics with digital imaging.",
      price: 42500,
      image: "/api/placeholder/400/300",
      category: "imaging",
      features: [
        "Lightweight design",
        "Digital image capture",
        "Low radiation dose"
      ]
    },
    {
      id: 7,
      title: "CellView Microscope",
      description: "Digital microscopy system with automated cell identification and counting.",
      price: 32999,
      image: "/api/placeholder/400/300",
      category: "laboratory",
      badge: "Popular",
      features: [
        "1000x magnification",
        "Automated stage",
        "Image analysis software"
      ]
    },
    {
      id: 8,
      title: "BioSequence Analyzer",
      description: "Next-generation DNA sequencing platform for clinical and research applications.",
      price: 78500,
      image: "/api/placeholder/400/300",
      category: "laboratory",
      features: [
        "High-throughput processing",
        "Multi-sample capability",
        "Advanced data analytics"
      ]
    },
    {
      id: 9,
      title: "CardioMonitor Pro",
      description: "Advanced cardiac monitoring system with predictive analytics for early intervention.",
      price: 18750,
      image: "/api/placeholder/400/300",
      category: "monitoring",
      features: [
        "Continuous monitoring",
        "Arrhythmia detection",
        "Remote monitoring capability"
      ]
    },
    {
      id: 10,
      title: "UltraScan 4D",
      description: "High-resolution 4D ultrasound system with advanced imaging capabilities.",
      price: 62999,
      image: "/api/placeholder/400/300",
      category: "imaging",
      badge: "Premium",
      features: [
        "Real-time 4D imaging",
        "Doppler technology",
        "AI-assisted diagnostics"
      ]
    },
    {
      id: 11,
      title: "LabStation Mini",
      description: "Compact laboratory workstation for small clinics and mobile healthcare units.",
      price: 23500,
      image: "/api/placeholder/400/300",
      category: "laboratory",
      features: [
        "Space-efficient design",
        "Multiple test capabilities",
        "Quick results processing"
      ]
    },
    {
      id: 12,
      title: "NeuraScan EEG",
      description: "Advanced electroencephalography system for neurological diagnostics and monitoring.",
      price: 45999,
      image: "/api/placeholder/400/300",
      category: "monitoring",
      features: [
        "128-channel recording",
        "Wireless sensors",
        "Pattern recognition software"
      ]
    }
  ];
  
  // Global variables for pagination
  const itemsPerPage = 8;
  let currentPage = 1;
  let filteredProducts = [...products];
  
  // Create product card HTML (adds a container that will be animated)
  function createProductCard(product) {
    return `
      <div class="product-card animate-on-scroll" data-category="${product.category}">
        <div class="product-img-container">
          <img src="${product.image}" alt="${product.title}" class="product-img">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-content">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-description">${product.description}</p>
          <ul class="product-features">
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <div class="product-actions">
            <a href="contact.html" class="btn btn-outline btn-sm">Request Quote</a>
          </div>
        </div>
      </div>
    `;
  }
  
  // Display products for current page
  function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    if (paginatedProducts.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <h3>No products found</h3>
          <p>Try selecting a different category or refining your search.</p>
        </div>
      `;
      return;
    }
    
    paginatedProducts.forEach(product => {
      productsGrid.innerHTML += createProductCard(product);
    });
    observeNewAnimations();
  }
  
  // Generate pagination controls
  function generatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';
    
    // Previous button
    paginationElement.innerHTML += `
      <div class="page-item ${currentPage === 1 ? 'disabled' : ''}" id="prevPage">←</div>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      paginationElement.innerHTML += `
        <div class="page-item ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</div>
      `;
    }
    
    // Next button
    paginationElement.innerHTML += `
      <div class="page-item ${currentPage === totalPages ? 'disabled' : ''}" id="nextPage">→</div>
    `;
    
    // Event listeners for page numbers
    document.querySelectorAll('.page-item[data-page]').forEach(item => {
      item.addEventListener('click', function() {
        currentPage = parseInt(this.getAttribute('data-page'));
        displayProducts();
        generatePagination();
      });
    });
    
    // Previous button
    document.getElementById('prevPage').addEventListener('click', function() {
      if (currentPage > 1) {
        currentPage--;
        displayProducts();
        generatePagination();
      }
    });
    
    // Next button
    document.getElementById('nextPage').addEventListener('click', function() {
      if (currentPage < totalPages) {
        currentPage++;
        displayProducts();
        generatePagination();
      }
    });
  }
  
  // Filter products by category
  function filterProductsByCategory(category) {
    if (category === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(product => product.category === category);
    }
    currentPage = 1;
    displayProducts();
    generatePagination();
  }
  
  // Observe new animate-on-scroll elements (e.g. newly loaded product cards)
  function observeNewAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  }
  
  // Initialize page
  document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    generatePagination();
    
    // Category tab functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        filterProductsByCategory(category);
      });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slider.alternative .slide');
    let currentSlide = 0;
    
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
  });
  