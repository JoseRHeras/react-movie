// Routes
import { Link } from 'react-router-dom';

// Images
import RMBDLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmdb_logo.svg';



import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMBDLogo} alt='rmbt-logo' />
                </Link>
                <TMDBLogoImg src={TMBDLogo} alt='tmbt-logo' />    
            </Content>
        </Wrapper>
    )
}

export default Header



