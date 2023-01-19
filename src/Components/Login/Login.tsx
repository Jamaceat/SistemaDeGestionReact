import {
	Box,
	SxProps,
	TextField,
	Paper,
	Grid,
	FormControl,
	Button,
} from "@mui/material"

import React, {MouseEvent, useRef} from "react"

interface loginStyle {
	container: SxProps
	gridItem: SxProps
	responsive: SxProps
}
const style: loginStyle = {
	container: {
		height: "100%",
		display: "flex",
		backgroundImage: "url(https://enerbit.co/img/mainLogo.bea5a270.svg)",
		justifyContent: "center",
		alignItems: "center",
		margin: 0,
		width: "100%",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100% 25%",
	},
	gridItem: {
		width: "100%",
		gap: "1rem",
		display: "flex",
		flexDirection: "column",
	},
	responsive: {
		display: "flex",
		width: "90%",
		flexDirection: "column",
		padding: "1rem",
		"@media (min-width:960px)": {width: "50%"},
	},
}
export default function Login() {
	const refForm = useRef() as React.MutableRefObject<HTMLDivElement>
	const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault()
		const inputData = Array.from(
			refForm?.current.querySelectorAll("input")
		).map((x) => x.value)
		console.log(inputData)
	}

	return (
		<Box sx={{...style.container}}>
			<Grid
				container
				component={Paper}
				elevation={12}
				sx={{...style.responsive}}
			>
				<Grid
					component={FormControl}
					sx={{...style.gridItem}}
					item
					xs={12}
					ref={refForm}
				>
					<TextField required fullWidth label={"Username"} />
					<TextField required fullWidth label={"Password"} type={"password"} />
					<Button onClick={handleClick} variant="contained">
						Login
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}
