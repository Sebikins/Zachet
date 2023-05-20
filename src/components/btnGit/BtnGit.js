import "./style.css"
import gitHub from "./gitHub-black.svg"

const BtnGit = ({link}) => {
    return ( 
        <a href={link} target="_blank"  real="noreferrer" className="btn-outline">
            <img src={gitHub} alt=""/>
            GitHub repo
        </a>
     );
}
 
export default BtnGit;