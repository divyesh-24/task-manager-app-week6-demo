import React, { useContext, useEffect, useState } from "react";
import useTaskManager from "../hook/useTaskManager";
import Modal from "../components/Modal";
import ModalRemove from "../components/ModalRemove";
import {
  MinusIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { tasks, removeTask } = useTaskManager();
  const { isAuthenticated, openShowModal, setOpenShowModal } =
    useContext(AuthContext);
  useEffect(() => {}, [tasks]);
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
                {isAuthenticated && (
                  <div>
                    <button
                      className="px-3 border absolute top-2 right-2 rounded-full py-1.5 hover:border-dashed hover:text-red-500 active:border-solid hover:border-black"
                      onClick={() => setOpenShowModal(i)}
                    >
                      <TrashIcon className="h-4 w-4 " />
                    </button>
                    <Link
                      to={`/edit/${i + 1}`}
                      className="px-3 border absolute top-2 right-14 rounded-full py-1.5 hover:border-dashed hover:text-blue-500 active:border-solid hover:border-black"
                      // onClick={() => setOpenShowModal(i)}
                    >
                      <PencilSquareIcon className="h-4 w-4 " />
                    </Link>
                  </div>
                )}
                <ModalRemove
                  title={"Remove"}
                  massage={`Are you sure Remove ${task?.title} ?`}
                  dangerAction={() => removeTask(i)}
                  dangerOption={"Remove"}
                  showModal={openShowModal === i}
                  cancelAction={() => setOpenShowModal(-1)}
                />
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
