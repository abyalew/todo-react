export default function TodoForm() {
    return (
        <div className="flex gap-5">
            <input type="text" placeholder="Type here" className="input rounded-4xl w-md"/>
            <button className="btn btn-primary rounded-4xl w-40">Add</button>
        </div>
    )
}