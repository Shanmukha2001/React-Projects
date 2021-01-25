import React, { useState } from "react"

const Noter = (prop) => {

    const [info, setInfo] = useState({
        title: " ",
        content: " "
    });

    const infoChanger = (e) => {
        const { name, value } = e.target;
        // console.log("name: "+name+" value:"+value);
        // console.log(info);
        setInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    }

    const sendToNoteHolder = () => {
        prop.creteItems(info);

    }

    const [expand, setExpand] = useState(false);

    const showContent = () => {
        setExpand((prev) => {
            return prev ? false : true;
        })
    }

    return (
        <>
            <div className="Note">
                <div className="in-Note">
                    <div className="Title" >
                        <input onChange={infoChanger} name="title" placeholder="Enter title" onClick={showContent} autoComplete="flase" />
                    </div>

                    {expand ?
                        <div className="content">
                            <textarea rows="4" onChange={infoChanger} name="content" placeholder="Enter desc" autoComplete="flase" />
                        </div> : null}


                    <div className="button" onClick={sendToNoteHolder}>
                        +
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noter;