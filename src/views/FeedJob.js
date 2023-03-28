import Feeds from "../components/Feeds";
import SearchFeed from "../components/SearchFeed";

const FeedJob = () => {
    return (
        <>
        
    <div className="container">
            <div className="row ">
                <div className="col w-25"><SearchFeed/></div>
            
                <div className="col w-75"><Feeds /></div>
            </div>

    </div>
        </>
    )
}

export default FeedJob;