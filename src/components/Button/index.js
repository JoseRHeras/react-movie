import { Wrapper } from "./Button.styles";

const Button = ({text, callback}) => (
    <Wrapper type={text} onClick={callback}>
        {text}
    </Wrapper>
)

export default Button