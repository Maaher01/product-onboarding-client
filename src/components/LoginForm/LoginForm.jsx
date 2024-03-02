import { Form, Formik } from "formik";
import "./LoginForm.css";
import CustomInput from "../CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";

const LoginForm = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleClick = (event) => {
		event.preventDefault();
		navigate("/register");
	};

	const handleSubmit = async (values, actions) => {
		try {
			const response = await axios.post(
				"http://localhost:3000/api/auth/login",
				values
			);
			const { token } = response.data;
			login(token);
			navigate("/");
		} catch (err) {
			console.error("Login failed:", err);
			setError(err.response.data.message);
			actions.setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<CustomInput
						label="Email"
						type="email"
						name="email"
						placeholder="Enter your email"
					/>
					<CustomInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
					/>
					{error && (
						<p style={{ color: "red" }} className="error-message">
							{error}
						</p>
					)}
					<button disabled={isSubmitting} type="submit">
						{isSubmitting ? "Logging in..." : "Login"}
					</button>
					<p className="small fw-bold mt-2 pt-1 mb-0">
						Don't have an account?{" "}
						<span onClick={handleClick} className="link-danger">
							Register
						</span>
					</p>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
