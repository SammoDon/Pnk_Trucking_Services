import '../styling/Map.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import React, { useState, useEffect } from "react";

export default function Places({ setLocations, mapRef, dcenter, calculateDistance }) {
    const [formData, setFormData] = useState({
        name: "",
        contactNumber: "",
        email: "",
        pickupAddress: "",
        destinationAddress: "",
        distance: 0,
        cost: 0,
        type: "",
    });

    const [pickupCoords, setPickupCoords] = useState(null);
    const [destinationCoords, setDestinationCoords] = useState(null);
    const [activeField, setActiveField] = useState("");

    const adminContactNumber = "18764827707";

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: { country: "JM" },
        },
    });

    const calculateCost = (distance, type) => {
        const ratePerKm = type === "Residential" ? 2000 : 1600;
        const rawCost = distance * ratePerKm;
        return parseFloat(rawCost.toFixed(2));
    };

    const validateName = (name) => {
        return name.length > 0;
    };

    const validateContactNumber = (number) => {
        const phoneRegex = /^(\+1876)?\d{7}$/; // Validates Jamaican numbers starting with +1876
        return phoneRegex.test(number);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setValue(value); 
    };

    const handleSuggestionClick = async (field, description) => {
        try {
            const results = await getGeocode({ address: description });
            const coordinates = await getLatLng(results[0]);

            setFormData({ ...formData, [field]: description });

            if (field === "pickupAddress") {
                setPickupCoords(coordinates);
                setLocations((prev) => ({ ...prev, pickup: coordinates }));
                mapRef.current?.panTo(coordinates);
                mapRef.current?.setZoom(12);
            } else if (field === "destinationAddress") {
                setDestinationCoords(coordinates);
                setLocations((prev) => ({ ...prev, destination: coordinates }));
            }

            clearSuggestions();
            setActiveField("");
        } catch (error) {
            console.error("Error fetching geocode:", error);
        }
    };

    useEffect(() => {
        if (pickupCoords && destinationCoords && formData.type) {
            const distance = calculateDistance(pickupCoords, destinationCoords);
            const cost = calculateCost(distance, formData.type);

            setFormData((prev) => ({
                ...prev,
                distance,
                cost,
            }));
        }
    }, [pickupCoords, destinationCoords, formData.type]);

    const sendWhatsAppMessageToAdmin = (formData) => {
        const message = `
            *Invoice Details*
            ----------------------------
            *Name:* ${formData.name}
            *Contact:* ${formData.contactNumber}
            *Email:* ${formData.email || "N/A"}
            *Pickup Address:* ${formData.pickupAddress || "N/A"}
            *Destination Address:* ${formData.destinationAddress || "N/A"}
            *Distance:* ${formData.distance} km
            *Cost:* $${formData.cost.toFixed(2)}
            *Type:* ${formData.type || "N/A"}
            ----------------------------
        `;

        const encodedMessage = encodeURIComponent(message);

        const adminWhatsAppURL = `https://wa.me/${adminContactNumber}?text=${encodedMessage}`;

        window.open(adminWhatsAppURL, "_blank");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for each field
        if (!validateName(formData.name)) {
            alert("Please enter a valid name.");
            return;
        }

        if (!validateContactNumber(formData.contactNumber)) {
            alert("Please enter a valid Jamaican contact number.");
            return;
        }

        if (formData.email && !validateEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!pickupCoords || !destinationCoords || !formData.type) {
            alert("Please complete all required fields!");
            return;
        }

        sendWhatsAppMessageToAdmin(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                name="name"
                value={formData.name}
                onChange={handleFieldChange}
                placeholder="Name"
                className="form-input"
                required
            />
            <input
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleFieldChange}
                placeholder="Contact Number"
                className="form-input"
                required
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleFieldChange}
                placeholder="Email"
                className="form-input"
            />
            <div className="input-container">
                <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleFieldChange}
                    onFocus={() => setActiveField("pickupAddress")}
                    placeholder="Enter Pickup Address"
                    className="form-input"
                    required
                />
                {activeField === "pickupAddress" && status === "OK" && (
                    <ul className="suggestions-list">
                        {data.map(({ place_id, description }) => (
                            <li
                                key={place_id}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick("pickupAddress", description)}
                            >
                                {description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    name="destinationAddress"
                    value={formData.destinationAddress}
                    onChange={handleFieldChange}
                    onFocus={() => setActiveField("destinationAddress")}
                    placeholder="Enter Destination Address"
                    className="form-input"
                    required
                />
                {activeField === "destinationAddress" && status === "OK" && (
                    <ul className="suggestions-list">
                        {data.map(({ place_id, description }) => (
                            <li
                                key={place_id}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick("destinationAddress", description)}
                            >
                                {description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <select
                name="type"
                value={formData.type}
                onChange={handleFieldChange}
                className="form-input"
                required
            >
                <option value="">Select Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
            </select>
            <input
                name="cost"
                value={formData.cost ? `Estimated Cost: $${formData.cost.toFixed(2)}` : ""}
                placeholder="Estimated Cost"
                className="form-input"
                readOnly
            />
            <button type="submit" className="form-button">
                Submit & Send Invoice
            </button>
        </form>
    );
}
