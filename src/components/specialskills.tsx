function SpecialSkills() {
    const skillsData = [
      'Great Problem-solving skills',
      'Team-Leadership',
      'Teamwork',
      'JavaScript',
      'React.js',
      'Node.js',
      'HTML5',
      'CSS3',
      'Database Management',
      'UI/UX Design',
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
        <h2 style={{ textAlign: 'center' }}>Special Skills</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {skillsData.map((skill, index) => (
            <li key={index} style={listItemStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SpecialSkills;
  