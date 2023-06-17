export default function Select({ totalNumber, title , setId }) {
    return (
        <>
            <select defaultValue="default" onChange={(e) => setId(e.target.value)}>
                <option value="default" disabled>Choose...</option>
                {[...Array(totalNumber).keys()].map((x , index) => {
                    return <option  key = {index}value={x + 1}>{title}-{x + 1}</option>
                })}
            </select>
        </>
    )
}