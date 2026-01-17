const UserProfile(props) {
  return (
    <div
      style={{
        border: '1px solid gray',      // border around the card
        padding: '10px',               // space inside the card
        margin: '10px',                // space outside the card
        borderRadius: '5px',           // rounded corners
        backgroundColor: '#f9f9f9'    // subtle light background
      }}
    >
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
