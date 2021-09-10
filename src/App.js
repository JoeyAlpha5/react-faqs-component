import './App.css';
import FAQS from './Components/ReactFaqsComponent';
// import FAQS from 'react-faqs-component';
function App() {
  const data ={
    faqs:[
        {question:"What is Lorem Ipsum?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},

        {question:"Why do we use it?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},

        {question:"Where does it come from?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
        
        {question:"Where can I get some?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},

        {question:"Why do we use it?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis."},
    ],
    backgroundColor:'#f4f5f9',
    titleColor:"#000",
    answerColor:"#000",
    iconColor:"#000",
  }
  return (
    <div id="body">
      <FAQS data={data}/>
    </div>
  );
}

export default App;
