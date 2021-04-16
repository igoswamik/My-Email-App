import React, { useRef } from 'react';
import { render } from 'react-dom'
import { Component } from 'react';
import EmailEditor from 'react-email-editor';
import sample from './sample.json';
import axios from 'axios';
const port = parseInt(process.env.PORT, 10) || 8081;
let jsonfile=sample;

const apiUrl=`http://localhost:${port}/apireact`;

export class App extends Component {
    render() {
        const ContainerMain={
            width: "100%",
            backgroundColor: "lightgrey",
        };
        const OptionBar={
            display: "flex",
            justifyContent: "center",
        }
        const Button={
            backgroundColor: "black",
            color: "white",
            fontSize: "15px",
            padding: "5px 30px",
            borderRadius: "5px",
            margin: "10px 20px",
            cursor: "pointer"
        };
        
      return <div style={ContainerMain}>
              <div style={OptionBar}>
                <button style={Button} onClick={this.exportHtml}>Export HTML</button>
                <button style={Button} onClick={this.saveDesign}>Save Template</button>
                <button style={Button} onClick={this.onLoad}>Edit Saved Template</button>
              </div>
              
                <EmailEditor
                 ref={editor =>this.editor = editor }
                // onLoad={this.onLoad}
                //the ref defined in the EmailEditor component's ref will often times return undefined
              />
            </div>
    }
    exportHtml = () => {
        this.editor.exportHtml(data => {
          const { design, html } = data
          //error regarding CORS policy while making cross origin request
          // axios.post(apiUrl,design)
          //   .then(res=>{
          //       console.log("result obtained=",res);
          //   })
          //   .catch(err=> {
          //     console.log(err);
          //   })
          alert('Output HTML has been logged in your developer console.');
          console.log(html);
        })
      }
      saveDesign = () => {
          this.editor.saveDesign(async(design) => {
            jsonfile=design;
            //now we have our template deign we can send design json to server so that we can save it in  mongoDB Atlas database
            //CORS related error occured on making this api request
            // fetch(apiUrl, {
            //   method: 'POST',
            //   body: JSON.stringify({name: "Kulbhushan"}),
            // })
            //   .then(data => console.log(data))
            //   .catch(err => console.error(err));
            alert('Design JSON has been saved and logged in the developer console.');
            console.log('saveDesign in savedesign', design)
        })
      }
   
      onLoad = () => {
        const json = jsonfile || sample
        if (this.editor !== undefined) {
            this.editor.loadDesign (json);
          } else {
            setTimeout (() => this.editor.loadDesign (json), 3000);
          }        
      }
  }
  