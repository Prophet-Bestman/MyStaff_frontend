import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		listItem: {
			padding: theme.spacing(3),
			borderBottom: "1px",
			borderBottomColor: "white",
			borderBottomWidth: "solid",
		},
	},

	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	linkText: {
		textDecoration: "none",
		width: "100%",
	},
	drawerCotainer: {
		background: "#180317",
		height: "100vh",
	},
	drawerIcon: {
		color: "#6a0dad",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
		color: "#f6f6f8",
		title: {
			fontWeight: 700,
		},
	},
}));

export default function Layout({ children }) {
	//   const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Box component="nav" className={classes.drawerCotaine}>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{[
						{
							itemName: "HOME",
							itemLink: "/",
							icon: <HomeIcon />,
						},
						{
							itemName: "ALL EMPLOYEES",
							itemLink: "/staff",
							icon: <PeopleIcon />,
						},
						{
							itemName: "NEW EMPLOYEE",
							itemLink: "/create",
							icon: <GroupAddIcon />,
						},
						{
							itemName: "ABOUT APP",
							itemLink: "/",
							icon: <InfoIcon />,
						},
						{
							itemName: "LOG OUT",
							itemLink: "/",
							icon: <ExitToAppIcon />,
						},
					].map((item) => (
						<Box style={{ padding: "12px" }}>
							<Link to={item.itemLink} className={classes.linkText}>
								<ListItem
									className={classes.listItem}
									button
									key={item.itemName}
									onClick={() => setMobileOpen(false)}
								>
									<ListItemIcon
										className={classes.drawerIcon}
										style={{
											color: "#6a0dad",
										}}
									>
										{item.icon}
									</ListItemIcon>
									<Typography variant="body1" color="secondary">
										{item.itemName}
									</Typography>
								</ListItem>
							</Link>
							<Divider />
						</Box>
					))}
				</List>
			</Box>
		</div>
	);

	//   const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Box component="nav" className={classes.drawerCotainer}>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							// color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerToggle}
						>
							<MenuIcon className={classes.menuButton} />
						</IconButton>
						<Typography
							variant="h5"
							style={{
								fontFamily: "Squada One",
								fontWeight: 900,
								fontSize: "2rem",
								color: "#f8f2ff",
							}}
							noWrap
						>
							MyStaff
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						// container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						color="primary"
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<div className={classes.content}>{children}</div>
		</div>
	);
}

Layout.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};
