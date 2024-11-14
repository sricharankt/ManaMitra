// Service data (name, description, and image path)
const services = [
    { name: "Insurance - Life & Health", description: "Comprehensive coverage plans for your health and financial security.", image: "images/starhealth.jpg" },
    { name: "Real Estate - Plots & Flats", description: "Trusted real estate solutions for buying and selling properties.", image: "images/realestate.jpg" },
    { name: "Organic Products", description: "High-quality organic products for a healthy and sustainable lifestyle.", image: "images/organic.jpg" },
    { name: "Interiors", description: "Expert interior design services to transform your living spaces.", image: "images/interior.jpg" },
    { name: "Event Planners", description: "Professional event planning for memorable occasions and celebrations.", image: "images/event-planning.jpg" },
    { name: "Catering Services", description: "Delicious and diverse catering options for any event or gathering.", image: "images/catering-services.jpg" },
    { name: "Personal Development Skills & Training Programme", description: "Programs to enhance personal skills and foster professional growth.", image: "images/personal-development.jpg" },
    { name: "Astrology", description: "Accurate astrological insights to guide your personal and professional life.", image: "images/astrology.jpg" },
    { name: "Media Services", description: "Comprehensive media solutions across print, digital, and electronics.", image: "images/media-services.jpg" },
    { name: "Housekeeping Services", description: "Efficient cleaning services for both office and home environments.", image: "images/housekeeping.jpg" },
    { name: "Tours & Travel Arrangements", description: "Customized travel planning for a seamless and enjoyable experience.", image: "images/tours-travel.jpg" },
    { name: "Hospitality Services", description: "Exceptional hospitality services for events, guests, and accommodations.", image: "images/hospitality-services.jpg" }
];

// Function to dynamically generate service elements with images
function generateServices() {
    const serviceList = document.querySelector('.service-list');
    
    services.forEach(service => {
        // Create the service element with image
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        // Create image element
        const serviceImage = document.createElement('img');
        serviceImage.src = service.image;
        serviceImage.alt = service.name;
        serviceImage.classList.add('service-image');  // Add class for styling

        // Create text content for the service
        const serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.name;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        // Append the image, title, and description to the service element
        serviceElement.appendChild(serviceImage);
        serviceElement.appendChild(serviceTitle);
        serviceElement.appendChild(serviceDescription);

        // Append the service element to the service list
        serviceList.appendChild(serviceElement);
    });
}

// Call the function to generate the services
generateServices();
