import React, {useEffect} from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from '../actions/gamesAction';

//Components
import Game from '../components/Game';
// Import Styled Components and Effects frrame
import styled from 'styled-components';
import {motion} from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router";
const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    // Fetch games
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // Get that data back
    const { popular, newGames, upcoming } = useSelector(state => state.games);
    return (
        <GameList>
            {pathId && <GameDetail/>}
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game,id) => (
                    <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={id}></Game>
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game,id) => (
                    <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={id}></Game>
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game,id) => (
                    <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={id}></Game>
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }

`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;


export default Home;