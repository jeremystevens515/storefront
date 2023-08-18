import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ITEM } from "../utils/mutation";

import NewItemModal from "./NewItemModal";

export default function NewItem() {
    const [creatingItem, setCreatingItem] = useState(true);

    const handleNewItem = () => {
        console.log('New Item')
    };

    return (
        <div>
            <button className="new-item-btn" onClick={() => {
                const modal = document.querySelector("#item-modal");
                modal.showModal();
            }}>
                New Item
            </button>
            <dialog id="item-modal">
                <NewItemModal />
            </dialog>
        </div>
    )
}