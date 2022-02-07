export function ErrorMessage({ msg, isError }) {
    return isError ? (
        <div className="text-danger">
           {msg}
        </div>
    ) :  (
        <p>✅ Everything is Okay</p>
    )
}