import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      <Accordion
        title="Title 1"
        content="This is the content"
        defaultExpanded={true}
      />

      <Accordion title="Title 2" content="This is the content" />

      <Accordion title="Title 3" content="This is the content" />
    </div>
  );
}

export default App;
