import { Box, Button, Card, Typography } from "@material-ui/core";
import { useState } from "react";
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import useTheme from "@material-ui/core/styles/useTheme";

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

const Create = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	// const [body, setBody] = useState('');
	const [email, setEmail] = useState("");
	const [level, setLevel] = useState(1);
	const [salary, setSalary] = useState(1);
	const [birthday, setBirthday] = useState(null);
	const [age, setAge] = useState(18);
	const [position, setPosition] = useState("Position");
	const [country, setCountry] = useState("");
	const [stateOfOrigin, setStateOfOrigin] = useState("");
	const [department, setDepartment] = useState("Department");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isAdded, setIsAdded] = useState(false);
	const history = useHistory();
	const theme = useTheme();

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
		setTimeout(() => {
			fetch("http://localhost:5000/staff", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Employee),
			})
				.then(() => {
					console.log("New Employee Added");
					setIsLoading(false);
					setIsAdded(true);
				})
				.catch((err) => {
					setError("Failed to add Employee");
					setIsLoading(false);
				});
		}, 2000);
	};

	const classes = useStyles();

	return (
		<div className="create">
			{!isAdded && (
				<div className="add-page">
					{error && <h2>SORRY!!! {error} </h2>}
					<Typography
						variant="h4"
						className={classes.formHead}
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							color: theme.palette.common.white,
						}}
					>
						ADD A NEW EMPLOYEE
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

							{isLoading && (
								<Button disabled variant="contained" color="secondary">
									Adding Employee...
								</Button>
							)}
							{!isLoading && (
								<Button variant="contained" color="secondary" type="submit">
									Add Employee
								</Button>
							)}
						</form>
					</Card>
				</div>
			)}
			{isAdded && (
				<Box>
					<Typography
						variant="h2"
						align="center"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							color: theme.palette.common.white,
						}}
					>
						Congratulations!
					</Typography>
					<Typography
						variant="h4"
						align="center"
						style={{
							marginBottom: "32px",
							fontWeight: 500,
							color: theme.palette.common.white,
						}}
					>
						Your new Employee has been added
					</Typography>

					{setTimeout(() => {
						history.push("/staff");
					}, 2000)}
				</Box>
			)}
		</div>
	);
};

export default Create;
