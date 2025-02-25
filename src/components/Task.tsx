import { Item } from "@/types/Item"

type Props = {
    task: Item,
    deleteTaskProp: (id: number)=> void
    changeTaskProp: (id: number) => void
}

export const Task = ( { task, deleteTaskProp, changeTaskProp }: Props ) => {

    return (

        <div className="flex justify-between mb-2" key={task.id}>
            <div className="flex gap-2 items-center">
                <input type="checkbox" onClick={()=> changeTaskProp(task.id)} name="" id="" className="w-5 h-5 cursor-pointer
                 accent-gray-600"/>
                {
                    task.checked == true && <p className="line-through text-gray-600">{task.task}</p>
                }
                {
                    task.checked != true && <p className="text-black">{task.task}</p>
                }
            </div>
            <button className="text-gray-600 cursor-pointer" onClick={()=> deleteTaskProp(task.id)}>X</button>
        </div>

    )

}