import {Button, Paper, SxProps} from "@mui/material"
import React, {useContext} from "react"
import {DataContext} from "../Context/ContextProvider"

interface headerStyle {
	typography_h1: SxProps
	container: SxProps
}

const style: headerStyle = {
	typography_h1: {fontFamily: "Ramabhadra", fontSize: "2.5rem"},
	container: {
		display: "flex",
		padding: "0 2rem",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
}

export default function HeaderGlo() {
	const {closeSesion} = useContext(DataContext)

	const handleClick = () => {
		closeSesion()
	}

	return (
		<Paper component={"header"} sx={{...style.container}}>
			<img
				src={"https://enerbit.co/img/mainLogo.bea5a270.svg"}
				style={{height: "4rem"}}
				alt="logo"
			/>
			<Button onClick={handleClick}>Cerrar sesión</Button>
		</Paper>
	)
}
