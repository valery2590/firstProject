import LoginForm from "../components/loginForm/loginForm";
import {useState, useEffect} from 'react';


const LoginPage = () => {

    const [res, setRes] = useState({results:[]})

    useEffect(()=> {
        const getRickMorty = async ()=>{
            const response = await fetch (`https://rickandmortyapi.com/api/character`)
            const data = await response.json();
            console.log(data)
            setRes(data);
        };
        getRickMorty();
    }, [])

    return (
        <div>
            <div>
            {res.results.map((datos) => {
                return <p key ={datos.id}> {datos.name}</p>})}
                </div>
                <div>
            {res.results.map((datos) => {
                return <img key ={datos.id} src={datos.image} />})}
                </div>
                <div>
            {res.results.map((datos) => {
                return <p key ={datos.id}> {datos.origin.name}</p>})}
                </div>
        <LoginForm/>
        </div>
    )
}

export default LoginPage

