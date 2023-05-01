import './App.css';
import Button from "./Button";


function App() {
    return (
    <div className="app">
      <Button visual="link" >Example link</Button>
      <Button visual="button" >Example button</Button>
      <form onSubmit={e => e.preventDefault()}>
          <label>
              Name:
              <input type="text" name="name" />
          </label>
          <Button visual="link" type="submit">Example submit</Button>
      </form>

    </div>
  );
}

export default App;
