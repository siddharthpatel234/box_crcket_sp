import React from 'react'
import '../Components/Contact.css'
export default function contact() {
    return (
        <>
            <div className="con" style={{ margin: '120px', height: '80vh', padding: '80px' }}>
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <img src={require('../Components/address.png')}/>
                            <div className="topic">Address</div>
                            <div className="text-one">Surkhet, NP12</div>
                            <div className="text-two">Birendranagar 06</div>
                        </div>
                        <div className="phone details">
                            <img src={require('../Components/phone.png')} />
                            <div className="topic">Phone</div>
                            <div className="text-one">+0098 9893 5647</div>
                            <div className="text-two">+0096 3434 5678</div>
                        </div>
                        <div className="email details">
                            <img src={require('../Components/email.png')} />
                            <div className="topic">Email</div>
                            <div className="text-one">codinglab@gmail.com</div>
                            <div className="text-two">info.codinglab@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <h4>
                            If you have any work from me or any types of quries related to my
                            tutorial, you can send me message from here. It's my pleasure to help
                            you.
                        </h4>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div className="input-box message-box"></div>
                            <div className="button">
                                <input type="button" defaultValue="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
