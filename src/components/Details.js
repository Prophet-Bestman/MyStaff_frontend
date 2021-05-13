import { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormDialog from "./FormDialog";

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

const Details = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { employee } = props;
	const [editOpen, setEditOpen] = useState(false);

	const classes = useStyles(employee);

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleEditOpen = () => {
		setEditOpen(true);
	};

	const handleCancel = () => {
		setEditOpen(false);
	};
	return (
		<div>
			<Box>
				<Card className={classes.root}>
					<CardHeader
						avatar={
							<Avatar aria-label="user" className={classes.avatar}>
								{employee.firstName.charAt(0).toUpperCase()}
							</Avatar>
						}
						action={
							<div>
								<IconButton
									aria-label="more"
									aria-controls="long-menu"
									aria-haspopup="true"
									onClick={handleClick}
								>
									<MoreVertIcon />
								</IconButton>
								<Menu
									id="long-menu"
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={handleEditOpen}>Edit Profile</MenuItem>
									<FormDialog
										handleCancel={handleCancel}
										employee={employee}
										editOpen={editOpen}
										setEditOpen={setEditOpen}
										align="center"
									/>
									<MenuItem onClick={handleClose}>My account</MenuItem>
									<MenuItem onClick={handleClose}>Logout</MenuItem>
								</Menu>
							</div>
						}
					/>
					<Typography
						// className={classes.title}
						color="secondary"
						gutterBottom
						variant="h4"
						className={classes.name}
						align="center"
					>
						{employee.firstName.toUpperCase()} {employee.lastName.toUpperCase()}
					</Typography>
					<Divider className={classes.divider} />

					<div className={classes.row}>
						{/* ===== Details ===== */}
						<Grid container spacing={3}>
							<Grid item xs={12} md={7}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle}
								>
									Department
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="body2">{employee.department}</Typography>
								</Paper>
							</Grid>
							<Grid item xs={12} md={5}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle2}
								>
									Position
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="subtitle1" className={classes.align}>
										{employee.position}
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</div>
					<div className={classes.row}>
						{/* ===== Details ===== */}
						<Grid container spacing={3}>
							<Grid item xs={12} md={4}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle}
								>
									Level
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="body2">{employee.level}</Typography>
								</Paper>
							</Grid>
							<Grid item xs={12} md={8}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle2}
								>
									Salary
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography className={classes.align} variant="subtitle1">
										N{employee.salary}
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</div>

					<div className={classes.row}>
						{/* ===== Details ===== */}
						<Grid container spacing={3}>
							<Grid item xs={12} md={7}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle}
								>
									Nationality
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="body2">{employee.country}n</Typography>
								</Paper>
							</Grid>
							<Grid item xs={12} md={5}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle2}
								>
									State Of Origin
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="subtitle1" className={classes.align}>
										{employee.stateOfOrigin}
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</div>
					<div className={classes.row}>
						{/* ===== Details ===== */}
						<Grid container spacing={3}>
							<Grid item xs={12} md={6}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle}
								>
									Email
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="body2">{employee.email}</Typography>
								</Paper>
							</Grid>
							<Grid item xs={12} md={4}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle3}
								>
									Birthday
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography
										variant="subtitle1"
										className={classes.alignBirthday}
									>
										{employee.birthday}
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={12} md={2}>
								<Typography
									color="secondary"
									variant="body2"
									className={classes.subtitle2}
								>
									Age
								</Typography>
								<Paper
									variant="outlined"
									className={classes.paper}
									elevation={1}
								>
									<Typography variant="subtitle1" className={classes.align}>
										{employee.age}
									</Typography>
								</Paper>
							</Grid>
						</Grid>
					</div>

					{/* <CardActions></CardActions> */}
				</Card>
			</Box>
		</div>
	);
};

export default Details;
