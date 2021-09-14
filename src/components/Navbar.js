import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 65px;
    background-color: gray;
`;

const Navmenu = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

`;

const Logo = styled.div`
   

`
const SearchBar = styled.div`
   

`
const SignIn = styled.div`
   

`






const Navbar = () => {
    return (
        <Container>
            <Navmenu>
                navbar
            </Navmenu>
        </Container>
    );
};

export default Navbar;