import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import { Box } from "@material-ui/core";
import EditEmployee from "../EditEmployee";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog(props) {
	const { employee, handleCancel, editOpen, setEditOpen } = props;

	return (
		<div>
			<Dialog
				open={editOpen}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCancel}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<Box>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							{/* Let Google help apps determine location. This means sending
						anonymous location data to Google, even when no apps are running. */}
						</DialogContentText>
						<EditEmployee
							employee={employee}
							setEditOpen={setEditOpen}
							handleCancel={handleCancel}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCancel} color="secondary">
							Cancel
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</div>
	);
}
