import { Box, Button, Card, Typography } from "@material-ui/core";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// import Create from "@material-ui/";
import axios from "axios";

// Something
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "100%",
		},
		field: {
			marginTop: 20,
			marginButton: 20,
			display: "block",
		},
		formHead: {
			marginBottom: theme.spacing(5),
		},
	},
}));

const departments = [
	{
		value: "Department",
		label: "Department",
	},
	{
		value: "Management",
		label: "Management",
	},
	{
		value: "Operations",
		label: "Operations",
	},
	{
		value: "Publicity",
		label: "Publicity",
	},
	{
		value: "Content Development",
		label: "Content Development",
	},
	{
		value: "Sales",
		label: "Sales",
	},
	{
		value: "Marketing",
		label: "Marketing",
	},
	{
		value: "Logistics",
		label: "Logistics",
	},
	{
		value: "Tech/Development",
		label: "Tech/Development",
	},
];

const positions = [
	{
		value: "Position",
		label: "Position",
	},
	{
		value: "CEO",
		label: "CEO",
	},
	{
		value: "General Manager",
		label: "General Manager",
	},
	{
		value: "Publicist",
		label: "Publicist",
	},
	{
		value: "Content/Copy Writer",
		label: "Content/ Copy Writer",
	},
	{
		value: "Voice Over Artist",
		label: "Voice Over Artist",
	},
	{
		value: "Digital Strategist",
		label: "Digital Strategist",
	},
	{
		value: "Lead Developer",
		label: "Lead Developer",
	},
	{
		value: "Junior Developer",
		label: "Junior Developer",
	},
	{
		value: "Graphics Designer",
		label: "Graphics Designer",
	},
	{
		value: "Photographer",
		label: "Photographer",
	},
	{
		value: "Secretory",
		label: "Sevretory",
	},
];

const EditEmployee = (props) => {
	const { employee, handleCancel } = props;
	// const { id } = useParams();
	const [id, setId] = useState(employee._id);
	const [firstName, setFirstName] = useState(employee.firstName);
	const [lastName, setLastName] = useState(employee.lastName);
	// const [body, setBody] = useState('');
	const [email, setEmail] = useState(employee.email);
	const [level, setLevel] = useState(employee.level);
	const [salary, setSalary] = useState(employee.salary);
	const [birthday, setBirthday] = useState(employee.birthday);
	const [age, setAge] = useState(employee.age);
	const [position, setPosition] = useState(employee.position);
	const [country, setCountry] = useState(employee.country);
	const [stateOfOrigin, setStateOfOrigin] = useState(employee.stateOfOrigin);
	const [department, setDepartment] = useState(employee.department);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isEdited, setIsEdited] = useState(false);

	const handleSubmit = (e) => {
		setIsLoading(true);
		setError(null);
		e.preventDefault();
		const Employee = {
			firstName,
			lastName,
			email,
			age,
			country,
			stateOfOrigin,
			level,
			salary,
			birthday,
			position,
			department,
		};

		setTimeout(async () => {
			try {
				const res = await axios.patch(`http://localhost:5000/staff/${id}`, {
					Employee,
				});
				const data = await res.data;
				if (data) {
					// setId(data.id);
					console.log("Employee Details Edited");
					setIsLoading(false);
					setIsEdited(true);
					// history.push(`/staff/${id}`);
				}
			} catch (error) {
				setError("Failed to Edit Employee Details");
				setIsLoading(false);
				console.log(error.message);
			}
		}, 1000);
	};

	const classes = useStyles();

	return (
		<Box align="center" className="create">
			{isEdited && (
				<Box>
					<Typography
						variant="h2"
						align="center"
						color="secondary"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							// color: theme.palette.common.white,
						}}
					>
						Congratulations!
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="secondary"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							// color: theme.palette.common.white,
						}}
					>
						Your Employee has been Edited
					</Typography>

					<a href={`/staff/${id}`} onClick={handleCancel}>
						See Employee
					</a>
				</Box>
			)}
			{!isEdited && (
				<div className="add-page">
					{error && <h2>SORRY!!! {error} </h2>}
					<Typography
						variant="h4"
						className={classes.formHead}
						color="secondary"
						style={{
							marginBottom: "24px",
							marginTop: "24px",
							fontWeight: 500,
							// color: theme.palette.common.white,
						}}
					>
						EDIT EMPLOYEE
					</Typography>
					<Card elevation={12} style={{ padding: "32px" }}>
						<form
							onSubmit={handleSubmit}
							className={classes.root}
							noValidate
							autoComplete="off"
						>
							{/* ========= Employee's First Name ========== */}
							<TextField
								color="secondary"
								margin="dense"
								required
								className={classes.field}
								// id="outlined-required"s
								label="Employee's First Name"
								// defaultValue="FIrst Name"
								variant="outlined"
								type="text"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>

							{/* ========= Employee's Last Name ========= */}
							<TextField
								color="secondary"
								margin="dense"
								required
								className={classes.field}
								// id="outlined-required"s
								label="Employee's Last Name"
								// defaultValue="FIrst Name"
								variant="outlined"
								type="text"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>

							{/* ========= Employee's Email ========== */}
							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label="Employee's Email"
								variant="outlined"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>

							{/* ========= Employee's Age ========== */}

							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label="Employee's Age"
								variant="outlined"
								type="number"
								required
								value={age}
								onChange={(e) => setAge(e.target.value)}
							/>

							{/* ========= Employee's Country ========== */}

							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label="Employee's Country"
								// defaultValue="FIrst Name"
								variant="outlined"
								type="text"
								required
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>

							{/* ========= Employee's State Of Origin ========== */}
							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label="Employee's State Of Origin: "
								// defaultValue="FIrst Name"
								variant="outlined"
								type="text"
								required
								value={stateOfOrigin}
								onChange={(e) => setStateOfOrigin(e.target.value)}
							/>

							{/* ========= Employee's Department ========== */}
							<TextField
								id="department"
								margin="dense"
								select
								label="Select Department"
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
								required
								helperText="Please select Department"
								variant="outlined"
								color="secondary"
							>
								{departments.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>

							{/* ========= Employee's Position ========== */}
							<TextField
								id="position"
								margin="dense"
								select
								label="Select Position"
								value={position}
								onChange={(e) => setPosition(e.target.value)}
								required
								helperText="Please select Position"
								variant="outlined"
								color="secondary"
							>
								{positions.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>

							{/* ========= Employee's Birthday ========== */}
							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label=""
								// defaultValue="FIrst Name"
								helperText="Birthday"
								variant="outlined"
								type="date"
								required
								value={birthday}
								onChange={(e) => setBirthday(e.target.value)}
							/>

							{/* ========= Employee's Level ========== */}
							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label="Employee's Level "
								// defaultValue="FIrst Name"
								variant="outlined"
								type="number"
								required
								value={level}
								onChange={(e) => setLevel(e.target.value)}
							/>

							{/* ========= Employee's Email Level ========== */}
							<TextField
								color="secondary"
								margin="dense"
								className={classes.field}
								// id="outlined-required"s
								label="Employee's Salary "
								// defaultValue="FIrst Name"
								variant="outlined"
								type="number"
								required
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
							/>

							<Button
								variant="contained"
								disabled={isLoading}
								color="secondary"
								type="submit"
							>
								{isLoading ? "Editing Employee..." : "Edit Employee"}
							</Button>
						</form>
					</Card>
				</div>
			)}
		</Box>
	);
};

export default EditEmployee;
