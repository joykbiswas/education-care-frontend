import PropTypes from "prop-types";
import { BiLogoFacebook ,BiLogoTwitter} from 'react-icons/bi'
import { AiOutlineInstagram} from 'react-icons/ai'


const AuthorCard = ({ author }) => {
    const {img,name,profession} =author;
  // console.log(author);
  return (
    <div>
      <div className="card lg:h-40 h-44 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-full w-32"
            src={img}
            alt="Album"
          />
        </figure>
        <div className=" p-3 space-y-3">
          <h2 className="font-bold">{name}</h2>
          <p className="text-lg">{profession}</p>
          <div className="flex space-x-3 text-xl">
          <BiLogoFacebook></BiLogoFacebook>
          <BiLogoTwitter></BiLogoTwitter>
          <AiOutlineInstagram></AiOutlineInstagram>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;

AuthorCard.propTypes = {
    author: PropTypes.object,
  };