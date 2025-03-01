import { useEffect } from "react";

const Servicesmodal = ({ service, onClose }) => {
    if (!service) return null;

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains("modal-area")) {
            onClose();
        }
    };

    return (
        <div className="modal-area" onClick={handleOutsideClick}>
            <div className="modal-bx">
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2>{service.name}</h2>
                <p>{service.longDescription}</p>
                <ul className="service-points">
                    {service.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Servicesmodal;