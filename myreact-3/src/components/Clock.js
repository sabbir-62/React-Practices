import React from "react";


/*<---Dynamic Clock in simple way--->*/
// let local = (locale) => {
//     setInterval(() =>{
   
//       let element = (
//         <h1>Hello {new Date().toLocaleTimeString(locale)}</h1>
//       )
        
//         ReactDOM.render(element, document.getElementById('root'))
//       }, 1000)
//   }
  
//   local('bn-BD')
  
  
  
  
/*<---Dynamic Clock in Class component way--->*/
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

      /*<---Apply condition on button--->*/
      //  let button;
      //  if(locale === 'bn-BD'){
      //   button = (<button type="button" onClick={() => this.handleClick('en-US')}>Click Me</button>)
      //  }
      //  else{
      //   button = (<button type="button" onClick={() => this.handleClick('bn-BD')}>Click Me</button>)
      //  }
      return(
        <div>
          <h1>{new Date().toLocaleTimeString(locale)}</h1>
          {/* {button} */}

          {/* <---Apply condition on button---> */}
          {locale === "bn-BD" ? (<button type="button" onClick={() => this.handleClick('en-US')}>Click Me</button>) : (<button type="button" onClick={() => this.handleClick('bn-BD')}>Click Me</button>)}
        </div>
      );
    }
  }

  export default Clock;