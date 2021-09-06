import { useEffect } from "react";
import { apiLogin} from "../../services";
import "./HomePage.scss";

export const HomePage = () => {
  useEffect(() => {
    apiLogin
      .login({ Email: "thao.nguyen@yoot.vn", Password: "123456789" })
      .then((res) => {
        const data: IResLogin = res.data;
        localStorage.setItem("token", data.Content.Token);
      });
  }, []);
  return (
    <div className="home-page">
      <h1>TEST AUTO DEPLOY</h1>
    </div>
  );
};
