import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useTheme from "@material-ui/core/styles/useTheme";

const NotFound = () => {
	const theme = useTheme();
	return (
		<Box className="not-found">
			<Typography
				variant="h2"
				align="center"
				style={{
					marginBottom: "32px",
					fontWeight: 500,
					color: theme.palette.common.white,
				}}
			>
				Sorry !!!
			</Typography>
			<Typography
				variant="h6"
				align="center"
				style={{
					marginBottom: "32px",
					fontWeight: 500,
					color: theme.palette.common.white,
				}}
			>
				That page cannot be found
				<br />
				<Link to="/">Go Back To HomePage</Link>
			</Typography>
		</Box>
	);
};

export default NotFound;
