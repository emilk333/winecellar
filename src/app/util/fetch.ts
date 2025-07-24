
const defaultHeaderConfig = {
	headers: {
		"Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded', "application/json",
	}
}

const fetchWrapped = async <T>(promise: Promise<Response>): Promise<[T | undefined, unknown]> => {
    try {
        const response = await promise
        if (response.ok) { // if response status is in the range 200-299

            /* We assume this wrapper-function will be used for data fetching purposes,
            *  which means .json() is built-in. This could be expanded on */
            const data = await response.json()
            return [data, undefined]
        } else throw new Error(`Request failed: http error: ${response.status}`)
        // We treat any response not within the http-code range of 200-299, as a failed request.

    } catch(error) {
        return [undefined, error]
    }
}


export { fetchWrapped, defaultHeaderConfig }