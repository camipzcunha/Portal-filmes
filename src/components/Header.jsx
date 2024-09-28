import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="bg-pink-800 flex  text-white justify-around h-14 items-center">
                <div>
                    <h1 className="font-bold font-free text-3xl uppercase">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4 font-free">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}