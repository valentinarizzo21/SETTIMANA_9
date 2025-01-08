import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import CardsGenerated from "./components/CradsGenerated";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <CardsGenerated/>
        </section>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
