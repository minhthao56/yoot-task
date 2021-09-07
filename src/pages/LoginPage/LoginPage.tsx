import { useFormik } from "formik";

import { Button, Input } from "../../components";
import { apiLogin } from "../../services";
import "./LoginPage.scss";

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
            window.location.replace("/");
          } else {
            alert(`${data.Message}`);
          }
        })
        .catch((err) => {
          alert(`${JSON.stringify(err)}`);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        placeholder="email"
        type="email"
        id="Email"
        name="Email"
        value={formik.values.Email}
        onChange={formik.handleChange}
        error={formik.touched.Email && formik.errors.Email}
      />
      <Input
        placeholder="password"
        type="password"
        id="Password"
        name="Password"
        value={formik.values.Password}
        onChange={formik.handleChange}
        error={formik.touched.Password && formik.errors.Password}
      />
      <Button type="submit" isCreate>
        Đăng nhập
      </Button>
    </form>
  );
};
