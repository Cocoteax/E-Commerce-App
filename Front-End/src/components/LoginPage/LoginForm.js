import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "../../store/auth-slice";
import { Link } from "react-router-dom";

function LoginForm() {
	const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);
	const isAuthenticating = useSelector(
		(state) => state.authSlice.isAuthenticating
	);
	const isAuthenticated = useSelector(
		(state) => state.authSlice.isAuthenticated
	);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	// useEffect to handle navigation to home page when isLoggedIn state changes to true
	useEffect(() => {
		if (!isLoggedIn) {
			return;
		}
		navigate("../");
	}, [isLoggedIn, navigate]);

	// useEffect to render toast messages based on isAuthenticated redux state
	useEffect(() => {
		if (isAuthenticated === null) {
			return;
		} else if (isAuthenticated === false) {
			toast.error("Invalid Credentials!");
			dispatch(authActions.setIsAuthenticated(null)); // Reset isAuthenticated state to null to prepare for next toast message
		} else {
			toast.success("User logged in");
			dispatch(authActions.setIsAuthenticated(null)); // Reset isAuthenticated state to null to prepare for next toast message
		}
	}, [isAuthenticated, dispatch]);

	// Function to valid inputs
	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const validatePassword = (password) => {
		return password.trim() !== "" && password.trim().length >= 6;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			email: emailValue,
			password: passwordValue,
		};
		// Reset form
		setEmailValue("");
		setPasswordValue("");
		setEmailHasError(true);
		setEmailIsTouched(false);
		setPasswordHasError(true);
		setPasswordIsTouched(false);
		dispatch(loginUser(formData));
	};

	// Form validation
	const [emailIsTouched, setEmailIsTouched] = useState(false);
	const [passwordIsTouched, setPasswordIsTouched] = useState(false);
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [emailHasError, setEmailHasError] = useState(true);
	const [passwordHasError, setPasswordHasError] = useState(true);

	let emailIsValid = false;
	let passwordIsValid = false;
	let formIsValid = false;

	if (!emailHasError && !passwordHasError) {
		formIsValid = true;
	}

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
							<h2 className={`${styles.loginHeader} mb-4`}>LOGIN</h2>
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
									LOGIN
								</button>
							</div>
							<div>
								New Customer?{" "}
								<Link to="../register" className={``}>
									<b>Register!</b>
								</Link>
							</div>
						</form>
					</Col>
				</Row>
			</Container>
			<h1>
				{isAuthenticating && (
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

export default LoginForm;
