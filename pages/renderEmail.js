import React, { useRef } from 'react';
import { render } from 'react-dom'
import { Component } from 'react';
import EmailEditor from 'react-email-editor';
import sample from './sample.json';
let jsonfile=sample;

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
          ref={editor => this.editor = editor}
        //   onLoad={this.onLoad}
        //the ref defined in the EmailEditor component's ref will often times return undefined
        />
      </div>
    }
    exportHtml = () => {
        this.editor.exportHtml(data => {
          const { design, html } = data
          console.log('exportHtml', html)
        })
      }
      saveDesign = () => {
        this.editor.saveDesign(design => {
            jsonfile=design
            console.log("inside saveDesign",this.editor);
          console.log('saveDesign', design)
        })
      }
      onLoad = () => {
        const json = jsonfile || sample
        if (this.editor !== undefined) {
            this.editor.loadDesign (json);
          } else {
            setTimeout (() => this.editor.loadDesign (json), 3000);
          }
          
        // if(this.editor){
        //     this.editor.loadDesign(json)
        // }
        // else{
        //     console.log(this.editor);
        // }
        
      }
  }
  