import reactLogo from '../assets/react.svg'
import '../App.css'

function Header(props) {
  return (
    <header className={props.darkMode ? 'header-dark' : undefined}>
      <nav>
        <div className="logotitle">
          <img src={reactLogo} width="30px" className="logoimg" />
          <h3>React Facts</h3>
        </div>
        <div className={props.darkMode ? 'toggle-container-dark' : 'toggle-container'}>
            <label className="toggle-label" htmlFor="toggle">Light</label>
            <input type="checkbox" id="toggle" checked = {props.darkMode} onChange = {props.toggleDarkMode} />
            <label className="toggle-slider" htmlFor="toggle"></label>
            <label className="toggle-label" htmlFor="toggle">Dark</label>
        </div>
      </nav>
    </header>
  )
}

export default Header
