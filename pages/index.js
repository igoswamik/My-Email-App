import { Heading, Page } from "@shopify/polaris";
import {App} from "./renderEmail";
const Index = () => (
  <Page>
    <App/>
    
    <Heading>Note:</Heading>
    <p> The ref defined in the EmailEditor component's ref which was accessed from 'react-email-editor' as suggested will often times return undefined </p>
    <p> In case email editor is not visible comment out line 40:  ref={editor =>this.editor = editor }  in pages/renderEmail.js and save then let the page reload and editor template will get render but then methods defined on this.editor will not work unless you remove comment and save again</p>
  </Page>
  
);

export default Index;
