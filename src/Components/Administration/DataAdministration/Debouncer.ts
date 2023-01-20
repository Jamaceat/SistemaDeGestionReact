import {useState} from "react"

function FutureDebouncer() {
	const [Debouncer, setDebouncer] = useState(0)
	return [Debouncer, setDebouncer]
}

export default FutureDebouncer
