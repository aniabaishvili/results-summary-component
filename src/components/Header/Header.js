import './Header.css'

function Header(){
    return(
    <div className="header">
        <h3>Your Result</h3>
        <div className='number-div'>
            <h1>76</h1>
            <h5>of 100</h5>
        </div>
        <div className='text'>
            <h2>Great</h2>
            <p className='text-p'>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
    </div>
    )
}

export default Header;