import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFisrtNumber] = useState('0');

  const handleAddChar = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleClear = () => {
    setCurrentNumber('0');
  }

  const handleOperation = (string) => {
    let op = string.match(/[+\-*/]/g);
    let values = string.split(/[+\-*/]/).map(n => Number(n));
    let arr = [];

    for (let i = 0; i < values.length; i++) {
      arr.push(values[i]);
      if (op[i]) arr.push(op[i]);
    }

    let res = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i])) {
        if (arr[i-1] == '+') res += arr[i];
        else if (arr[i-1] == '-') res -= arr[i];
        else if (arr[i-1] == '*') res *= arr[i];
        else if (arr[i-1] == '/') res /= arr[i];
        else if (arr[i-1] == '%') res = (res * arr[i]) * 0.01;
      } else {//começa com numero negativo

      } 
    }

    console.log(res)
  }
  return (
    <Container>
      <Content>
        <Input value={ currentNumber }/>
        <Row>
          <Button label="*" onClick={() => handleAddChar('*')}/>
          <Button label="/" onClick={() => handleAddChar('/')}/>
          <Button label="%" onClick={() => handleAddChar('%')}/>
          <Button label="C" onClick={handleClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddChar('7')}/>
          <Button label="8" onClick={() => handleAddChar('8')}/>
          <Button label="9" onClick={() => handleAddChar('9')}/>
          <Button label="-" onClick={() => handleAddChar('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddChar('4')}/>
          <Button label="5" onClick={() => handleAddChar('5')}/>
          <Button label="6" onClick={() => handleAddChar('6')}/>
          <Button label="+" onClick={() => handleAddChar('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddChar('1')}/>
          <Button label="2" onClick={() => handleAddChar('2')}/>
          <Button label="3" onClick={() => handleAddChar('3')}/>
          <Button label="=" onClick={() => handleOperation(currentNumber)}/>
        </Row>
        <Row>
          <Button label="|"/>
          <Button label="0" onClick={() => handleAddChar('0')}/>
          <Button label="." onClick={() => handleAddChar('.')}/>
          <Button label="|"/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
