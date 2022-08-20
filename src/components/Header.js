import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tickImg from "../assets/images/double-tick.png";
import noteImg from "../assets/images/notes.png";
import {
  addtodo,
  allcompleted,
  clearcompleted
} from "../redux/todo/todo.actions";
export default function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleAddNewTodo = (e) => {
    e.preventDefault();
    dispatch(addtodo(text));
    setText("");
  };

  const handleCompleteAll = () => {
    dispatch(allcompleted());
  };
  const handleClearCompleted = () => {
    dispatch(clearcompleted());
  };
  return (
    <div>
      <form
        onSubmit={handleAddNewTodo}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          value={text}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleCompleteAll}
        >
          <img className="w-4 h-4" src={tickImg} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
