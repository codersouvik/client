import { ButtonGroup,Button, Box,styled} from '@mui/material';

const Component=styled(ButtonGroup)`
       margin-top:30px
`
const StyledButton = styled(Button)`
    border-radius: 50%;
`;

export const GroupBut = () => {
   return(
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>
   )

}

export default GroupBut;

