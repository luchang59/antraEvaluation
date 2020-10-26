import react from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className='header-list'>
      <nav className='nav'>
        <Link to="/home">HOME</Link>
        <Link to="/following">FOLLOWING</Link>
      </nav>
      <>
      </>
    </div>
  );
}
