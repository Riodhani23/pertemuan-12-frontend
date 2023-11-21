import styled from "styled-components";

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    border-radius: 10px;
    color: white;
    background: #2f385b;
    latter-spacing: 2px;
    font-weight: bold;
    cursor: pointer;

    background-color: ${function(props) {
        if(props.variant === "primary"){
            return "#25388c"
        }

        else if (props.variant === "secondary"){
            return "#ee8bdf"
        }

        else {
            return "#6c6c6c8b"
        }
    }};
`

export default Button