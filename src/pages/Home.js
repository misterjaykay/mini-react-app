import React, { useContext } from 'react';
import Card from '../components/Card';
import KeywordContext from '../utils/KeywordContext';

function Home(props) {
    const { keyword, setKeyword } = useContext(KeywordContext);

    const InputChange = ({ target }) => {
        const { name, value } = target;
        console.log(name, value);
        setKeyword(value);
    }

    return(
        <div>
            <form>
                <label for="search">Search</label>
                <input onChange={InputChange} type="text" name="search"></input>
                <button type="submit">Submit</button>
            </form>
            <Card />
        </div>
    )
}

export default Home;