import  ReactDOM  from 'react-dom';
import { Welcome } from './Welcome'

const app = <Welcome name = "Taha" />;
const root = document.querySelector("#root");

ReactDOM.render(app, root);
