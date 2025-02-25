type Props = {
    getValue: (value: string) => void,
    addTaskProp: ()=> void,
    clearEntry: string
}

export const TaskForm = ( { getValue, addTaskProp, clearEntry }: Props ) => {

    return (
        <div className="flex flex-col items-center gap-2 mb-7 sm:flex-row">
            <input onChange={(e) => getValue(e.target.value)} 
            className="bg-gray-200 text-lg rounded-lg py-4 pl-6 pr-9 outline-none w-full sm:w-auto" 
            type="text" 
            placeholder="Add your task" 
            value={clearEntry}/>

            <button onClick={addTaskProp} 
            className="bg-orange-500 text-lg rounded-lg py-4 px-9 
            text-white w-3/5 sm:w-auto transition-all duration-300 ease-in-out hover:bg-orange-600"
            >Add</button>

        </div>
    )

}