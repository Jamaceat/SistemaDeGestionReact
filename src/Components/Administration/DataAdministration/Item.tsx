import {Button, Grid, Paper, SxProps, Typography} from "@mui/material"
import React, {useState} from "react"
import singleItem from "../../../../Interfaces/SingleItem"
import ItemBasicStructure from "../../../../Interfaces/Creation"
import ShowInfoModal from "./ShowInfoModal"

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
		transition: "1s all",
		"&:hover": {Color: "#6FB3FC", padding: "2rem", transition: "1s all"},
	},
	buttonsContainer: {display: "flex", alignItems: "stretch"},
	textContainer: {
		display: "flex",
		alignItems: "center",
		fontSize: "1rem",
		flexGrow: "1",
		cursor: "pointer",
	},
}

function ItemInventario(props: singleItem) {
	const [openInfo, setOpenInfo] = useState<boolean>(false)

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

	const handleOpen = () => setOpenInfo((prev) => true)

	return (
		<Grid container sx={{...style.container}} component={Paper} elevation={4}>
			<Grid
				className="Information"
				item
				component={Typography}
				variant="h6"
				fontFamily={"Tauri, sans-serif"}
				height={"auto"}
				sx={{...style.textContainer}}
				onClick={handleOpen}
			>
				Item ID {id}
			</Grid>
			<Grid item sx={{...style.buttonsContainer}}>
				<Button>Edit</Button>
				<Button color="error">Delete</Button>
			</Grid>
			<ShowInfoModal
				openInfo={openInfo}
				setOpenInfo={setOpenInfo}
				item={props}
			/>
		</Grid>
	)
}

export default ItemInventario
