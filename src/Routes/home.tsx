import { UserProps } from "../Types/user";
import Search from "../Components/Search";
import './home.style.css'
import { useState } from "react";

const Home = () => {
    const [user, serUser] = useState<UserProps | null>(null);

    const loadUser = async(userName: string) => {
        let res = await fetch(`https://api.github.com/users/${userName}`);
        let data = await res.json();

        let { avatar_url, login, location, followers, following } = data;

        let userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }
        serUser(userData);
    }

    return(
        <div id="home">
            <Search loadUser={loadUser} />

            <div className={user ? 'box-result box-result-on' : 'box-result' }>
                {user ? <img src={user.avatar_url} alt="Imagem qualquer" /> : ''}
                {user ? <p>{user.login}</p> : ''}
                {user ? <p>{user.location}</p> : ''}
            </div>
        </div>
    )
}

export default Home;