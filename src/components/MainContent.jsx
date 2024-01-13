import '../App.css'

function MainContent(props) {
  return (
    <main className={props.darkMode ? 'dark' : undefined}>
      <h1>Fun Facts about React</h1>
      <ul className="funfacts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintaied by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default MainContent
