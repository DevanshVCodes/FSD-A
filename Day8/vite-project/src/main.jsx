import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Marks from './Marks.jsx';
import DisplayMarks from './DisplayMarks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App Name={'Devansh Vashishtha'} Mail={'devansh131202@gmail.com'} Phone={9548318252}/>
    <Marks m1={87} m2={85} m3={84}/>
    <Marks m1={90} m2={90} m3={89}/>
    <DisplayMarks />
  </StrictMode>
);
