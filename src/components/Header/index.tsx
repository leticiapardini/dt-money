
import logo from '../../assets/logo.svg'
import {Container, Content} from './styles';

interface HeaderProps {
  onOpenNewTransaction: () => void;
}

function Header ({onOpenNewTransaction} : HeaderProps) {

  return (
    <Container>
      <Content>
        
          <img src={logo} alt="alt money" />
          <button type="button" onClick={onOpenNewTransaction}>
            Nova transação
          </button>
     
      </Content>
    </Container>
  )
}

export default Header;
