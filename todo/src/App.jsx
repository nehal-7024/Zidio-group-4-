import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import bgImage from "./assets/todo_bg.jpg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (id) => {
    let t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    setDueDate(t.dueDate);
    setTodos(todos.filter((item) => item.id !== id));
    saveToLS();
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([
      ...todos,
      { id: uuidv4(), todo, isCompleted: false, priority, dueDate },
    ]);
    setTodo("");
    setDueDate("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    saveToLS();
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTodos = [...todos];
    const [movedTask] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, movedTask);
    setTodos(reorderedTodos);
    saveToLS();
  };

  return (
    <>
      <Navbar />
      <div
        className="mx-auto my-5 p-5 min-h-screen w-screen flex flex-col items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1 className="font-bold text-center text-3xl font-cursive">
          Stay Organized and Productive
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-8 w-full pt-10">
          <div className="bg-[#11212D] bg-opacity-80 backdrop-blur-md shadow-lg p-6 rounded-2xl w-[40%] md:w-[30%]">
            <h2 className="text-white text-lg font-semibold mb-4 text-center">
              Select a Date
            </h2>
            <Calendar
              onChange={setDate}
              value={date}
              tileClassName={({ date, view }) =>
                todos.some(
                  (t) =>
                    new Date(t.dueDate).toDateString() === date.toDateString()
                )
                  ? "bg-[#0F1A2B] rounded-lg text-white"
                  : ""
              }
              className="rounded-2xl border border-[#11212D] bg-cover bg-center shadow-md p-4 w-full"
            />
          </div>

          <div className="bg-[#11212D] bg-opacity-80 backdrop-blur-md shadow-lg p-6 rounded-2xl w-[80%] md:w-[50%]">
            <h2 className="text-white text-lg font-semibold mb-4">
              Add a New Task
            </h2>
            <div className="flex">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                className="w-full rounded-full px-5 py-2"
                placeholder="Enter your task..."
              />
              <button
                type="submit"
                onClick={handleAdd}
                disabled={todo.length <= 3}
                className="bg-[#253745] mx-2 rounded-full hover:scale-105 transition-all disabled:bg-[#11212D] p-4 py-2 text-sm font-bold text-white"
              >
                Save
              </button>
            </div>

            <div className="flex items-center mt-4">
              <label className="text-white mr-2">Priority:</label>
              <select
                onChange={handlePriorityChange}
                value={priority}
                className="rounded-md p-1 text-sm"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="flex items-center mt-4">
              <label className="text-white mr-2">Due Date:</label>
              <input
                type="date"
                onChange={handleDueDateChange}
                value={dueDate}
                className="rounded-md p-1 text-sm"
              />
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="todos">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {todos.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="todo flex my-3 justify-between bg-[#253745] p-3 rounded-md"
                          >
                            <div className="flex gap-4 items-center">
                              <input
                                name={item.id}
                                onChange={handleCheckbox}
                                type="checkbox"
                                checked={item.isCompleted}
                              />
                              <div
                                className={`text-white ${
                                  item.isCompleted ? "line-through" : ""
                                }`}
                              >
                                {item.todo} ({item.priority}) - Due:{" "}
                                {item.dueDate}
                              </div>
                            </div>

                            {/* Edit and Delete Buttons */}
                            <div className="flex gap-2 items-center">
                              <button
                                onClick={() => handleEdit(item.id)}
                                className="text-blue-500 hover:text-blue-700"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <AiFillDelete />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
