import { Typography } from "@material-ui/core";
import StaffList from "./components/StaffList";
import useFetch from "./components/usefetch";
// import Button from '@material-ui/core/Button';
import useTheme from "@material-ui/core/styles/useTheme";

const StaffHome = () => {
	const theme = useTheme();
	const { data: staff, isPending, error } = useFetch(
		"http://localhost:5000/staff"
	);
	console.log("staff", staff);
	return (
		<div className="home">
			{/* Blog List components. With props for handle delete, staff object and title string */}
			{isPending && (
				<Typography
					variant="h4"
					align="center"
					style={{
						marginBottom: "32px",
						fontWeight: 500,
						color: theme.palette.common.white,
					}}
				>
					Staff List Loading...
				</Typography>
			)}

			{error && (
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
			)}

			{staff && <StaffList staff={staff} title="ALL EMPLOYEES" />}

			{/* {staff.message && (
				<>
					{staff.length < 1 && (
						<Typography
							variant="h4"
							align="center"
							style={{
								marginBottom: "32px",
								fontWeight: 500,
								color: theme.palette.common.white,
							}}
						>
							Error Fetching Data
						</Typography>
					)}

					{staff.length >= 1 && (
						<StaffList staff={staff} title="ALL EMPLOYEES" />
					)}
				</>
			)} */}
		</div>
	);
};

export default StaffHome;
