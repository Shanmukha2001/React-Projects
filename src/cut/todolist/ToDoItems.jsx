import React from "react";

const ToDoItems = (props) => {
    return (
        <>
            <div className="liItem">
                <i className="fa fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
                <li id={props.index} key={props.index} >{props.name}</li>
            </div>
        </>
    );
}

export default ToDoItems;