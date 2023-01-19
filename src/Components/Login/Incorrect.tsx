import {Alert, Snackbar} from "@mui/material"
import React from "react"

function Incorrect(props: any) {
	const {openIncorrect} = props

	return (
		<Snackbar open={openIncorrect} autoHideDuration={5000}>
			<Alert severity="info">Las credenciales no coinciden</Alert>
		</Snackbar>
	)
}

export default Incorrect
