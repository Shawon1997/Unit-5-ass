import React from 'react';
import './Contact.css';
import contactImg from "../../img/profile2.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Get in Touch</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via Phone:</p>
                            <p className="hire__text white"><strong>+91 9123665757</strong></p>
                           <div>
                             <div className='contact'>
                             <a href='https://www.linkedin.com/in/shawon1997/' target="_blank"><img src='https://tse1.mm.bing.net/th/id/OIP.YAP68AIxePtv-3cv8ffzggHaHw?pid=ImgDet&rs=1' className='image'/></a>
                             <a href='https://twitter.com/Shawon_1997' target="_blank"><img src='https://pngmind.com/wp-content/uploads/2019/08/Twitter-Logo-Png-Transparent-Background.jpg' className='image'/></a>
                             <a href='mailto:16haw87@gmail.com' target="_blank"><img src='https://th.bing.com/th/id/R.b5f81584562d4ed99db82f3f00a03d7f?rik=f3nE8goyX3mKUQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2femail_logo-1007x1007.png&ehk=BPAHVpcwyH4%2feeE08FTn%2fkAQa9N9buGi0lbMxLWTSqg%3d&risl=&pid=ImgRaw&r=0' className='image'/></a>
                          
                             </div>
                             <div className='contact'>
                            <a href='https://www.facebook.com/bookmarks/' target="_blank"> <img src='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19758.png' className='image'/></a>
                            <a href='https://www.instagram.com/shawon6054/?hl=en' target="_blank"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' className='image'/></a>
                            <a href='https://github.com/Shawon1997' target="_blank"><img src='https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png' className='image'/></a>
                             
                             
                             </div>
                           </div>
                        </div>
                       <div className='thank'><h2>Thank You Visit 👋 Again</h2></div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact