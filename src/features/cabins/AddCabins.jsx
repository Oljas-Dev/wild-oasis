import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* We can have multiple windows opened */}
      </Modal>
    </div>
  );
}

// function AddCabins() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <Button variation="primary" onClick={() => setIsOpen((show) => !show)}>
//         Add new Cabin
//       </Button>
//       {isOpen && (
//         <Modal onClose={() => setIsOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabins;
