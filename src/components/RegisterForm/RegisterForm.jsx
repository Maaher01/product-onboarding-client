import { Form, Formik } from "formik";
import "./RegisterForm.css";
import CustomInput from "../CustomInput/CustomInput";
import { registerFormSchema } from "../../schema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const handleClick = (event) => {
		event.preventDefault();
		navigate("/login");
	};

	const handleSubmit = async (values, actions) => {
		try {
			const response = await axios.post(
				"http://localhost:3000/api/auth/register",
				values
			);
			actions.resetForm();
			navigate("/login");
		} catch (error) {
			console.error("Registration failed:", error.response.data.error);
			setError(error.response.data.error);
			actions.setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
				phone: "",
			}}
			validationSchema={registerFormSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<CustomInput
						label="Name"
						type="text"
						name="name"
						placeholder="Enter your name"
					/>
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
					<CustomInput
						label="Confirm Password"
						type="password"
						name="confirmPassword"
						placeholder="Confirm your password"
					/>
					<CustomInput
						label="Phone Number"
						type="text"
						name="phone"
						placeholder="Enter your phone number"
					/>
					{error && (
						<p style={{ color: "red" }} className="error-message">
							{error}
						</p>
					)}
					<button disabled={isSubmitting} type="submit">
						{isSubmitting ? "Registering..." : "Register"}
					</button>
					<p className="small fw-bold mt-2 pt-1 mb-0">
						Already have an account?{" "}
						<span onClick={handleClick} className="link-danger">
							Login
						</span>
					</p>
				</Form>
			)}
		</Formik>
	);
};

export default RegisterForm;
