import React from "react"

import {Modal, Typography, Button, Box, SxProps} from "@mui/material"

interface Props {
	id: number
	setEdit?: React.Dispatch<React.SetStateAction<boolean>>
}

interface modalInfoStyles {
	subModalStyle: SxProps
}

const style: modalInfoStyles = {
	subModalStyle: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "80%",
		bgcolor: "white",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		display: "flex",
		flexDirection: "column",
		height: "30%",
		gap: "1rem",
		overflow: "hidden",
		justifyContent: "space-between",
	},
}

function DeleteModal() {
	const open = true

	return (
		<Modal hideBackdrop sx={{height: "auto"}} open={open}>
			<Box sx={{...style.subModalStyle, width: "20vw"}}>
				<Typography
					sx={{
						fontFamily: "Tauri, sans-serif",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "80%",
					}}
				>
					¿Está seguro de que desea borrar este elemento?
				</Typography>
				<Box>
					<Button>Yes</Button>
					<Button color="error">No</Button>
				</Box>
			</Box>
		</Modal>
	)
}

export default DeleteModal
