
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>ATuServicio</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <Link to="/">ATuServicio</Link>
          </div>
        </div>
      </footer>
    )
}

export default Footer;