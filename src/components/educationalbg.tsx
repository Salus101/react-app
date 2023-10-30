function EducationBackground() {
    const educationData = [
      {
        institution: 'United States International University - Africa',
        degree: 'Bachelor of Science in Computer Science',
        year: '2020 - 2024',
      },
        {
            institution: 'State House Girls',
            degree: 'Kenya Certificate of Secondary Education',
            year: '2015 - 2019',
        },
        {
            institution: 'St. Joseph Herman Marx Primary School',
            degree: 'Kenya Certificate of Primary Education',
            year: '2007 - 2014',
        },
    ];
  
    const containerStyle = {
      maxWidth: '550px',
      margin: '10px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
  
    const entryStyle = {
      marginBottom: '15px',
    };
  
    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center' }}>Educational Background</h2>
        {educationData.map((entry, index) => (
          <div key={index} style={entryStyle}>
            <h3>{entry.institution}</h3>
            <p>{entry.degree}</p>
            <p>{entry.year}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default EducationBackground;
  