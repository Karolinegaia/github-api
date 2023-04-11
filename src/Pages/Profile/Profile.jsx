import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../Compontents/Card';
import './ProfileStyle.css';


export function Profile() {
  const { user } = useParams();
  const [listUser, setListUser] = useState({});
  const [repos, setRepos] = useState([]);
  console.log('🚀 ~ file: index.jsx ~ line 7 ~ Profile ~ user', user);
  useEffect(() => {
    const data = async () => {
      await axios
        .get(`https://api.github.com/users/${user}`)
        .then(async (response) => {
          console.log(response);
          setListUser(response.data);

          await axios
            .get(`https://api.github.com/users/${user}/repos`)
            .then((res) => {
              console.log(res.data);
              setRepos(res.data);
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    };
    data();
  }, []);
  return (
    <>
    <div className='section'>

    
      <div className="card-details">
        <img src={listUser.avatar_url} alt="" />
        <div className="user">
          <div className="details_user">
            <div className="followers_details">
              <p>{listUser.followers}</p>
              <p>Seguidores</p>
            </div>
            <div className="followers_details">
              <p>{listUser.following}</p>
              <p>Seguindo</p>
            </div>
            <div className="followers_details">
              <p>{listUser.public_repos}</p>
              <p>Repositórios</p>
            </div>
          </div>
          <div className="username_details">
            <h3>{listUser.name}</h3>
            <p>{listUser.login}</p>
          </div>
          <div className="description_details">
            <p>{listUser.bio}</p>
            <p>{listUser.location}</p>
          </div>
        </div>
      </div>
      <div>
        {repos &&
          repos.map((repo) => {
            return (
              <>
                <Card className="Card-details"
                  username={repo.full_name}
                  image={listUser.avatar_url}
                  name={repo.name}
                  description={repo.description}                 
                  route={repo.html_url}
                  language={repo.language}
                  location={repo.created_at}
                  


                />
              </>
            );
          })}
      </div>
      </div>
    </>
  );
}