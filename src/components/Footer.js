
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <footer id="footer">
        <div class="container">
          <div class="copyright">
            © Copyright{" "}
            <strong>
              <span>ATuServicio</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <Link to="/">ATuServicio</Link>
          </div>
        </div>
      </footer>
    )
}

export default Footer;