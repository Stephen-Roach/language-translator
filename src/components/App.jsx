import React, { useState } from 'react';
import Field from './Field';
import Languages from './Languages';
import Translate from './Translate';
import './styles.css';

function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('');

  return (
    <div className='App'>
      <Field label='Enter English' onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
