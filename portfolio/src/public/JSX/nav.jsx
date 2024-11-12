import '../CSS/nav.css';

export default function Nav() {
    return(
        <header className="header_nav">
            <nav className='nav'>
              <a href="#profile" className='nav_profile'>PROFILE</a>
              <a href="#project" className='nav_project'>PROJECT</a>
              <a href="#main" className='nav_main'>MAIN</a>
              <a href="#myskill" className='nav_myskill'>MYSKILL</a>
              <a href="#contact" className='nav_contact'>CONTACT</a>
            </nav>
        </header>
    )
}