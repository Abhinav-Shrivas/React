import Inputs from "./Inputs";
import Modal from "./Modals";
import { useState,useRef } from "react";
export default function CreateProject({onSelect,onCancel}) {
  const titleRef = useRef();
  const descripRef = useRef();
  const dateRef = useRef();
  const modal  = useRef();
  function handleSave(){
    const title = titleRef.current.value;
    const description = descripRef.current.value;
    const date = dateRef.current.value;
    if(title === '' || description === '' || date === ''){
      modal.current.open();
      return;
    }
    const newProject = {
        id : Math.random(),
        title : title,
        description : description,
        date : date
    }
    onSelect(newProject);
  }
  return (
    <>
    <Modal ref = {modal}>
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
      <p className="text-stone-600 mb-4">Please fill all the fields</p>
      <form method='dialog' className="mt-4">
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Close</button>
      </form>
    </Modal>
    <div className="w-[35rem] mt-16">
     <menu className="flex items-center justify-end gap-4 my-4">
       <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
        <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Inputs ref = {titleRef} context = {"Title"} type = {"text"} required></Inputs>
        <Inputs ref = {descripRef} textarea={true} context={"Description"} ></Inputs>
        <Inputs ref = {dateRef} context = {"Due Date"} type = {"date"}></Inputs>
      </div>
    </div>
    </>
  );
}
