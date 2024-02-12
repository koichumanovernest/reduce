// import {  Link, Route,  } from "react-router-dom";
import About from "../page/Layout/About";
import scss from "./LoginPage.module.scss";
// import Home from "../page/Home";

const LoginPage = () => {
	return (
		<div className={scss.login}>
			<div className={scss.input}>
        <h2>Registrasia</h2>
				<input type="text" placeholder="familia" />
				<input type="text" placeholder="imia" />
				<button>
					<a href={<About />}></a>vouti
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
