import Banner from "../Banner/Banner";
import Navbar from '../Navbar/Navbar';

export function Home () {
    return (
        <div className="bg-purple-950 min-h-screen">
            <div>
                <Navbar />
            </div>
            <Banner />
        </div>
    );
}

export default Home;