import {css} from '@emotion/css'



export const darkTheme = css`

  html {
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
  }
  .brand-logo {
    left: 30px;
  }
  .header {
    max-width: 1220px;
    margin-left: 100px;
    margin-right: auto;
    padding: 0 10px;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .deep-purple.lighten-2 {
    margin-bottom: 50px;
  }
  .create_page {
    padding: 0 30px;
  }
  .header__title {
    font-size: 40px;
    font-weight: 400;
    line-height: 65px;
    text-transform: uppercase;
    margin-bottom: 25px;
    text-align: center;
  }
  .header__subtitle {
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 30px;
    margin-right: 10px;
  }
  .header__text {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 20px;
    position: relative;
  }
  .header__text::before {
    content: "";
    height: 2px;
    width: 660px;
    background-color: grey;
    position: absolute;
    bottom: 40px;
  }
  .phone {
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
  }
  .header__photo {
    display: flex;
    text-align: center;
    align-items: center;
  }
  .header__img {
    height: 500px;
    width: 500px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-top: 80px;
  }
  .header__link {
    max-width: 200px;
  }
  .social__link {
    margin-bottom: 10px;
  }
  .header__links + .header__links {
    margin-left: 30px;
  }
  .contacts__link {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 993px) {
    .container {
      width: 100%;
    }
  }
  .phone,
  .mail {
    text-decoration: none;
    font-weight: 300;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 10px;
    position: relative;
    color: grey;
  }
  .phone:hover,
  .mail:hover {
    color: #9575cd;
  }

  .header__title {
    font-size: 40px;
    font-weight: 400;
    line-height: 65px;
    text-transform: uppercase;
    margin-bottom: 25px;
    text-align: center;
    display: block;
  }
  .header__inner-1{
    display: flex;
    justify-content: space-between;
  }

  .projects {
    display: flex;
    justify-content: space-between;
  }
  .project {
    width: 300px;
    height: 500px;
    border: 2px solid #9575cd;
    margin-right: 50px;
    text-align: center;
    border-radius: 20px;
  }
  .projects__name {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .projects__photo {
    height: 250px;
    width: 250px;
    margin-bottom: 20px;
  }
  .projects__info{
    overflow: auto;
    height: 100px;
    width: 241px;
    margin: 25px;
  }


  .popup{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  h2{
    cursor: help;
    margin: 0;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 2px solid grey;
    margin-bottom: 40px;
  }
  .button__send{
    text-align: center;
  }
  .popup__form{
    text-align: center;
    padding: 10px 30px;
    color: #9575cd;
    border: 2px solid #9575cd;
    border-radius: 15px;
    background-color: #fff;
    margin-top: 25px;
    margin-bottom: 40px;
    margin-right: 100px;
    transition: all .3s;
  }
  .popup__form:hover{
    color:#fff;
    background-color: #9575cd;
  }
  .popup__send{
    text-align: center;
    padding: 10px 30px;
    color: #9575cd;
    border: 2px solid #9575cd;
    border-radius: 15px;
    background-color: #fff;
    margin-top: 40px;
    transition: all .3s;
  }
  .popup__send:hover{
    margin-top: 35px;
    padding: 15px 35px;
    color:#fff;
    background-color: #9575cd;
  }

  #close{
    color:#aaa;
    font-size: 28px;
    font-weight: bold;
    margin-left: auto;
    transition: all .3s;
  }
  #close:hover,
  #close:focus{
    color:black;
    text-decoration: none;
    cursor: pointer;
  }
  .group{
    margin: 30px;
    padding: 5px;
  }
  label{
    padding-left: 10px;
  }
  input[type=text]:not(.browser-default):focus:not([readonly]){
    border-bottom: 1px solid #cd38f5;
    padding: 0 15px;
    width: 93%;
  }
  input[type=text]:not(.browser-default){
    margin: 0 0 15px 0;
  }
  input::placeholder{
    padding: 0 15px;
  }


  .popup__header{
    color:black;
    display: flex;
    padding: 2px 16px;
  }
  .popup__body{
    padding: 2px 16px;
  }
  .popup__footer{
    padding: 2px 16px;
    background-color: #5c82b8;
    color:white;

  }
  .popup__content{
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2), 0 6px 20px 0 rgba(0,0,0, 0.19);
    animation-name: animatetop;
    animation-duration: .4s;
  }
  @keyframes animatetop {
    from{
      top: -300px;
      opacity: 0;
    }
    to{
      top: 0;
      opacity: 1;
    }
  }

`
