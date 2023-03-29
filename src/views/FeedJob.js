import Feeds from "../components/Feeds";
import SearchFeed from "../components/SearchFeed";


const FeedJob = () => {
    return (
        <>
        
    <div className="container">
            <div className="row ">
                <h1>Feed</h1>
                <div className="col-md-3 "><SearchFeed/></div>
            
                <div className="col-md-9 "><Feeds /></div>
            </div>

    </div>
        </>
    )
}

export default FeedJob;