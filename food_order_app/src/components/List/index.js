const List = ({ data }) => {
  return (
    <ul>
      {data.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default List;
