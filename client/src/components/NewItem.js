import NewItemModal from "./NewItemModal";

export default function NewItem() {
    return (
        <div className="nav-section">
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