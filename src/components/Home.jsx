import { useState } from "react";
import '../App.css' 
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate = useNavigate('') 
    const [searchValue, setSearchValue] = useState('');  
    // const apikey = '3c081bb7' ; 
    const apikey = 'Your Api Key' ; 


    const handleClick = async() => {
        
        try{
            // get Response << You have to get a apikey in omdbapi.com >> and put it in apikey 
            const response = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=${apikey}`);
            let x = response.data ; 

            // Render the Result based of data.Respones 
            { response.data.Response === 'True' ? navigate('/result' , { state:x })  : alert("Movie Not Found !") ; setSearchValue('') } 

        }catch(err){
            console.log(err) 
        }

    };

    return (
        <div className='h-screen'>
            <div className='flex flex-col items-center justify-center text-center h-screen gap-7'>
                <div className="relative w-[300px]">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    className="h-[55px] pl-12 pr-5 border-none shadow-lg rounded-3xl rounded-l-none bg-slate-700 w-full text-white font-sans text-2xl"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleClick}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                    />
                </svg>
                </div>
                <h1 className="text-4xl font-extralight">
                Search <span className="text-blue-600 font-mono">Movies/Series</span>
                </h1>
            </div>
        </div>
    );
}


