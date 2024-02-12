import { useParams } from "react-router-dom";

const UserProfile = () => {
	const value = useParams();
	console.log(value, "test");

	return (
		<div>
			<h1> wefwefwe{JSON.stringify(value)}</h1>
		</div>
	);
};

export default UserProfile;
