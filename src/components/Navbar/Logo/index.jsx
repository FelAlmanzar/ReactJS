import { Link } from "react-router-dom";

function Logo() {
    return(
        <div className="brandLogo">
            <h1><Link to="/">Playzone</Link></h1>
        </div>
    );
}

export default Logo