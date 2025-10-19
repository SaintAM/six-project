import { useState } from "react";
import "./index.scss";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const onClickTogglModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <button onClick={onClickTogglModal} className="open-modal-btn">
        ✨ Открыть окно
      </button>

      <Modal open={open} closeOpen={onClickTogglModal}>
        <>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          <h4>Модальное окошко</h4>
        </>
      </Modal>
    </div>
  );
}

export default App;
