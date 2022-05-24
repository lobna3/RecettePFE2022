import { Link } from "react-router-dom";

export default function Footer({ user }) {
  return (
    <div>
      {user.isConnected ? (
        <>
          {" "}
          <footer id="footer" className="footer">
            <div className="copyright">
              &copy; Copyright 2022{" "}
              <strong>
                <span>SuperVision</span>
              </strong>
              .
            </div>
            <div className="credits"></div>
          </footer>
          <Link
            to="/"
            className="back-to-top d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-arrow-up-short"></i>
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
