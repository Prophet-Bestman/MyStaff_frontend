import { useState, useEffect } from "react";
import axios from "axios";
// import { Step } from "@material-ui/core";

const useFetch = (url) => {
	// State definition for the list of blogs
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();
		setTimeout(async () => {
			try {
				const response = await axios.get(url, { signal: abortCont.signal });
				const data = await response.data;
				setData(data);
				setIsPending(false);
				setError(null);
			} catch (error) {
				if (error.name === "AbortError") {
					console.log("fetch aborted");
				} else if (error.response) {
					console.log("Response Error");
					setIsPending(false);
					setError("This resourse does not exist!!!");
				} else if (error.request) {
					setIsPending(false);
					console.log("Request Error");
					setError("Error In Connection!!!");
				} else {
					console.log(error.message);
					setIsPending(false);
					setError(error.message);
				}
			}
		}, 0);

		return () => abortCont.abort();
	}, [url]);

	return {
		data,
		isPending,
		error,
	};
};

export default useFetch;
