import React from "react"
import Callout from "./Callout"

function App() {
    return (
        <main>
            <h1>Welcome!</h1>
            <Callout>
                <h2>Don't miss out!</h2>
                <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p> 
            </Callout> 
            
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            
            <Callout> 
                <img src="https://picsum.photos/id/102/4320/3240" alt="raspberries" width="100%" />
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout>
            
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            
            <Callout>
                <h2>Give us your email. We definitely won't sell it to anyone.</h2>
                <input type="email" placeholder="Enter Email" />
                <button>Sign me up!</button>
            </Callout>
            
        </main>
    )
}

export default App