import React, { useState, useEffect } from 'react';
import '../App.css';
import TaskCard from './task_card';

export default function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const date = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // Load tasks from local storage when the component mounts or if tasks are present in local storage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks && storedTasks.length > 0) {
            setTasks(storedTasks);
        }
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && newTask.trim() !== '') {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    };

    const handleDelete = (uniqueKey) => {
        const updatedTasks = tasks.filter((_, index) => index !== uniqueKey);
        setTasks(updatedTasks);
    };

    const handleModification = (key, m_title) => {
        const updatedTasks = tasks.map((task, index) => {
            if (index === key) {
                return m_title;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className='container my-3'>
            <h1 className='h1' contentEditable>{`${days[date.getDay()]}`}, <span className='date'>{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</span></h1>
            <div className="main_content">
                {tasks.map((task, index) => (
                    <TaskCard key={index} unique_key={index} title={task} delete_func={handleDelete} updateFunc={handleModification} />
                ))}
            </div>
            <div className='task_card d-flex align-items-center'>
                <input
                    type="text"
                    id="input_field"
                    className="task_input form-control"
                    placeholder="Enter Tasks you want to accomplish..."
                    aria-label="Task"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>
    );
}
