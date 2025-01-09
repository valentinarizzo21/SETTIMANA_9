import SingleBook from "./SingleBook";
import fantasyBooks from "../data/fantasy.json";

const BookList = () =>{
    return(
        fantasyBooks.map((books) =>{
            <SingleBook book ={books}/>
        })
    )
}

export default BookList;