import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App () {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev">
          <strong>Miguel Angel Durán</strong>
        </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="pheralb">
          <strong>Pablo Hernandez</strong>
        </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="vxnder">
        <strong>Vanderhart</strong>
      </TwitterFollowCard>
    </section>
  )
}