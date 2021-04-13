import React, { useRef } from 'react';
import { render } from 'react-dom'
import { Component } from 'react';
import EmailEditor from 'react-email-editor';

export class App extends Component {
    render() {
      return <div>
          <div>
          <button onClick={this.exportHtml}>Export HTML</button>
          <button onClick={this.saveDesign}>Save Design</button>
          </div>
        <EmailEditor
          ref={editor => this.editor = editor}
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
          console.log('saveDesign', design)
        })
      }
  }