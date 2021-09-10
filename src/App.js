import './App.css';
import FAQS from './Components/ReactFaqsComponent';
function App() {
  const data ={
    faqs:[
        {question:"What is Lorem Ipsum?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nulla ut libero blandit, suscipit euismod dui condimentum. Donec nulla sapien, pulvinar mattis risus non, scelerisque consectetur turpis. Duis tellus sapien, laoreet ac pharetra eget, mattis ac nulla. Proin tincidunt metus ut vestibulum interdum. Duis sed aliquet nunc, id aliquam ligula."},
        {question:"Why do we use it?",answer:"Pellentesque pulvinar rhoncus libero. Proin ut arcu et eros malesuada accumsan ac a est. Donec elementum diam et diam convallis, et hendrerit tellus fermentum. Fusce volutpat ullamcorper eros sed pellentesque. Suspendisse nec elementum mauris. Nulla facilisi."},
        {question:"Where does it come from?",answer:"Sed facilisis pretium sapien vel hendrerit. In quis aliquam eros. Morbi ac arcu vitae nibh porttitor suscipit. Nam consequat ullamcorper semper. Nunc a pretium lectus, et blandit diam. Donec semper lacus in posuere placerat. Suspendisse venenatis tempus posuere. Duis auctor scelerisque sodales. Donec orci leo, ultricies ac efficitur at, malesuada vel nibh. Praesent dapibus velit in faucibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam est magna, vestibulum in vehicula non, commodo nec leo. Pellentesque mollis, purus eget posuere feugiat, urna diam sodales quam, at congue metus turpis eu leo. Nullam eget eros ac urna tincidunt ullamcorper quis et massa. Vestibulum ac tincidunt elit."},
        {question:"Where can I get some?",answer:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."},
        {question:"Why do we use it?",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},
    ],
    background:'#f4f5f9',
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
