function Footer(){
    return (
        <div className="footer">
        <div className="media">
            <a href="https://www.facebook.com/?_rdr"><img src="facebook.svg" height={20}/></a>
            <a href="https://x.com/i/flow/login"><img src="twitter.svg" height={20}/></a>
            <a href="https://www.instagram.com/your_instagram_account/"><img src="insta.svg" height={20}/></a>
        </div>
        <div className="copyright">
            <img src="copyright-regular.svg" height={9}/>
            <span>2019</span>
        </div>
        </div>
    );
}
export default Footer;