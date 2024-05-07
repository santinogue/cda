
import './styles.css';

const StaffCard = ({name, desc, image}) => {

  return (
    <div className="card">
      <div className="center">
        <div className="imageContainer">
          <img
            src={require(`images/${image}`).default}
            alt={name}
            className="staffImage"
          />
        </div>
      </div>
      <div className="cardContent" >
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default StaffCard;