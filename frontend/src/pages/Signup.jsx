import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-[#e0fbfc] h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e => setFirstName(e.target.value)} placeholder="John" label={"First Name"} />
                <InputBox onChange={e => setLastName(e.target.value)} placeholder="Doe" label={"Last Name"} />
                <InputBox onChange={e => setUsername(e.target.value)} placeholder="username@gmail.com" label={"Email"} />
                <InputBox onChange={e => setPassword(e.target.value)} placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post("https://pay-money-74mjboco0-nikhil-koshta-projects.vercel.app/api/v1/user/signup", {
                            firstName,
                            lastName,
                            username,
                            password
                        });
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                    }} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    );
}
