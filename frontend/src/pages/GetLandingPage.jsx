import { useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function GetLandingPage() {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/")
            .then(navigate('/signup'))
    }, [navigate]);
}
