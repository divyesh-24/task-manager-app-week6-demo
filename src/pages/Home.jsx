import React from "react";
import useTaskManager from "../hook/useTaskManager";

const Home = () => {
  const { tasks, removeTask } = useTaskManager();
  return (
    <>
      <div className="min-h-[86vh] h-fit border rounded-xl p-10">
        <h1 className="text-xl ">Tasks</h1>
        <div className="flex flex-col md:flex-row gap-6 flex-wrap items-center md:items-start justify-between md:justify-normal w-full   lg:gap-10 md:grid md:grid-cols-3 lg:grid-cols-4 mt-5 overflow-y-auto ">
          {tasks.length != 0 ? (
            tasks.map((task, i) => (
              <div
                key={i}
                className={`border relative  px-3 py-2 rounded-md w-full  h-fit`}
              >
                <div className="px-3 py-3">
                  <p className="text-lg">{task.title}</p>
                  <p className="text-gray-400 ">{task?.desc}</p>
                </div>
                <button
                  className="px-3 border absolute top-2 right-2 rounded-full py-1.5 hover:border-dashed active:border-solid hover:border-black"
                  onClick={() => removeTask(i)}
                >
                  x
                </button>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-96 mx-0 my-auto text-lg capitalize">
              please add tasks!!!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
