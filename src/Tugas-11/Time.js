import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: new Date(),
      times:100,
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
      times:this.state.times-1 
    });
  }
  hide(){
      this.setState({
          
      })
  }


  render(){
    const timer = this.state.times;
    return(
      <>
        <div>
            {
            timer>0
            ?
            <h1 style={{textAlign: "center"}}>
            Sekarang jam {this.state.time.toLocaleTimeString()}     Hitung Waktu Mundur {this.state.times}
            </h1>
            :""
            }
        </div>
        
      </>
    )
  }
}

export default Timer