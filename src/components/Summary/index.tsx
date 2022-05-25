import {Container} from "./styles";
import icone from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from  '../../assets/total.svg';
import { useTransaction } from "../../Hooks/useTransactions";



function Summary() {
  const {transactions} = useTransaction();
 
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdrams += transaction.amount
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdrams: 0,
    total: 0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icone} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="Saidas" />
        </header>
        <strong> -
          {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
          }).format(summary.withdrams)}
        </strong>
      </div>
      <div className="green">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
export default Summary;