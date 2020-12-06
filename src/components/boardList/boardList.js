import { useEffect, useState } from 'react';
import './boardList.css';
import BoardCard from '../BoardCard/BoardCard';

const BoardList = () => {
    const [boards, setBoards] = useState ([]);
    useEffect (() => {
         fetch ("http://localhost:5000/api/boards")
            .then ((response) => response.json())
            .then ((json) => setBoards(json));
    }, []);

    return (
        <div className="boardsList__container">
            {boards.map((board) =>(
                <BoardCard board={board} />
            ) )}
        </div>
    )

};
export default BoardList; 

