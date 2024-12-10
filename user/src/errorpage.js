import axios from "axios";  
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 text-center">
            <h3>We're sorry, but our server is currently unavailable. Please try again later.</h3>
            <a className="text-center" href="/">Return back to Home</a>

            <hr/>
        </div>
      </div>
    </div>
  );
}
