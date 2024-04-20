import React, { useContext, useEffect, useState } from "react";
import useTaskManager from "../hook/useTaskManager";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const AddTask = () => {
  const { id } = useParams();
  const { addTask, editTask } = useTaskManager();
  const { tasks } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (id) {
      setTitle(tasks[id - 1].title);
      setDesc(tasks[id - 1].desc);
    }
  }, [id]);

  const handelForm = (e) => {
    e.preventDefault();
    if (title.length <= 3) {
      setData({ error: "Title should be more then 3 Characters" });
      return;
    }
    if (!id) {
      let a = tasks.filter((item) => item.title === title);
      if (a.length > 0) {
        setData({ error: "Task Already added" });
        return;
      }
      addTask({ title: title, desc: desc });
    }
    if (id) {
      editTask(id, { title: title, desc: desc });
    }
    setTitle("");
    setDesc("");
    navigate("/");
  };

  return (
    <div className="min-h-[86vh] border rounded-xl">
      <h1 className="text-lg md:text-xl p-6 px-10">Add Tasks</h1>
      <div className=" w-full h-4/5  px-10  box-border rounded-lg lg:w-3/5">
        <form onSubmit={handelForm} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sr-only" htmlFor="email">
              Title
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {data?.error && <p className="text-red-400">*{data?.error}</p>}
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Description
            </label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Description"
              rows="8"
              value={desc}
              name="description"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              {id ? "Save" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
