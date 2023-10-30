function PersonalDetails() {
  const containerStyle = {
    maxWidth: '400px',
    margin: '10PX auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const nameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Personal Details and Photo</h2>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="src\assets\myprofile.jpg"
          alt="John Doe"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }}
        />
      </div>
      <p style={nameStyle}>Name: Mariasalus Karabu</p>
      <p>Role: Software Developer</p>
      <p>Email: k.mariasalus@gmail.com</p>
      <p>Phone: 0716654641</p>
      <p>Location: Roysambu, Nairobi</p>
  
    </div>
  );
}

export default PersonalDetails;
