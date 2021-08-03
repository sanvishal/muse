import Header from "./components/Header/Header";
import Sidenav from "./components/Sidenav/Sidenav";
import BodyContent from "./views/BodyContent";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App flex">
      <main>
        <Header />
        <section className="mainContent">
          <Sidenav />
          <div class="bodyContent">
            <BodyContent />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
