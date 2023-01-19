import {
	Button,
	FormControl,
	Grid,
	SxProps,
	TextField,
	Typography,
} from "@mui/material"
import {Box} from "@mui/system"
import React, {useEffect, useState} from "react"
import axios from "axios"
import PaginationI from "../../../../Interfaces/Pagination"

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
	// const initialState: PaginationI = {items:[]}
	const [pages, setPagination] = useState<PaginationI | null>(null)

	const fetchingData = async () => {
		try {
			let data = await axios.get(
				"https://ops.enerbit.dev/learning/api/v1/meters?page=0&size=10"
			)

			setPagination((prev) => data.data)
			console.log(data, "yyy", pages)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		fetchingData()
	}, [])

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
			{pages === null ? (
				<Typography>Esta null</Typography>
			) : (
				<>
					{" "}
					{console.log(pages)}
					{pages.items.map((x) => (
						<Typography key={x.id}>{x.condition} ' </Typography>
					))}
				</>
			)}
		</Grid>
	)
}

export default Panel
