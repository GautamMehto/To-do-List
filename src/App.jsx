import Background from "./Components/Background"
import Foreground from "./Components/Foreground"

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-800 relative">
      <Background />
      <Foreground />
    </div>
  )
}

export default App