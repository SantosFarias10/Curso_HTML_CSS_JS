import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section classname="App">
            <TwitterFollowCard  
                userName="React">
                    React Official
            </TwitterFollowCard>
            <TwitterFollowCard
                userName="Belgrano">
                    Belgrano 1905
            </TwitterFollowCard>
        </section>
    )
}