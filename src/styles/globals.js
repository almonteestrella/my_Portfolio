import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
};

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
};

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
     scroll-behavior: smooth !important;
    

  }
  body {
   
    font-family: 'Poppins';
    font-size: 1.6rem; 
    cursor: default;
    transition: all 0.50s linear;

  }
  h1,h2,h3,h4,h5,h6,button {
       font-family: 'Poppins';
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .underline {
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;
                      
  }





  .h3 {
        text-align: center;
        text-transform: capitalize;
        padding-top: 3rem;
      
    }

 

        .modal {        
          background: ${(props) => props.theme.formBg};        
       
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
           position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
     
        
      }
  

      

           .dark-mode {
            cursor: pointer;
            background: none;
            border: none;
            font-size: 2.5rem;
           
            & svg {
                color: #0252cd;
            }
        }



       

 

    


`;

export default GlobalStyles;
