import './App.css'

function Footer(props) {
  return (
    <footer className={props.darkMode ? 'dark' : undefined}>
      <p>© 2024 Khan development. All rights reserved.</p>
    </footer>
  )
}

export default Footer
