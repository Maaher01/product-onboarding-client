import { Form, Formik } from "formik";
import "./RegisterForm.css";
import CustomInput from "../CustomInput/CustomInput";
import { registerFormSchema } from "../../schema";

const onSubmit = async (_values, actions) => {
	setTimeout(() => {
		actions.resetForm();
	});
};

const RegisterForm = () => (
	<Formik
		initialValues={{
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		}}
		validationSchema={registerFormSchema}
		onSubmit={onSubmit}
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
				<button disabled={isSubmitting} type="submit">
					Register
				</button>
			</Form>
		)}
	</Formik>
);

export default RegisterForm;
