import PasswordEntryForm from "./components/PasswordEntryForm";
import Modal from "./components/Modal";

function App() {
  return (
    <Modal isOpen={true}>
      <PasswordEntryForm />
    </Modal>
  );
}

export default App;
