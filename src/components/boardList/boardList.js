import { useEffect, useState } from 'react';
import './boardList.css';
import BoardCard from '../BoardCard/BoardCard';

const BoardList = () => {
    const [boards, setBoards] = useState ([]);
    useEffect (() => {
         fetch (`http://localhost:5000/api/Boards`)
            .then ((res) => res.json())
            .then ((json) => setBoards(json));
    }, []);

    return (
        <div>
        <span className="pinsList__title">Boards</span>
        <div className="boardsList__container">
            {boards.map((board) =>(
                <BoardCard board={board} key={board.id} />
            ) )}
        </div>
        </div>
    )

};
export default BoardList; 

