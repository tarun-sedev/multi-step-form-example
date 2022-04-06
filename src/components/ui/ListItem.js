function ListItem({ label, value }) {
  return (
    <>
      <dt className="col-sm-4 mb-3">{label}</dt>
      <dd className="col-sm-8 mb-3">{value}</dd>
    </>
  );
}

export default ListItem;
