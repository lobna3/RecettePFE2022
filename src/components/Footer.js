
import { Link, } from 'react-router-dom';

export default function Footer(){
    return (
        <div>
    <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright 2022 <strong><span>SuperVision</span></strong>. 
    </div>
    <div class="credits">
   
    </div>
      </footer>
      <Link to="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
        </div>
    )
}