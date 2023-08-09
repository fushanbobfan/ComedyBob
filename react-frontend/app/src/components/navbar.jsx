import { Link } from "wouter";

import raven from "../assets/raven.png";

function Navbar() {
    return (
         <nav className="container mx-auto relative flex flex-wrap items-center justify-between">
             <div className="flex justify-normal items-center">
                <img className="max-width-sm" src={raven} width="100" height="100"/>
                <div className="font-bold">
                    Roaring Ravens™
                </div>
             </div>
             <div>
                <Link href="/Home" className="text-2xl inline-block mr-20 hover:text-yellow-400">
                    Home
                </Link>
                <Link href="/generate" className="font-bold text-2xl inline-block mr-20 text-yellow-400 hover:text-amber-500">
                    Generate
                </Link>
                <Link href="/signin" className="text-2xl inline-block mr-20 hover:text-yellow-400">
                    Signin
                </Link>
                <Link href="/summarize" className="text-2xl inline-block hover:text-yellow-400">
                    Saved Jokes
                </Link>
             </div>
         </nav>
    );
}
export default Navbar;