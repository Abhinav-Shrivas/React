import {createPortal} from 'react-dom';
import { useRef,useImperativeHandle } from 'react';
export default function Modal({ref,children}){
    const dialog = useRef();
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
        </dialog>,document.getElementById("modal-root")
    )
}