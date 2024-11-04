import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";

export function GetLandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/user/`)
            .then(() => navigate('/signup'))
            .catch(error => console.error("Error in landing page:", error));
    }, [navigate]);
}
