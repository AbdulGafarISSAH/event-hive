import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
    <>
    <Navbar/>
    <section className="bg-[url(./assets/images/hero.png)] h-[596px] w-[95%] mx-auto bg-cover relative">
    <h1 className="text-big-heading text-white w-[30%] mx-auto uppercase text-center pt-32">Made FOR THOSE who do</h1>
    
    <form className="bg-navy-blue w-[90%] mx-auto py-6 px-10 flex flex-row justify-between rounded-md absolute -bottom-12 left-[5%]">
        <div className="flex flex-col w-[30%]">
            <label htmlFor="Location" className="text-white">Location</label>
            <select name="location" id="location" className="bg-white p-2 rounded-md">
            <option selected disabled>Choose Location</option>
            <option value="accra">Accra</option>
            <option value="kumasi">Kumasi</option>
            </select>
            </div>
        <div className="flex flex-col w-[30%]">
            <label htmlFor="when" className="text-white">When</label>
            <input className="bg-white p-1.5 rounded-md" type="datetime-local" name="when" id="when" />
            
            </div>
        <div className="flex flex-col w-[30%]">
            <label htmlFor="type" className="text-white">Looking For</label>
            <select name="type" id="type" className="bg-white p-2 rounded-md">
            <option selected disabled>Choose Event Type</option>
            <option value="drama">Drama</option>
            <option value="Tech">Tech</option>
            </select>
            <div className="bg-primary text-white size-[60px] flex flex-row justify-center items-center rounded-md">
                <Search/>
            </div>
            
        </div>
    </form>

    </section>
    <section>
        <div className="mt-30">
            <h1>
                <span>Upcoming</span>
                <span>Events</span>
                </h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
            {[1,2,3,4,5,6].map(n=> <EventCard key={n}/>)}
        </div>
    </section>
    <section className="h-[500px]"></section>
    <Footer/>
    </>
    );
}