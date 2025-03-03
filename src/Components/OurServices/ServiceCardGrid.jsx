import React, { useState } from "react";
import Servicesmodal from "./Servicesmodal";
import './services.css'
const ServiceCardGrid = ({ services = [] }) => {
    const [selectedService, setSelectedService] = useState(null);

    const handleModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <div className="service-cards">
            {services.length > 0 ? (
                services.map((service, index) => {
                    return (
                        <div
                            className="service-card"
                            key={service.name || index}
                            onClick={() => handleModal(service)}
                            data-aos="fade-up"
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <div className="card-content">
                                <h3>{service.name}</h3>
                                <p>{service.shortDescription}</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p
                    className="no-services"
                    style={{ textAlign: "center", padding: "50px 0", width: "100%" }}
                >
                    No services available
                </p>
            )}
            {selectedService && (
                <Servicesmodal service={selectedService} onClose={closeModal} />
            )}
        </div>
    );
};

export default ServiceCardGrid;