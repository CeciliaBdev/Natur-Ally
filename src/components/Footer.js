import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <ul>
        <Link to="/mentions" style={{ textDecoration: 'none' }}>
          <li>Mentions légales</li>
        </Link>
        <li>•</li>
        <li>©Ceciliabdev - 2023</li>
      </ul>
    </div>
  )
}

export default Footer
