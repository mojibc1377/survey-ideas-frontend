import * as React from 'react';
import { useState } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [text1Value, setText1Value] = useState('');
  const [text2Value, setText2Value] = useState('');

  const handleText1Change = (event) => {
    setText1Value(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2Value(event.target.value);
  };
  const handleSubmit = async () => {
    try {
      // Send the data to the backend server
      await axios.post(`https://survey-ideas-backend.onrender.com:10000/ideas`, {
        text1: text1Value,
        text2: text2Value,
      });
      // Clear the text areas after successful submission
      setText1Value('');
      setText2Value('');
      alert('Idea submitted successfully! mamnoon az vaqti ke gozashtid');
    } catch (error) {
      console.error(error);
      alert('Failed to submit your precious idea please try again Later!');
    }
  };

  return (
    
  <div className='app'>
  <header className='header'> salam va khaste nabashid</header>
    <div className='textContainer'>
      <p className='text'>esme man mojtaba e va ye developer am ke daram donbale ide haye jadid migardam vaseye rahat tar kardane zendegie shoma va qatAan dus daram ke az in mozu pul ham dar byaram vagarna ke man asan shomaro nemishnasam hehehe
      </p>
    </div>
    <span>hadaf az dorost kardane in form serfan gereftane ide haye shomast </span>
    <p>lotfan deqqat konid porseshnameye zir daraye 2 qesmate baraye neveshtane idehatune ye qesmat marbut be zendegi shakhsitune baraye mesal tuye zendegi shakhsitun tu karhaye ruzanatun ke kharej az shoqletune fek mikonid che app ya barnameE mitunest meqdare zyadi zaman baratun save kone ya karetun ro kolli rahat tar kone be sheddat 
      age tahala behesh fekr kardid benevisid age ham na lotfan fekr konid 
    </p>
    <p>qesmate baadi marbut be herfeye shoqlitune ke tuye karetun fekr mikardid ke che chizi mitunest ya be bala bordane keyfyate karitun ya afzayeshe sorAtetun ya serfan jologiri az ezafe kari komak kone un ro ham bhesh fekr konid </p>
    <p className='akhari m-bt-2'>be in mozu deqqat konid ke hich mahdudyati baraye neveshtan nadarid mitunid kamel tozih bedid mitunid 500 ta ide poshte ham benevisid va ba khate tire az ham jodashun konid harjur ke rahatid barkhord konid mersi </p>
    <textarea
        className='input-textarea w-full max-h-max px-5 py-5 font-sans'
        type='textarea'
        placeholder='zendegi e shakhsi'
        value={text1Value} // Bind the state value to the text area
        onChange={handleText1Change} // Call the function on text change
      />
      <br />
      <textarea
        className='input-textarea w-full max-h-max px-5 py-5 font-sans'
        type='textarea'
        placeholder='zendegi e herfeE'
        value={text2Value} // Bind the state value to the text area
        onChange={handleText2Change} // Call the function on text change
      />
  <button type="submit" className="sendButton " onClick={handleSubmit}>SEND</button>
  </div>
  );
}

export default App;

