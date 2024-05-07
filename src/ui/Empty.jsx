import PropType from "prop-types";

Empty.propTypes = {
  resourceName: PropType.any,
};

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

export default Empty;
