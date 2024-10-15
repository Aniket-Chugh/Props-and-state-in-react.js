import DestructingProps from "./destructingProps"
import FunctionAsProps from "./FunctionAsProps"
import PropsInReact from "./Props"
import PropsandState from "./PropsAndStateBoth"
import CartItems from "./RealPropUse/Cart"


function App() {

  return (
    <div>
        <h2>
        props in react.js
    </h2>
    <PropsInReact name="Aniket" age="45"></PropsInReact>
    <h1>Next </h1>
    <PropsInReact  name ="Anil" age="12"></PropsInReact>
<h3>Destructive Props</h3>

<DestructingProps name={"Aniket"}></DestructingProps>
<h3>Function as a props</h3>
<FunctionAsProps></FunctionAsProps>
<h3>Real use of Props and destructive  props </h3>
<CartItems></CartItems>
<h3>Props and state at one point </h3>
<PropsandState initialValue={0}></PropsandState>
    </div>
  )
}

export default App
