import useTitle from "../../../hooks/useTitle";
import ComicOffline from "../ComicOffline/ComicOffline";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Promotion from "../Promotion/Promotion";
import Shop from "../Shop/Shop";
import SupportHub from "../SupportHub/SupportHub";

const Home = () => {
    useTitle('Home | Superfinity');
    return (
        <div className="text-white">
            <Header></Header>
            <Gallery></Gallery>
            <Shop></Shop>
            {/* <Comic></Comic> */}
            <ComicOffline></ComicOffline>
            <Promotion></Promotion>
            <SupportHub></SupportHub>
        </div>
    );
};

export default Home;