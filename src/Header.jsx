function Header(){
    return(<>
 <div className="container">
<div className="name">
    <h3>Timeline.</h3>
    <span>EN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FR</span>
</div>
<div className="navigation">
<nav>
    <span>Location</span><span>Contact</span><span>About</span>
    <img src="four-dots-square.svg" height={30} />
</nav>
</div>
 </div>
 <div className="Selectors">
<nav>
    <span>PERSONS</span><span>PLACES</span><span>STORIES</span>
</nav>
</div>
</>
    );
}
export default Header