import { useNavigate } from "react-router-dom";

export const BottomWarning = ({ label, buttonText, to }) => {
    const navigate = useNavigate();

    return (
        <div className="mt-4">
            <p className="text-sm text-center text-[#293241]">
                {label}{" "}
                <span
                    onClick={() => navigate(to)}
                    className="text-[#ee6c4d] cursor-pointer">
                    {buttonText}
                </span>
            </p>
        </div>
    );
}
