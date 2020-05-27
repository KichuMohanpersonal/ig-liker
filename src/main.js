import React ,{Component} from 'react';
import './App.css';
import Axios from 'axios';






class main extends Component {
  state = {
    tx: "",
    val : ''
  };

  handleAdd = async e =>{
    var  cs=e.target.value;
    document.getElementById('show').innerHTML = 'Number of like Selected:  ' + document.getElementById('val').value;
      cs =  document.getElementById('val').value;
      await this.setState({
        val: e.target.value
       
      })

  }
  
  handleSubmit = e =>{
    if (this.state.val == 0)
      {   
    alert("Invalid Like");
     }
  else{
    e.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    formData.append('tx',this.state.tx);
    formData.append('val',this.state.val);
    const url = "http://filmengineer.000webhostapp.com/insert.php";
    Axios.post(url,formData)
      .then(res=>alert('Saved'))
      .catch(error=>console.log(error));

       }

  }

  render()
  {
  return (
    <div className="App">
     <img src='head.png' className='head' width='1'/>
      <header className="App-header">
        <img src='insta.png' className="App-logo" alt="logo" />
        <p>
         Paste URL below
        </p>

               <input onChange={e => this.setState({ tx: e.target.value })} className="tt" type='text'id='tx' maxlength="60" placeholder='https://instagram.com'/>


              Like <label class='lk'> 0<input  type="range" min="0" max="2" id='val'  onChange={this.handleAdd}/>2</label>


      <div>
          <p id='show'>Number of like Selected: 0</p>
       
       </div>


               <input className='but' type="submit" value='Like' onClick={this.handleSubmit}/>


      </header>
    </div>
  );
  }
}

export default main;
