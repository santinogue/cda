import { WhatsAppOutlined } from '@ant-design/icons';

import './styles.css';

const Whatsapp = () => {
  const onWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=59895527333', '_blank').focus();
  }

  return (
    <div className='whatsapp-container' onClick={onWhatsAppClick}>
      <WhatsAppOutlined style={{ color: '#fff', fontSize: '28px' }} />
    </div>
  )
};

export default Whatsapp;