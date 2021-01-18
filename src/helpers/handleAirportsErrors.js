export default function handleErrors(err) {
    if (err.response.status === 429)
        alert(err + " (Too many requests). Wait a few seconds and refresh the page.")
}