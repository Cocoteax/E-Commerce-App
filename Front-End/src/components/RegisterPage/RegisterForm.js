import React, { useEffect, useState } from "react";
import styles from "./RegisterForm.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "../../store/auth-slice";
import { Link } from "react-router-dom";

function RegisterForm() {
	const isRegistering = useSelector((state) => state.authSlice.isRegistering);
	const isRegistered = useSelector((state) => state.authSlice.isRegistered);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	// useEffect to handle navigation to login page user successfully registers
	useEffect(() => {
		console.log(`isRegistered: ${isRegistered}`);
		if (!isRegistered) {
			return;
		}
		navigate("../");
	}, [isRegistered, navigate]);

	// useEffect to render toast messages based on isRegistered redux state
	useEffect(() => {
		if (isRegistered === null) {
			return;
		} else if (isRegistered === false) {
			// TODO: Store the error for registration into redux state, access the error state in this component, and toast that specific error
			// NOTE: Error can be retreived in the action thunk
			toast.error("Invalid credentials!");
			dispatch(authActions.setIsRegistered(null)); // Reset isRegistered state to prepare for the next toast message
		} else {
			toast.success("User successfully registered!");
			dispatch(authActions.setIsRegistered(null));
		}
	}, [isRegistered, dispatch]);

	// Function to valid inputs
	const validateName = (name) => {
		return name.trim() !== "";
	};
	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const validatePassword = (password) => {
		return password.trim() !== "" && password.trim().length >= 6;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			name: nameValue,
			email: emailValue,
			password: passwordValue,
		};
		// Reset form
		setNameValue("");
		setEmailValue("");
		setPasswordValue("");
		setNameHasError(true);
		setNameIsTouched(false);
		setEmailHasError(true);
		setEmailIsTouched(false);
		setPasswordHasError(true);
		setPasswordIsTouched(false);
		dispatch(registerUser(formData));
	};

	// Form validation
	const [nameIsTouched, setNameIsTouched] = useState(false);
	const [emailIsTouched, setEmailIsTouched] = useState(false);
	const [passwordIsTouched, setPasswordIsTouched] = useState(false);
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [nameHasError, setNameHasError] = useState(true);
	const [emailHasError, setEmailHasError] = useState(true);
	const [passwordHasError, setPasswordHasError] = useState(true);

	let nameIsValid = false;
	let emailIsValid = false;
	let passwordIsValid = false;
	let formIsValid = false;

	if (!emailHasError && !passwordHasError && !nameHasError) {
		formIsValid = true;
	}

	const nameChangeHandler = (e) => {
		setNameValue(e.target.value);
		nameIsValid = validateName(e.target.value);
		// The moment name is valid, update nameIsTouched to show feedback to user
		if (nameIsValid) {
			setNameIsTouched(true);
		}
		setNameHasError(!nameIsValid && nameIsTouched);
	};
	const emailChangeHandler = (e) => {
		setEmailValue(e.target.value);
		emailIsValid = validateEmail(e.target.value);
		// The moment email is valid, update emailIsTouched to show feedback to user
		if (emailIsValid) {
			setEmailIsTouched(true);
		}
		setEmailHasError(!emailIsValid && emailIsTouched);
	};
	const passwordChangeHandler = (e) => {
		setPasswordValue(e.target.value);
		passwordIsValid = validatePassword(e.target.value);
		// The moment password is valid, update passwordIsTouched to show feedback to user
		if (passwordIsValid) {
			setPasswordIsTouched(true);
		}
		setPasswordHasError(!passwordIsValid && passwordIsTouched);
	};

	const nameBlurHandler = () => {
		setNameIsTouched(true);
	};
	const emailBlurHandler = () => {
		setEmailIsTouched(true);
	};
	const passwordBlurHandler = () => {
		setPasswordIsTouched(true);
	};
	return (
		<section className="mt-5 mb-5">
			<Container fluid className={`${styles.container}`}>
				<Row className={`justify-content-center align-items-center`}>
					<Col lg={6} className={`text-center`}>
						<form className={``} onSubmit={handleSubmit}>
							<h2 className={`${styles.loginHeader} mb-4`}>REGISTER</h2>
							<div className={`mb-5 form-floating`}>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Enter name"
									value={nameValue}
									onChange={nameChangeHandler}
									onBlur={nameBlurHandler}
									className={`form-control rounded-1 ${styles.input} ${
										nameIsTouched
											? nameHasError
												? "is-invalid"
												: "is-valid"
											: ""
									}`}
								/>
								<label for="name" className={`${styles.label}`}>
									Name
								</label>
								<div className={`invalid-feedback text-start ms-2`}>
									Name must be at least 3 characters long
								</div>
								<div className={`valid-feedback text-start ms-2`}>
									Name is valid
								</div>
							</div>
							<div className={`mb-5 form-floating`}>
								<input
									type="text"
									id="email"
									name="email"
									placeholder="Enter email"
									value={emailValue}
									onChange={emailChangeHandler}
									onBlur={emailBlurHandler}
									className={`form-control rounded-1 ${styles.input} ${
										emailIsTouched
											? emailHasError
												? "is-invalid"
												: "is-valid"
											: ""
									}`}
								/>
								<label for="email" className={`${styles.label}`}>
									Email
								</label>
								<div className={`invalid-feedback text-start ms-2`}>
									Email is not valid
								</div>
								<div className={`valid-feedback text-start ms-2`}>
									Email is valid
								</div>
							</div>
							<div className={`mb-5 form-floating`}>
								<input
									type="password"
									id="password"
									name="password"
									value={passwordValue}
									onChange={passwordChangeHandler}
									onBlur={passwordBlurHandler}
									placeholder="Enter password"
									className={`form-control rounded-1 ${styles.input} ${
										passwordIsTouched
											? passwordHasError
												? "is-invalid"
												: "is-valid"
											: ""
									}`}
								/>
								<label for="password" className={`${styles.label}`}>
									Password
								</label>
								<div className={`invalid-feedback text-start ms-2`}>
									Password must be at least 6 characters long
								</div>
								<div className={`valid-feedback text-start ms-2`}>
									Password is valid
								</div>
							</div>
							<div className="d-grid mb-3">
								<button
									disabled={!formIsValid}
									type="submit"
									className={`btn ${styles.button}`}
								>
									REGISTER
								</button>
							</div>
							<div>
								Existing Customer?
								<Link to="../login" className={``}>
									<b> Login!</b>
								</Link>
							</div>
						</form>
					</Col>
				</Row>
			</Container>
			<h1>
				{isRegistering && (
					<div className="text-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</h1>
		</section>
	);
}

export default RegisterForm;
