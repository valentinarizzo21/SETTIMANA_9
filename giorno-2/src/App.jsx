import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <header>
        <MyNavBar />
      </header>
      <main>
        <section>
          <h1>La Tua Libreria Virtuale!</h1>
          <MyAlert />
        </section>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
