# react-faqs-component

## installation
```javascript
npm i react-faqs-component
```
# Usage

### import package and and pass along the required data
```javascript
import FAQS from 'react-faqs-component';
// the data object includes an array of the FAQS and answers, background color, title color, answer color and icon color
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

<FAQS data={data}/>
```

# Preview

![Demo](https://raw.githubusercontent.com/JoeyAlpha5/react-faqs-component/main/src/assets/react-faqs.mp4?raw=true "react-faqs-component")
![Alt text](https://raw.githubusercontent.com/JoeyAlpha5/react-faqs-component/main/src/assets/screenshot0.png?raw=true "react-faqs-component")
![Alt text](https://raw.githubusercontent.com/JoeyAlpha5/react-faqs-component/main/src/assets/screenshot1.png?raw=true "react-faqs-component")