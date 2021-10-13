// Styles
import {Wrapper , Content } from './BreadCrum.styles';

//Routes
import {Link} from 'react-router-dom'

const BreadCrum = ({title}) => (
    <Wrapper>
        <Content>
            {<Link to='/'>Home</Link>}
            <span>|</span>
            <span>{title}</span>
        </Content>
    </Wrapper>
)

export default BreadCrum