//Assets
import { BsSearch } from "react-icons/bs";
//Imports
import { useState } from "react";
import './search.style.css';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState('');
    
    const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loadUser(userName)
    }

    return (
        <div id="search-box">
            <h2>Busque por um usuário</h2>
            <p>Conheça seus melhores repositórios</p>
            <form onSubmit={onSearch}>
                <input 
                    type="text" 
                    placeholder="Digite o nome de usuário"
                    onChange={(e) => setUserName(e.target.value)} 
                />
                <button type="submit"> <BsSearch /> </button>
            </form>
        </div>
    );
};

export default Search

