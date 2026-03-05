// Import CSS
import '../styles/Navbar.css';

// Import Icons
import { FaCog, FaEnvelope, FaHeart, FaPaw, FaThLarge } from 'react-icons/fa';

function Navbar() {
    return (
        <div className='sneaky-nav'>
            <NavItem icon={<FaThLarge />} label='Home' />
            <NavItem icon={<FaPaw />} label='Pet Gallery' />
            <NavItem icon={<FaHeart />} label='Favorites' />
            <NavItem icon={<FaEnvelope />} label='About Us' />

            <div className='divider'></div>
            
            <NavItem icon={<FaCog />} label='Settings' />
        </div>
    )
}

function NavItem({ icon, label }) {
  return (
    <div className='nav-item'>
      <div className='icon-wrapper'>
        <span className='nav-icon'>{icon}</span>
      </div>
      <span className='nav-label'>{label}</span>
    </div>
  );
}

export default Navbar;