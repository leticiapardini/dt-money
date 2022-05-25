import TransitionTable from "../TransitionTable"
import {Container} from "./styles"
import Summary from "../Summary"

function Dashboard () {
  return (
    <Container>
      <Summary/>
      <TransitionTable/>
    </Container>
  )
}

export default Dashboard