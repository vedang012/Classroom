import React, { useEffect, useState } from "react";

function NoteArea() {
    const [currentTask, setCurrentTask] = useState("");
    const [tasks, setTasks] = useState([]); 


    // retrieve all tasks from local storage
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // when the state of tasks changes, update the data to local storage
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else if (tasks.length === 0) {
            localStorage.removeItem("tasks")
        }
    }, [tasks]);

    // stores the current task value from input
    const currentTaskHandle = (e) => {
        setCurrentTask(e.target.value);
    };

    // adds a new task (current task)
    const addTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now(), text: currentTask, checked: false },
        ]);
        setCurrentTask(""); // Clear the input after adding
    };

    // handle the click of the checkbox
    const checkBox = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, checked: !task.checked } : task
            )
        );
    };

    // delete a Task
    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <div className="container self-center w-full flex flex-col align-middle items-center space-y-3 justify-center ">
                {/* Form */}
                <div className="container self-center w-full flex align-middle justify-center">
                    <div className="cardview bg-gray-100 w-1/2 flex flex-row align-middle justify-center border border-1 p-3 rounded-md">
                        <input
                            className="border-r-2 w-3/4 h-9 pl-3 focus:outline-none"
                            onChange={(e) => currentTaskHandle(e)}
                            placeholder="What's your next Task?"
                            type="text"
                            value={currentTask}
                        />
                        <button
                            className=" bg-white w-1/4 h-9"
                            onClick={addTask}
                        >
                            Add Task
                        </button>
                    </div>
                </div>

                {/* Tasks */}
                <div className="cardview bg-gray-100 w-1/2 flex flex-col align-middle justify-center border border-1 p-3 rounded-md">
                    {tasks.length > 0 ? (
                        tasks.map((Task) => (
                            <div
                                key={Task.id}
                                className="card bg-white container p-3 border border-gray rounded-md flex flex-row justify-between mb-2"
                            >
                                <div className="left flex flex-row space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={Task.checked}
                                        onChange={() => checkBox(Task.id)}
                                        name="status"
                                    />
                                    <p className={Task.checked ? "line-through" : ""}>
                                        {Task.text}
                                    </p>
                                </div>

                                <div className="right">
                                    <button
                                        className="bg-white"
                                        onClick={() => deleteTask(Task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tasks yet!</p> 
                    )}
                </div>
            </div>
        </>
    );
}

export default NoteArea;
