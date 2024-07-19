import { PasswordInput } from "../components/ui/PasswordInput";
import { TextInput } from "../components/ui/TextInput";
import { WelcomeButton } from "../components/ui/WelcomeButton";
import { useState } from "react";
import LoginAnonymous from "./LoginAnonimos";
import styles from "./Login.module.css"

interface LoginProps {
	onSubmit: (name: string, password: string) => void;
	loginError: string | null;
}

const Login: React.FC<LoginProps> = ({ onSubmit ,loginError}) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(name, password);
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextInput
				label={"おなまえ"}
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<PasswordInput
				label={"おまじない"}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<WelcomeButton color="brown">あそびにいく</WelcomeButton>
			{loginError && <p className={styles.error}>{loginError}</p>}
			<LoginAnonymous />
		</form>
	);
};

export default Login;
