"use client"

import { Task } from "@/components/Task";
import { TaskForm } from "@/components/TaskForm";
import { Title } from "@/components/Title";
import { listOfItems } from "@/data/listOfItems";
import { Item } from "@/types/Item";
import { useState } from "react";

export default function Home() {

  const [listOfItemsState, setListOfItemsState] = useState<Item[]>(listOfItems);
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = () => {

    if (inputValue != '') {
      setListOfItemsState([
        ...listOfItemsState,
        {
          id: listOfItemsState.length + 1,
          task: inputValue,
          checked: false
        }
      ])
    }

    setInputValue('')

  }

  const deleteTask = (id: number) => {

    setListOfItemsState(listOfItemsState.filter((item) => item.id !== id));

  }

  const changeTask = (id: number) => {

    let newList = [...listOfItemsState]

    for (let i in newList) {

      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }

    }

    setListOfItemsState(newList);

  }

  return (

    <div className="flex justify-center items-center bg-gradient-to-r from-blue-800 to-purple-700 w-screen h-screen p-3 font-sans">

      <div className="bg-white p-6 flex flex-col rounded-lg">
        <Title>To-Do List 📝</Title>
        <TaskForm addTaskProp={addTask} getValue={setInputValue} clearEntry={inputValue}></TaskForm>
        {
          listOfItemsState.map(item => <Task task={item} key={item.id} deleteTaskProp={deleteTask} changeTaskProp={changeTask}></Task>)
        }
      </div>

    </div>

  );

}
