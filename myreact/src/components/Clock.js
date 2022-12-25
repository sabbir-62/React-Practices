import React from "react";


// let local = (locale) => {
//     setInterval(() =>{
   
//       let element = (
//         <h1>Hello {new Date().toLocaleTimeString(locale)}</h1>
//       )
        
//         ReactDOM.render(element, document.getElementById('root'))
//       }, 1000)
//   }
  
//   local('bn-BD')
  
  
  
  
  class Clock extends React.Component{

    // constructor(props){
    //   super(props);
    //   this.state = {
    //     date: new Date()
    //   }
    // }

    state = {
      date: new Date(),
      locale: "bn-BD"
    }
    
    componentDidMount(){
      this.clockTimer = setInterval(() => {
       this.tick();
      }, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.clockTimer)
    }

    handleClick = (locale) => {
      this.setState({
        locale: locale
      })
    }

    tick(){
      this.setState({
        date: new Date()
      })
    }

    render(){
       const {locale} = this.state;
      return(
        <div>
          <h1>{new Date().toLocaleTimeString(locale)}</h1>
          <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>Click Me</button>
          <button type="button" onClick={() => this.handleClick('en-US')}>Click Me</button>
        </div>
      );
    }
  }

  export default Clock;