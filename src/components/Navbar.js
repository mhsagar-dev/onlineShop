import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 95px;
    width: display;
    background-color: #D9D9DB;
`;

const NavSection = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left
`;

const Branding = styled.div`
    flex:1;
    align-items: center;
`;

const Logo = styled.h2`
    font-weight: bold;
    
`

const SearchBar = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const Language = styled.span`
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    
`

const SearchIcon = styled.div`
    border:0.5px solid black;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:7px;
`

const Input = styled.input`
    
`

const SignIn = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 15px;
`






const Navbar = () => {
    return (
        <Container>
            <NavSection>
                <Branding>
                    <Logo>
                        foodCorner
                    </Logo>
                </Branding>
                <SearchBar>
                    <Language>EN</Language>
                    <SearchIcon>
                        <Input />
                        <Search style={{fontsize:16}}></Search>
                    </SearchIcon>
                </SearchBar>
                <SignIn>
                    <MenuItem>
                        Sign Up
                    </MenuItem>
                    <MenuItem>
                        Sign In
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={1} color="error">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </SignIn>
            </NavSection>
        </Container>
    );
};

export default Navbar;