import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import BookList from "./components/BookList";
//import CardsGenerated from "./components/CradsGenerated";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasyBooks from "./data/fantasy.json";

function App() {
  return (
    <>
     
        <MyNavBar />
      
       
          <MyAlert />
       
          {/* <CardsGenerated/> */}
          <BookList bookList = {fantasyBooks}/>
      
        <MyFooter />
     
    </>
  );
}

export default App;
