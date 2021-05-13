// import Navbar from './components/Navbar';
import StaffHome from "./StaffHome";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import EmployeeDetails from "./EmployeeDetails";
import NotFound from "./NotFound";
import Layout from "./components/Layout";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

let theme = createMuiTheme({
	palette: {
		primary: {
			main: "#180317",
			contrastText: "#c60021",
		},
		secondary: {
			main: "#6a0dad",
			contrastText: "#f6f6f8",
		},
	},
	typography: {
		fontFamily: [
			"Montserrat",
			"Roboto",
			// "-apple-system",
			// "BlinkMacSystemFont",
			// '"Segoe UI"',
			// '"Helvetica Neue"',
			// "Arial",
			// "sans-serif",
			// '"Apple Color Emoji"',
			// '"Segoe UI Emoji"',
			// '"Segoe UI Symbol"',
		].join(","),
		// h1: {
		//   fontWeight: 700
		// },
		body1: {
			fontWeight: 600,
		},
	},
});

theme = responsiveFontSizes(theme);

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className="App">
					<CssBaseline />
					{/* <Navbar  /> */}
					<Layout>
						<div className="content">
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/staff">
									<StaffHome />
								</Route>
								<Route path="/staff/:id">
									<EmployeeDetails />
								</Route>
								<Route path="/create">
									<Create />
								</Route>
								<Route path="*">
									<NotFound />
								</Route>
							</Switch>
						</div>
					</Layout>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
