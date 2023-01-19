import {Paper, SxProps, Typography} from "@mui/material"
import React from "react"

interface headerStyle {
	typography_h1: SxProps
}

const style: headerStyle = {
	typography_h1: {fontFamily: "Ramabhadra", fontSize: "2.5rem"},
}

export default function HeaderGlo() {
	return (
		<Paper component={"header"}>
			<Typography variant="h1" sx={{...style.typography_h1}}>
				enerBit
			</Typography>
		</Paper>
	)
}
