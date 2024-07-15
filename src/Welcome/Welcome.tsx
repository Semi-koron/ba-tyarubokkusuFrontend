import type React from "react";
import "./welcome.css";
import Signup from "../SignupForm/Signup";
import Layout from "../layout";
import Login from "../LoginForm/Login";
import Tab from "../components/tab/Tab";
import mainCat from "../../public/main_Cat.png";

interface WelcomeProps {
	onLoginSubmit: (name: string, password: string) => void;
	onSignupSubmit: (name: string, password: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onLoginSubmit, onSignupSubmit }) => {
	return (
		<Layout>
			<div className="welcome-body">
				<h2>ばーちゃるぼっくす</h2>
				<Tab
					labels={["ろぐいん", "とうろく"]}
					contents={[
						<Login key="login" onSubmit={onLoginSubmit} />,
						<Signup key="signup" onSubmit={onSignupSubmit} />,
					]}
					id={""}
				/>
				<img
					src={mainCat}
					className="main-logo"
					alt="logo"
					width="124"
					height="124"
				/>
			</div>
		</Layout>
	);
};

export default Welcome;
