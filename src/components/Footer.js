import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>naturallyjardinsetservices@gmail.com</li>
        <li>•</li>
        <Link to="/mentions" style={{ textDecoration: 'none' }}>
          <li>Mentions légales</li>
        </Link>
        <li>•</li>
        <li>
          <a href="mailto:ceciliabdev@gmail.com">© Ceciliabdev - 2023</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
