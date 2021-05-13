import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(16),
		flexBasis: "33.33%",
		flexGrow: 1,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(14),
		color: theme.palette.text.secondary,
	},
	link: {
		textDecoration: "none",
		padding: theme.spacing(1),
	},
	linkText: {
		fontWeight: 400,
		fontSize: "14px",
	},
	accordion: {
		margin: theme.spacing(2),
	},
}));

const StaffList = (props) => {
	const { staff, title } = props;
	// const staff = props.staff;
	// const title = props.title;

	const classes = useStyles();
	const theme = useTheme();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="employeeList">
			<Typography
				variant="h4"
				style={{
					marginBottom: "32px",
					fontWeight: 500,
					color: theme.palette.common.white,
				}}
			>
				{title}
			</Typography>
			{staff.map((employee) => (
				<div className="employee-preview" key={employee._id}>
					<Accordion
						className={classes.accordion}
						elevation={4}
						expanded={expanded === `panel${employee._id}`}
						onChange={handleChange(`panel${employee._id}`)}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							<Typography color="secondary" className={classes.heading}>
								{employee.firstName} {employee.lastName}
							</Typography>
							<Typography className={classes.secondaryHeading}>
								{employee.position}{" "}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
								feugiat. Aliquam eget maximus est, _id dignissim quam.
								<Link to={`staff/${employee._id}`} className={classes.link}>
									<Typography
										className={classes.linkText}
										color="secondary"
										variant="subtitle1"
									>
										See Employee Details
									</Typography>
								</Link>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			))}
		</div>
	);
};

export default StaffList;
