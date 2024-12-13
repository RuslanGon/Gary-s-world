import { Link } from "react-router-dom";
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'


const TitlePage = () => {
  return (
    <ul>
      <li>
        <img src={image1} alt="" />
        <Link></Link>
      </li>
      <li>
        <img src={image2} alt="" />
        <Link></Link>
      </li>
      <li>
        <img src={image3} alt="" />
        <Link></Link>
      </li>
    </ul>
  );
};

export default TitlePage;
