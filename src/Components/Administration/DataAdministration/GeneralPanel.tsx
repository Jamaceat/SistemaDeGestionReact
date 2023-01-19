import {Button, FormControl, Grid, SxProps, TextField} from "@mui/material"
import {Box} from "@mui/system"
import React from "react"
// import axios from "axios"

interface panelStyles {
	container: SxProps
	subContainer: SxProps
	AddContainer: SxProps
	searchContainer: SxProps
}

const style: panelStyles = {
	container: {width: "100%", padding: "2rem"},
	subContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		"@media (min-width:960px)": {alignItems: "flex-end"},
	},
	AddContainer: {
		"@media (min-width:960px)": {
			width: "100%",
			height: "5rem",
			padding: "3rem",
		},
		"@media (min-width:0px)": {width: "100%"},
		marginBottom: "1rem",
	},
	searchContainer: {width: "100%"},
}

function Panel() {
	return (
		<Grid container sx={{...style.container}}>
			<Grid item component={Box} sx={{...style.subContainer}}>
				<Box>
					<Button variant="contained" sx={{...style.AddContainer}}>
						Add Product
					</Button>
				</Box>
				<FormControl sx={{...style.searchContainer}}>
					<TextField helperText={"Buscar por Serial"} />
				</FormControl>
			</Grid>
		</Grid>
	)
}

export default Panel
