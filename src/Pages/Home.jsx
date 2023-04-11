import { useState } from 'react';
import { Card } from '../../componentes/Card/Card';
import './HomeStyle.css';
import axios from 'axios';
import {BsSearch} from "react-icons/bs"



export function Home() {
  const [user, setUser] = useState('');
  const [listUser, setListUser] = useState();  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(user);
    }
  }
  const handleSearch = async () => {
    await axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        console.log(response);
        setListUser(response.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className= "title">
        <h1>Search Devs</h1>
      </div>
      <div className="search">
        <input
          type="text"
          required
          placeholder="Digite aqui..."
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleSearch()}>
          <BsSearch/>
          Buscar
        </button>
      </div>
      <div>
        {listUser && (
          <Card className="card-home"
            image={listUser.avatar_url}
            name={listUser.name}
            username={listUser.login}
            description={listUser.bio}
            location={listUser.location}
            route={`/profile/${listUser.login}`}
          />
        )}
      </div>
    </>
  );
}