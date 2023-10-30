function ExtraCurriculumActivities() {
  const activitiesData = [
    'Boxing Club - Member (2022-2023)',
    'Drama Club - President (2017-2018)',
    'Volunteer at Local Animal Shelter (2016-2017)',
    'Kenya Music Festival - 1st Place (2015)',
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
      <h2 style={{ textAlign: 'center' }}>Extra-Curricular Activities</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {activitiesData.map((activity, index) => (
          <li key={index} style={listItemStyle}>
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExtraCurriculumActivities;
