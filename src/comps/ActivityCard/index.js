
import { PhoneOutlined } from '@ant-design/icons';
import './styles.css';

const ActivityCard = ({title, desc, image, contacto}) => {

  return (
    <div className="actCard">
      <div className="actImageContainer">
        <img
          src={require(`images/activities/${image}`).default}
          alt={title}
          className="activityImage"
        />
      </div>
      <div className="actCardContent" >
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className='activityContactInfo'>
          <PhoneOutlined className='redOnHover' key="phone" /><span className='redOnHover'>{contacto}</span>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard;