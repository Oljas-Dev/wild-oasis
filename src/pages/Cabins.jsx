import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabins from "../features/cabins/AddCabins";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((cabin) => console.log(cabin));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
