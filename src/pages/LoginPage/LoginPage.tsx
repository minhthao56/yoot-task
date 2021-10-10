import { useFormik } from "formik";
import * as Yup from 'yup';
import { MdEmail } from "react-icons/md";
import { IoIosUnlock } from "react-icons/io";
import { Button, Input } from "../../components";
import { apiLogin } from "../../services";
import "./LoginPage.scss";
import LogoLogin from '../../assets/images/logoYoot_small.png';

export const LoginPage = () => {
	const formik = useFormik({
		initialValues: {
		Email: "",
		Password: "",
		},
		onSubmit: (values) => {
		apiLogin
			.login(values)
			.then((res) => {
				const data = res.data as IResLogin;

				if (data.Result) {
					localStorage.setItem("token", data.Content.Token);
					localStorage.setItem("user", data.Content.UserInfo.Name);
					localStorage.setItem("email", data.Content.UserInfo.Email);
					window.location.replace("/");
				} else {
					alert(`${data.Message}`);
				}
			})
			.catch((err) => {
				// alert(`${JSON.stringify(err)}`);
				alert('Email hoặc mật khẩu không đúng. vui lòng nhập lại!!!');
			});
		},
		validationSchema: Yup.object({
			Password: Yup.string()
				.min(6,"Must be 6 characters or bigger")
				.max(32, 'Must be 32 characters or less')
				.required('Please input password'),
			Email: Yup.string().email('Invalid email address').required('Please input email'),
		  }),
	});


	return (
		<div className="login-page">
			<div className="login-page__header">
				<img src={LogoLogin} alt="" className="logo-login"/>
			</div>
			<div className="login-page__body">
				<div className="header-body">
					<h1 className="header-body__title">Chào bạn đến YOOT Task!</h1>
					<p className="header-body__text">Phần mềm quản lý dự án YOOT.</p>
				</div>
				<div className="main-body">
					<div className="main-body__form-login">
						<h3 className="main-body__form-login__title">Đăng nhập</h3>
						<form onSubmit={formik.handleSubmit}>
							<div className="input-group">
								<span className="icon"><MdEmail  className="icon-item"/></span>
								<Input
								placeholder="Email"
								type="email"
								id="Email"
								name="Email"
								value={formik.values.Email}
								onChange={formik.handleChange}
								error={formik.touched.Email && formik.errors.Email}
								/>
							</div>
							<div className="input-group">
							<span className="icon"><IoIosUnlock className="icon-item"/></span>

								<Input
								placeholder="Password"
								type="password"
								id="Password"
								name="Password"
								value={formik.values.Password}
								onChange={formik.handleChange}
								error={formik.touched.Password && formik.errors.Password}
								/>
							</div>
							<Button type="submit" isLogin className="btn-login">Đăng nhập</Button>
						</form>
					</div>
				</div>

			</div>

		</div>
	);
};
