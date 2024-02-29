import { Form, Formik } from "formik";
import "./LoginForm.css";
import CustomInput from "../CustomInput/CustomInput";

const onSubmit = async (_values, actions) => {
	setTimeout(() => {
		actions.resetForm();
	});
};

const LoginForm = () => (
	<Formik
		initialValues={{
			email: "",
			password: "",
		}}
		onSubmit={onSubmit}
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
				<button disabled={isSubmitting} type="submit">
					Login
				</button>
			</Form>
		)}
	</Formik>
);

export default LoginForm;
