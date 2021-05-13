import Details from "./components/Details";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./components/usefetch";
import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		minWidth: 275,
		padding: 16,
		paddingTop: 56,
	},

	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	name: {
		textDecoration: "",
	},
	divider: {
		marginBottom: 56,
		marginTop: 40,
	},
	paper: {
		height: 35,
		paddingInline: 12,
		paddingBlock: 8,
		backgroundColor: "#ffffff",
	},
	subtitle: {
		fontWeight: 600,
		marginBottom: 2,
	},
	subtitle2: {
		fontWeight: 600,
		marginBottom: 2,
		[theme.breakpoints.up("md")]: {
			textAlign: "right",
		},
	},
	subtitle3: {
		fontWeight: 600,
		marginBottom: 2,
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
		},
	},
	align: {
		[theme.breakpoints.up("md")]: {
			textAlign: "right",
		},
	},
	alignBirthday: {
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
		},
	},
	row: {
		marginBottom: 30,
	},
}));

// Employee Details component (Page component)
const EmployeeDetails = () => {
	const classes = useStyles();

	const { id } = useParams();
	const [deleting, setDeleting] = useState(false);
	const [deleteError, setDeleteError] = useState(null);
	const history = useHistory();
	// const [anchorEl, setAnchorEl] = useState(null);
	// const open = Boolean(anchorEl);
	const theme = useTheme();

	const { data: employee, isPending, error } = useFetch(
		`http://localhost:5000/staff/${id}`
	);
	const handleDelete = () => {
		setDeleting(true);
		fetch(`http://localhost:5000/staff/${id}`, {
			method: "DELETE",
		})
			.then(() => {
				setDeleting(false);
				// console.log('employee deleted');
				history.push("/staff");
			})
			.catch((err) => {
				setDeleting(false);
				setDeleteError(err.message);
			});
	};

	// ======== Menu Button controls ========
	// const handleClick = (e) => {
	// 	setAnchorEl(e.currentTarget);
	// };

	// const handleClose = () => {
	// 	setAnchorEl(null);
	// };

	return (
		<div className="employee-details">
			{/* ======= Employee Loading ====== */}
			{isPending && (
				<Box>
					<Typography
						variant="h4"
						align="center"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							color: theme.palette.common.white,
						}}
					>
						This Employee is loading...
					</Typography>
				</Box>
			)}

			{/* ======= Error Loading Employee ====== */}
			{error && (
				<Box>
					<Typography
						variant="h4"
						align="center"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							color: theme.palette.common.white,
						}}
					>
						{error}
					</Typography>
				</Box>
			)}

			{/* ======= Error Deleting Employee ====== */}
			{deleteError && (
				<Box>
					<Typography
						variant="h4"
						align="center"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							color: theme.palette.common.white,
						}}
					>
						{deleteError}
					</Typography>
				</Box>
			)}

			{/* ============================
			INJECTING THE DETAILS COMPONENT AND PASSING THE EMPLOYEE OBJECT AS PROP
			=============================== */}
			{employee && <Details employee={employee} />}

			{/* ====== Delete button when it's not deleting ====== */}
			{!deleting && (
				<Button onClick={handleDelete} variant="contained" color="secondary">
					Delete
				</Button>
			)}

			{/* ============================
			Delete button when it's deleting 
			=============================== */}
			{deleting && (
				<Button disabled variant="contained" color="secondary">
					Deleting...
				</Button>
			)}
		</div>
	);
};

export default EmployeeDetails;
