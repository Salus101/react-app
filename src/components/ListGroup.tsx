import { useNavigate } from 'react-router-dom';

function ListGroup() {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    console.log('Link Clicked!');
    navigate(path);
  };

  const listItemStyle = {
    cursor: 'pointer',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f4f4f4',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>CV Entries</h1>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li style={listItemStyle} onClick={() => handleLinkClick('/personaldetails')}>
          Personal Details and Photo
        </li>
        <li style={listItemStyle} onClick={() => handleLinkClick('/educationbackground')}>
          Education Background
        </li>
        <li style={listItemStyle} onClick={() => handleLinkClick('/specialskills')}>
          Special Skills
        </li>
        <li style={listItemStyle} onClick={() => handleLinkClick('/extracurriculum')}>
          Extra Curriculum Activities
        </li>
        <li style={listItemStyle} onClick={() => handleLinkClick('/hobbiesandinterests')}>
          Hobbies and Interests
        </li>
      </ul>
    </>
  );
}

export default ListGroup;
