// Products data (same as before)
const products = [
    {
      id: 1,
      title: "Aceclofenac",
      description:
        "A potent non-steroidal anti-inflammatory drug (NSAID) used to alleviate pain and inflammation in conditions such as osteoarthritis and rheumatoid arthritis.",
      price: 25,
      image: "images/product_images/aceclofenac.jpeg",
      category: "NSAID",
      features: [
        "Pain relief",
        "Reduces inflammation",
        "Improves joint mobility"
      ]
    },
    {
      id: 2,
      title: "Azithromycin",
      description:
        "A broad-spectrum macrolide antibiotic effective against various bacterial infections including respiratory, skin, and soft tissue infections.",
      price: 30,
      image: "images/product_images/azithromycin.jpeg",
      category: "Antibiotic",
      features: [
        "Broad-spectrum activity",
        "Once-daily dosing",
        "Well-tolerated"
      ]
    },
    {
      id: 3,
      title: "Ceftriaxone",
      description:
        "A third-generation cephalosporin antibiotic used to treat a wide range of bacterial infections such as pneumonia and meningitis.",
      price: 40,
      image: "images/product_images/caftriaxone.jpeg",
      category: "Antibiotic",
      features: [
        "Broad-spectrum cephalosporin",
        "Intravenous administration",
        "Effective against gram-negative bacteria"
      ]
    },
    {
      id: 4,
      title: "Cefpodoxime Proxetil",
      description:
        "An oral third-generation cephalosporin antibiotic ideal for treating respiratory and urinary tract infections.",
      price: 35,
      image: "images/product_images/cefodoxime-proxetile.jpeg",
      category: "Antibiotic",
      features: [
        "Oral administration",
        "Broad-spectrum activity",
        "High bioavailability"
      ]
    },
    {
      id: 5,
      title: "Cefoperazone",
      description:
        "A third-generation cephalosporin antibiotic used in the treatment of various severe bacterial infections.",
      price: 45,
      image: "images/product_images/cefoperazone.jpeg",
      category: "Antibiotic",
      features: [
        "Effective against resistant bacteria",
        "Broad-spectrum coverage",
        "Parenteral formulation"
      ]
    },
    {
      id: 6,
      title: "Cefpodoxime",
      description:
        "A cephalosporin antibiotic used for treating respiratory and skin infections, available in an oral formulation.",
      price: 30,
      image: "images/product_images/cefpodoxime.jpeg",
      category: "Antibiotic",
      features: [
        "Oral cephalosporin",
        "Well-tolerated",
        "Effective for mild to moderate infections"
      ]
    },
    {
      id: 7,
      title: "Ceftriaxone & Sulbactam",
      description:
        "A combination antibiotic that pairs ceftriaxone with sulbactam, a beta-lactamase inhibitor, to broaden its spectrum of activity.",
      price: 50,
      image: "images/product_images/ceftriaxone&sulbactam.jpeg",
      category: "Antibiotic",
      features: [
        "Enhanced bacterial coverage",
        "Beta-lactamase inhibition",
        "Suitable for severe infections"
      ]
    },
    {
      id: 8,
      title: "Ceftriaxone",
      description:
        "A widely used third-generation cephalosporin for treating infections such as meningitis, pneumonia, and septicemia.",
      price: 40,
      image: "images/product_images/ceftriaxone.jpeg",
      category: "Antibiotic",
      features: [
        "High potency",
        "Parenteral administration",
        "Effective against gram-negative bacteria"
      ]
    },
    {
      id: 9,
      title: "Cyproheptadine",
      description:
        "An antihistamine used to relieve allergy symptoms and stimulate appetite in conditions associated with anorexia.",
      price: 15,
      image: "images/product_images/cyproheptadine.jpeg",
      category: "Antihistamine",
      features: [
        "Relieves allergy symptoms",
        "Appetite stimulant",
        "Mild sedative effects"
      ]
    },
    {
      id: 10,
      title: "Dextromethorphan",
      description:
        "A cough suppressant that acts on the brain to suppress the cough reflex, used in treating coughs associated with colds.",
      price: 10,
      image: "images/product_images/dextromethorphan.jpeg",
      category: "Antitussive",
      features: [
        "Suppresses cough reflex",
        "Non-narcotic",
        "Fast-acting relief"
      ]
    },
    {
        id: 11,
        title: "Esomeprazole",
        description:
            "A proton pump inhibitor used to reduce stomach acid, effectively treating GERD and other acid-related disorders.",
        price: 20,
        image: "images/product_images/esomeprazole.jpeg",
        category: "Acid Reducer",
        features: [
            "Reduces stomach acid",
            "Relieves heartburn",
            "Improves digestive comfort"
        ]
        },
        {
        id: 12,
        title: "Esomeprazole Domperidone",
        description:
            "A combination therapy featuring a proton pump inhibitor and a prokinetic agent to manage acid reflux and enhance gastrointestinal motility.",
        price: 25,
        image: "images/product_images/esomeprazole-domperidone.jpeg",
        category: "Gastrointestinal",
        features: [
            "Dual-action formulation",
            "Reduces acid secretion",
            "Enhances GI motility"
        ]
        },
        {
        id: 13,
        title: "Levosalbutamol",
        description:
            "A bronchodilator that quickly relaxes airway muscles, providing rapid relief from bronchospasm in asthma and COPD.",
        price: 15,
        image: "images/product_images/levosalbutamol.jpeg",
        category: "Respiratory",
        features: [
            "Fast-acting relief",
            "Improves airflow",
            "Reduces bronchospasm"
        ]
        },
        {
        id: 14,
        title: "Mefenamic Acid",
        description:
            "A nonsteroidal anti-inflammatory drug (NSAID) used to relieve mild to moderate pain and reduce inflammation, especially effective for menstrual pain.",
        price: 10,
        image: "images/product_images/mefenamic.jpeg",
        category: "NSAID",
        features: [
            "Effective pain relief",
            "Anti-inflammatory properties",
            "Reduces menstrual discomfort"
        ]
        },
        {
        id: 15,
        title: "Mefzec",
        description:
            "A potent NSAID designed to alleviate pain and inflammation, suitable for various mild to moderate pain conditions.",
        price: 12,
        image: "images/product_images/mefzec.jpeg",
        category: "NSAID",
        features: [
            "Rapid pain relief",
            "Reduces inflammation",
            "Gentle on the stomach"
        ]
        },
        {
        id: 16,
        title: "Methylcobalamin",
        description:
            "An active form of vitamin B12 that supports nerve health and aids in red blood cell formation.",
        price: 8,
        image: "images/product_images/methylcobalamin.jpeg",
        category: "Vitamin",
        features: [
            "Supports nerve function",
            "Boosts energy levels",
            "Essential for blood health"
        ]
        },
        {
        id: 17,
        title: "Methylcobalamin Injection",
        description:
            "An injectable form of vitamin B12 for rapid correction of deficiency and improved nerve function.",
        price: 15,
        image: "images/product_images/methylcobalamin-injection.jpeg",
        category: "Vitamin Injection",
        features: [
            "Quick absorption",
            "Effective B12 delivery",
            "Supports nerve health"
        ]
        },
        {
        id: 18,
        title: "ZCID Plus",
        description:
            "A combination remedy formulated to alleviate common cold and flu symptoms including fever, congestion, and body aches.",
        price: 18,
        image: "images/product_images/zcid-plus.jpeg",
        category: "Cold & Flu",
        features: [
            "Multi-symptom relief",
            "Fast-acting formula",
            "Combination therapy"
        ]
        },
        {
        id: 19,
        title: "Zecrelief",
        description:
            "A topical analgesic designed to provide fast relief from muscular and joint pain with added anti-inflammatory benefits.",
        price: 20,
        image: "images/product_images/zecrelief.jpeg",
        category: "Pain Relief",
        features: [
            "Topical application",
            "Fast-acting relief",
            "Reduces inflammation"
        ]
        },
        {
        id: 20,
        title: "Zectavit",
        description:
            "A multivitamin supplement enriched with essential nutrients to support overall health, boost energy, and enhance immunity.",
        price: 22,
        image: "images/product_images/zectavit.jpeg",
        category: "Supplement",
        features: [
            "Boosts immunity",
            "Enhances energy",
            "Daily nutritional support"
        ]
        },
        {
            id: 21,
            title: "Zemicobal",
            description:
              "A comprehensive nutritional supplement containing methylcobalamin, alpha lipoic acid, folic acid, pyridoxine HCl, and vitamin D3. It supports nerve health, provides antioxidant protection, and promotes overall well-being.",
            price: 30,
            image: "images/product_images/zemicobal.jpeg",
            category: "Nutritional Supplement",
            features: [
              "Enhances nerve function",
              "Antioxidant support",
              "Supports bone health",
              "Helps manage neuropathy"
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
        <div class="product-img-container" onclick="openFullImage('${product.image}')">
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
  function openFullImage(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }
  document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
      closeModal();
    }
  });
    