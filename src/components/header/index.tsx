import { Auth } from "./Auth";
import { Brand } from "./Brand";

const Header = () => {
	return (
		<header className="flex justify-between p-5 border-b-2">
			<Brand />
			<Auth />
		</header>
	);
};

export default Header;
