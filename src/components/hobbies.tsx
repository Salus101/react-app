function HobbiesAndInterests() {
    const hobbiesData = [
      'Photography',
      'Reading',
      'Traveling',
      'Cooking',
      'Gardening',
      'Fitness',
      // Add more hobbies and interests as needed
    ];
  
    const containerStyle = {
      maxWidth: '400px',
      margin: '10px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
  
    const listItemStyle = {
      marginBottom: '10px',
    };
  
    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center' }}>Hobbies and Interests</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {hobbiesData.map((hobby, index) => (
            <li key={index} style={listItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HobbiesAndInterests;
  