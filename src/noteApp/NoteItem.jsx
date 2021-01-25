import { Button } from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import React from "react"

const NoteItem = (prop) => {

    console.log(prop);

    const delItem = () => {
        prop.delthis(prop.id);
    }

    return (
        <>
            <div className="item" id={prop.id}>
                <div className="details">
                    <h3>
                        {prop.title}
                    </h3>
                    <h5>
                        {prop.content}
                    </h5>
                </div>
                <Button className="del" onClick={delItem}>
                    <DeleteOutline/>
                </Button>
            </div>
        </>
    );
}

export default NoteItem;