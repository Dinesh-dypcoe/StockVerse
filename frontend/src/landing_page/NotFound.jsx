import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
      <img className="mt-3"
        src="/media/images/404.svg"
        alt="404 Not Found"
        style={{ maxWidth: "600px", marginBottom: "2rem" }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <h1 className="display-4 mb-3">Oops! Page not found.</h1>
      <p className="lead mb-4">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary btn-lg mb-3">
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound