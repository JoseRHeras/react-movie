import { useState, useEffect, useRef } from "react";

// Icons
import searchIcon from '../../images/search-icon.svg'

// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({setSearchTerm}) => {
    const [state, setState] = useState('');
    const initial = useRef(true)

    useEffect(() => {

        // Prevents search on component mount
        if (initial.current) {
            initial.current = false
            return
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)

        return () => clearTimeout(timer)

    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='Search Bar'/>
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar