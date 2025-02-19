import Card from "../components/Card/Card";
const Home = () => {
    return (
        <div className="pt-10">
            <h1 className="text-black font-bold bg-amber-300">Welcome to the Home Page</h1>
            <p>This is the default page for your website.</p>
            <Card/>
        </div>
    );
}

export default Home;