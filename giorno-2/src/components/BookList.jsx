import SingleBook from "./SingleBook";


const BookList = () =>{
    return(
        this.bookList.map((books) =>{
            <SingleBook book = {books} key={books.asin}/>
        })
    )
}

export default BookList;