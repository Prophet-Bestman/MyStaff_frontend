import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import useTheme from "@material-ui/core/styles/useTheme";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(0),
			width: "100%",
		},
		field: {
			marginTop: 20,
			marginButton: 20,
			display: "block",
		},
	},
	header: {},
	title: {
		marginTop: "35%",
		color: "#f6f6f8",
		wordWrap: "break-word",
		fontWeight: 700,
		[theme.breakpoints.up("sm")]: {
			marginTop: "15%",
		},
		// zIndex: 1,
	},
}));

export default function Home() {
	// const theme = useTheme();
	// const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
	const classes = useStyles();
	return (
		<Box>
			<Typography className={classes.title} variant="h2">
				<Typed
					strings={[
						"WELCOME TO MYSTAFF",
						"MANAGE ALL YOUR EMPLOYEES",
						"BETTER ORGANIZE YOUR STAFFING SYSTEM",
					]}
					typeSpeed={60}
					backSpeed={30}
					// attr="placeholder"
					loop
				/>
			</Typography>
		</Box>
	);
}

// xs  - 0
// sm- 600px
// md- 960px
// lg - 1280px
// xl - 1920px
