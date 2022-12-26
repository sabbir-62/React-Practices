import React from 'react'



export default class Form extends React.Component {
  state = {
    title: 'JavaScript',
    text: 'Hello world',
    library: 'React',
    isAwesome: true
  };


  handleChange = (e) => {
   console.log(e);
   
   if(e.target.type === 'text'){
    this.setState({
    title: e.target.value
     })
   }
   else if(e.target.type ==='textarea'){
    this.setState({
    text: e.target.value
     })
   }
   else if(e.target.type ==='select-one'){
    this.setState({
      library: e.target.value
    })
   }
   else if(e.target.type === 'checkbox'){
    this.setState({
      isAwesome: e.target.checked
    })
   }
  }


  submitHandler = (e) =>{
    e.preventDefault();
    const {title, text, library, isAwesome} = this.state;
    console.log(title, text, library, isAwesome)
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
            <input type = 'text' placeholder='Enter Title' value={this.state.title} onChange= {this.handleChange}></input>

            <br></br><br></br>
            <textarea name = "text" value= {this.state.text} onChange = {this.handleChange}></textarea>

            <br></br><br></br>
            <select value = {this.state.library} onChange= {this.handleChange}>
              <option value = "React">React</option>
              <option value = "Angular">Angular</option>
            </select>

            <br></br><br></br>
            <input type = "checkbox" checked = {this.state.isAwesome} onChange = {this.handleChange}></input>

            <br></br><br></br>
            <input type = "submit" value = "Submit"></input>
        </form>
      </div>
    )
  }
}
