import "./style.css"
import vk from "./../../img/icons/vk.svg"
import git from "./../../img/icons/gitHub.svg"


const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/agentwhite"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Sebikins"><img src={git} alt="Link"/></a></li>
                </ul>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;