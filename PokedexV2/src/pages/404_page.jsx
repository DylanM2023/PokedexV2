import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageError = () => {
    
    const navigate = useNavigate()

    return ( 
        <div className="justify-items-center">
            <div className="w-screen h-24 bg-neutral-900 text-center">
                <h1 className="text-6xl text-slate-100 font-body py-4">Pokédex</h1>
            </div>
            <div className="flex-col h-auto rounded-t-2xl border-2 border-black bg-black text-slate-50 mt-24">
                <div className="flex">
                    <h1 className="flex flex-grow text-4xl m-5 font-body">Error</h1>
                    <p className="border-2 border-black w-1/6 text-center text-2xl m-5 font-bold rounded-xl bg-white bg-opacity-25">404</p>
                </div>
                <img className="bg-black" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png' alt="" />
                <p className="text-2xl text-center font-bold border-t-2 border-white font-body bg-black text-white">Page was not found</p>
            </div>
            <button className="border-2 w-96 h-20 my-5 border-black rounded-xl text-2xl" onClick={()=>{navigate('/')}}>Make Ditto change into the home page</button>
        </div>
    );
}
 
export default PageError;