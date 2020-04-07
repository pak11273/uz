import { Component } from 'react';
import styled from 'styled-components'

const Style = styled.div`
  /**
   * Create the loop delay with
   * the extra keyframes
   */
    @-webkit-keyframes moveup {
      0%, 60%, 100% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
      }
      25% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
      }
    }
    @keyframes moveup {
      0%, 60%, 100% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
      }
      25% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
      }
    }
    @-webkit-keyframes movedown {
      0%, 60%, 100% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
      }
      25% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
      }
    }
    @keyframes movedown {
      0%, 60%, 100% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
      }
      25% {
        -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
                transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
      }
    }
    /**
     * Square layer styles
     */
    .layer {
      display: block;
      position: absolute;
      height: 3em;
      width: 3em;
      box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
      -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg);
              transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg);
    }
    .layer:nth-of-type(1) {
      background: #534a47;
      margin-top: 1.5em;
      -webkit-animation: movedown 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.9s infinite normal;
              animation: movedown 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) 0.9s infinite normal;
    }
    .layer:nth-of-type(1):before {
      content: '';
      position: absolute;
      width: 85%;
      height: 85%;
      background: #37332f;
    }
    .layer:nth-of-type(2) {
      background: #5a96bc;
      margin-top: 0.75em;
    }
    .layer:nth-of-type(3) {
      background: rgba(255, 255, 255, 0.6);
      -webkit-animation: moveup 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) infinite normal;
              animation: moveup 1.8s cubic-bezier(0.39, 0.575, 0.565, 1) infinite normal;
    }
    
    /* Stage and link styles */
    
    .container {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
    }
    
    .link {
      position: absolute;
      top: 30%;
      left: 50%;
      color: rgba(255, 255, 255, 0.5);
      font: 400 1em Helvetica Neue, Helvetica, sans-serif;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
    }
    .link a {
      color: #ea4c89;
      text-decoration: none;
    }
`
export default Style
