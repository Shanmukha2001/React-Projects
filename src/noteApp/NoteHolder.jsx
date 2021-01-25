import React, { useState } from "react"
import NoteItem from "./NoteItem"
import Noter from "./Noter"

const NoteHolder = () => {

    const [items, setItems] = useState([]);

    const itemListCrtr = (prop) => {
        // console.log(prop)
        setItems((prevList) => {
            return [...prevList, prop];
        });
    }

    const delthisItem = (p) => {

        setItems((prevList) => {
            return prevList.filter((val, ind) => {
                return ind !== p;
            });
        })
    }

    return (
        <>
            <Noter creteItems={itemListCrtr} />
            <div className="itemholder">

                {items.map((val, index) => {
                    return (<NoteItem
                        title={val.title}
                        content={val.content}
                        id={index}
                        key={index}
                        info={val}
                        delthis={delthisItem}
                    />
                    )
                })}
            </div>
        </>
    );
}

export default NoteHolder;