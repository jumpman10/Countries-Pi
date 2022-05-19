import React from 'react'
import '../styles/Skills.css'


function Skills(){
return(
    <div className="skills--ligth">
    <h2>Habilidades</h2>
        <div class='line-skills'>
            <div class='botones'>
            <a class='brand-js'></a>
            <h5>Javascript</h5>
            </div>
            <div class='botones'>
            <a class='brand-sql'></a>
            <h5>PostgresSql</h5>
            </div>
            <div class='botones'>
            <a  class='brand-react'></a>
            <h5>React</h5>
            </div>
            <div class='botones'>
            <a class='brand-html'></a>
            <h5>HTML</h5>
            </div>
            <div class='botones'>
            <a  class='brand-css'></a>
            <h5>CSS</h5>
            </div>
        </div>
        <div class='line-skills'>
            <div class='botones'>
               <a class='brand-node'></a>
               <h5>Node</h5>
            </div>
            <div class='botones'>
               <a  class='brand-redux'></a>
               <h5>Redux</h5>
            </div>
            <div class='botones'>
               <a class='brand-native'></a>
               <h5>React Native</h5>
            </div>
        </div>
</div>
)
}

export default Skills