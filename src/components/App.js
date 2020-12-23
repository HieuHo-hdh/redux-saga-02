import React, {Component} from 'react';

function* testing()
{
  //yield 1;
  //yield 2;
  //yield 3;
  while (true) //Inifite loops -- takeEvery: also true loops, constantly waiting and watching for any actions we pass in
  {
    yield 1;
    yield 2;
    yield 3;
  }
}
class App extends Component {
    render(){
      const iterator = testing();
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      console.log(iterator.next());
      return (
      <div>
        test
      </div>
    );
  }
}

export default App;
