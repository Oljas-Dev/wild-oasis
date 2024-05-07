import { useCheckout } from "./useCheckout";
import PropType from "prop-types";

import Button from "../../ui/Button";

CheckoutButton.propTypes = {
  bookingId: PropType.number,
};

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckinOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckinOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
