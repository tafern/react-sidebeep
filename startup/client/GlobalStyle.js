import { createGlobalStyle } from 'styled-components';
import { SB_DARK_GREEN } from '../../modules/styleConstants';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #337ab7;
    --success: #5cb85c;
    --info: #5bc0de;
    --warning: #f0ad4e;
    --danger: #d9534f;

    --gray-darker: #222;
    --gray-dark: #333;
    --gray: #555;
    --gray-light: #777;
    --gray-lighter: #eee;

    --facebook: #3b5998;
    --google: #ea4335;
    --github: var(--gray-dark);

    --cb-blue: #4285F4;
    --cb-green: #00D490;
    --cb-yellow: #FFCF50;
    --cb-red: #DA5847;
  }
  
  @font-face {
    font-family: "isocteur";
    src: url('/fonts/ISOCTEUR.ttf');
  }

  html {
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: "Maven Pro";
    color: #8d8d8d;
    margin-bottom: 80px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
  }

  body.isViewDocument {
    padding-top: 20px;
  }

  body.isViewDocument .navbar {
    display: none;
  }

  .navbar {
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
  }
  
  .navbar-default {
    border-color: ${SB_DARK_GREEN};
  }
  
  .navbar-default li.active > a {
    background-color: ${SB_DARK_GREEN} !important;
  }
  
  .navbar-default li.open > a {
    background-color: ${SB_DARK_GREEN} !important;
  }
  
  .dropdown-menu {
    padding: 0 !important;
  }

  form label {
    display: block;
  }

  form .control-label {
    display: block;
    margin-bottom: 7px;
  }

  form label.error {
    display: block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: normal;
    color: var(--danger);
  }

  .page-header {
    margin-top: 0;
  }

  .table tr td {
    vertical-align: middle !important;
  }

  /* Removes unnecessary bottom padding on .container */
  body > #react-root > div > .container {
    padding-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    body.isViewDocument {
      padding-top: 40px;
    }

    .page-header {
      margin-top: 20px;
    }
  }
  
  /* Nav Side React Bootstrap */
  .sideBarMenuContainer {
    position: fixed;
    height: 100%;
  }
  .userMenu {
      width: 100%;
      text-align: center;
      margin-right: 0px;
      margin-left: 0px;    
      margin-top: 0px;
  }
  nav.sidebar :global(.navbar-brand) :global(.glyphicon) {
      margin-right: 0px;
  }
  
  /*Remove rounded coners*/
  nav.sidebar.:global(navbar) {
      border-radius: 0px;
  }
  nav.sidebar {
      -webkit-transition: margin 200ms ease-out;
      -moz-transition: margin 200ms ease-out;
      -o-transition: margin 200ms ease-out;
      transition: margin 200ms ease-out;
  }
  
  /* .....NavBar: Icon only with coloring/layout.....*/
  
  /*small/medium side display*/
  @media ( min-width : 768px) {
  
  
      /*Center Brand*/
      nav.sidebar.:global(navbar).sidebar>.container :global(.navbar-brand), :global(.navbar)>:global(.container-fluid) :global(.navbar-brand)
          {
          margin-left: 0px;
      }
      /*Center Brand*/
      nav.sidebar :global(.navbar-brand), nav.sidebar :global(.navbar-header) {
          text-align: center;
          width: 100%;
          margin-left: 0px;
      }
  
      /*Center Icons*/
      nav.sidebar a {
          padding-right: 13px;
      }
  
      /*adds border top to first nav box */
      nav.sidebar :global(.navbar-nav)>li:first-child {
          border-top: 1px #e5e5e5 solid;
      }
  
      /*adds border to bottom nav boxes*/
      nav.sidebar :global(.navbar-nav)>li {
          border-bottom: 1px #e5e5e5 solid;
      }
  
      /* Colors/style dropdown box*/
      nav.sidebar :global(.navbar-nav) :global(.open) :global(.dropdown-menu) {
          position: static;
          float: none;
          width: auto;
          margin-top: 0;
          background-color: transparent;
          border: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
      }
  
      /*allows nav box to use 100% width*/
      nav.sidebar :global(.navbar-collapse), nav.sidebar :global(.container-fluid) {
          padding: 0 0px 0 0px;
      }
  
      /*colors dropdown box text */
      :global(.navbar-inverse) :global(.navbar-nav) :global(.open) :global(.dropdown-menu)>li>a {
          color: #777;
      }
  
      /*gives sidebar width/height*/
      nav.sidebar {
          width: 200px;
          height: 100%;
          margin-left: -160px;
          float: left;
          z-index: 8000;
          margin-bottom: 0px;
      }
  
      /*give sidebar 100% width;*/
      nav.sidebar li {
          width: 100%;
      }
  
      /* Move nav to full on mouse over*/
      nav.sidebar:hover {
          margin-left: 0px;
      }
      /*for hiden things when navbar hidden*/
      :global(.forAnimate) {
          opacity: 0;
      }
  }
  
  /* .....NavBar: Fully showing nav bar..... */
  @media ( min-width : 1330px) {
  
      /*Show all nav*/
      nav.sidebar {
          margin-left: 0px;
          float: left;
      }
      /*Show hidden items on nav*/
      nav.sidebar :global(.forAnimate) {
          opacity: 1;
      }
  }
  
  nav.sidebar :global(.navbar-nav) :global(.open) :global(.dropdown-menu)>li>a:hover, nav.sidebar :global(.navbar-nav) :global(.open) :global(.dropdown-menu)>li>a:focus
      {
      color: #CCC;
      background-color: transparent;
  }
  
  nav:hover :global(.forAnimate) {
      opacity: 1;
  }
  
  section {
      padding-left: 15px;
  }
`;

export default GlobalStyle;
