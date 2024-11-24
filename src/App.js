import './App.css';
import "bulma/css/bulma.css";
import Navbar from './components/Navbar.js';
import FormField from './components/FormField.js';
import SignupForm from './components/SignupForm.js';
import CoolButton from './components/CoolButton.js';
import Message from './components/Message.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Username" type="text" placeholder="e.g. John Doe" />
      <FormField label="Email" type="email" placeholder="e.g. johndoe@example.com" />
      <SignupForm />
      <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton isLight>Button 2</CoolButton>
      <br></br>
      <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi SUIIIIIIII</strong>.
      </Message>
    </div>
  );
}

export default App;