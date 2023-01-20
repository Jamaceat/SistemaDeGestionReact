import {Button, Grid, Paper, SxProps, Typography} from "@mui/material"
import React from "react"
import singleItem from "../../../../Interfaces/SingleItem"

interface itemStyle {
	container: SxProps
	buttonsContainer: SxProps
	textContainer: SxProps
}

const style: itemStyle = {
	container: {
		width: "100%",
		marginY: ".5rem",
		padding: ".5rem",
		display: "flex",
		borderRadius: "1rem",

		flexWrap: "wrap",
		height: "auto",
	},
	buttonsContainer: {display: "flex", alignItems: "stretch"},
	textContainer: {
		display: "flex",
		alignItems: "center",
		fontSize: "1rem",
		flexGrow: "1",
	},
}

function ItemInventario(props: singleItem) {
	const {
		id,
		// condition,
		// connection_type,
		// created_at,
		// i_b,
		// i_max,
		// i_n,
		// location,
		// manufacturer,
		// owner,
		// purchase,
		// seals,
		// serial,
		// storage_system,
		// updated_at,
	} = props

	return (
		<Grid container sx={{...style.container}} component={Paper} elevation={4}>
			<Grid
				item
				component={Typography}
				variant="h6"
				fontFamily={"Tauri, sans-serif"}
				height={"auto"}
				sx={{...style.textContainer}}
			>
				Item ID {id}
			</Grid>
			<Grid item sx={{...style.buttonsContainer}}>
				<Button>Edit</Button>
				<Button color="error">Delete</Button>
			</Grid>
		</Grid>
	)
}

export default ItemInventario
