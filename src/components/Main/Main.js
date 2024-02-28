import './Main.css'
import Reaction from './../../assests/icon-reaction.svg'
import Memory from './../../assests/icon-memory.svg'
import Verbal from './../../assests/icon-verbal.svg'
import Visual from './../../assests/icon-visual.svg'





function Main(){
    return(
       <div className='main'>
        <h4>Summary</h4>
        <div className='flex'>
        <div className='box1'>
            <div className='icon-div'>
                <img src={Reaction}/>
                <span id='reaction'>Reaction</span>
            </div>

            <div className='numbers-div'>
                <p className='numbers'>80<span>/100</span></p>
            </div>


        </div>
        <div className='box2'>
            <div >
                <img src={Memory}/>
                <span id="memory" >Memory</span>
            </div>
            <div className='numbers-div'>
                <p className='numbers'>80<span>/100</span></p>
            </div>
        </div>
        <div className='box3'>
            <div >
                <img src={Verbal}/>
                <span id="verbal">Verbal</span>
            </div>
            <div className='numbers-div'>
                <p className='numbers'>80<span>/100</span></p>
            </div>
        </div>
        <div className='box4'>
            <div >
                <img src={Visual}/>
                <span id="visual">Visual</span>
            </div>
            <div className='numbers-div'>
                <p className='numbers'>80<span>/100</span></p>
            </div>
        </div>
        </div>
        <button>Continue</button>
       </div>
    )
}

export default Main;
