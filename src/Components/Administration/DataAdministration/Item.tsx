import {Button, Grid, Paper, SxProps, Typography} from "@mui/material"
import React, {useState} from "react"
import singleItem from "../../../../Interfaces/SingleItem"
import ShowInfoModal from "./ShowInfoModal"

interface itemStyle {
	container: SxProps
	buttonsContainer: SxProps
	textContainer: SxProps
}

interface Props extends singleItem {
	id: number
	setNeedUpdate: React.Dispatch<React.SetStateAction<boolean>>
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

function ItemInventario(props: Props) {
	const [openInfo, setOpenInfo] = useState<boolean>(false)
	const [willEdit, setWillEdit] = useState<boolean>(false)

	const {id} = props

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
				<Button
					onClick={() => {
						setWillEdit((prev) => true)
					}}
				>
					Edit
				</Button>
				<Button color="error">Delete</Button>
			</Grid>
			<ShowInfoModal
				setWillEdit={setWillEdit}
				willEdit={willEdit}
				openInfo={openInfo}
				setOpenInfo={setOpenInfo}
				item={props}
			/>
		</Grid>
	)
}

export default ItemInventario
