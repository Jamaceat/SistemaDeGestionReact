import React, {useRef} from "react"
import {
	FormControl,
	Modal,
	TextField,
	Typography,
	Button,
	NativeSelect,
} from "@mui/material"
import {Box, SxProps} from "@mui/system"

interface Props {
	Update: () => void
}

function AddItemModal(props: Props) {
	const inputRef = useRef() as React.MutableRefObject<HTMLDivElement>

	return <></>
}

export default AddItemModal
