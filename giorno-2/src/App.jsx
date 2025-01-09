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
      <header>
        <MyNavBar />
      </header>
      <main>
        <section>
          <MyAlert />
        </section>
        <section>
          {/* <CardsGenerated/> */}
          <BookList bookList = {fantasyBooks}/>
        </section>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
