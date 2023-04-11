import './CardStyle.css';
import { BsChevronRight } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"


export function Card({ 
  username,
  description,
  image,
  route,
  name,  
  location,
  blog,
  language

}) 
{
  return (
    <a href={route}>
      <div className="card">
        <div className="details">
          <img src={image} alt="" />
          <div>
            <p>{name}</p>
            <p>{username}</p>
            <p>{description}</p>
            <p>{blog}</p>
            <p>
              <GrLocation/>
              {location}
            </p>
            <p> {language}</p>
          </div>
        </div>
        <span className="material-symbols-outlined">
            <BsChevronRight/>
        </span>
      </div>
    </a>
  );
}