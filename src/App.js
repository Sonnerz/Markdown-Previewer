import React from 'react';
import './App.css';
import marked from 'marked';

//Stateless component to render Editor
const Editor = props => {
  return (
    <div className="component-div">
      <div className="component-title">Editor</div>
      <textarea
        id="editor"
        value={props.text}
        onChange={props.onChange}
        type="text"
      />
    </div>
  );
};

//Stateless component to render Preview
const Preview = props => {
  return (
    <div className="component-div">
      <div className="component-title">Preview</div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.text, { breaks: true, sanitize: true }) }}
      />
    </div>
  );
};

//Stateless component to render Header
const Header = props => {
  return <div className="page-title">Markdown Editor</div>;
};

//Stateless component to render Header
const Footer = props => {
  return <div className="footer">Markdown Editor &copy; 2019</div>;
};

//Stateless component to render Header
const Tools = props => {
  return (
    <div className="toolbar">
      <div className="button-container">
        <button onClick={props.onClick} value="### heading 1 text &#x00A;" className="btn btn-secondary">
          h1
			</button>
        <button onClick={props.onClick} value="### heading 2 text &#x00A;" className="btn btn-secondary">
          h2
			</button>
        <button onClick={props.onClick} value="### heading 3 text &#x00A;" className="btn btn-secondary">
          h3
			</button>
        <button onClick={props.onClick} value="**Bold Text** &#x00A;" className="btn btn-secondary">
          Bold
			</button>
        <button onClick={props.onClick} value="_Italic Text_ &#x00A;" className="btn btn-secondary">
          Italic
			</button>
        <button onClick={props.onClick} value="> 	Quotation text &#x00A;" className="btn btn-secondary">
          Quote
			</button>
        <button onClick={props.onClick} value="* List item &#x00A;" className="btn btn-secondary">
          List item
			</button>
        <button onClick={props.onClick} value=" * List item &#x00A;" className="btn btn-secondary">
          Sub Item
			</button>
        <button onClick={props.onClick} value="1. List item &#x00A;" className="btn btn-secondary">
          Ordered List item
			</button>
        <button onClick={props.onClick} value="[GitHub](http://github.com) &#x00A;" className="btn btn-secondary">
          Link
			</button>
        <button onClick={props.onClick} value="![Google Logo](https://www.google.ie/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png) &#x00A;" className="btn btn-secondary">
          Image
			</button>
      </div>
    </div>
  );
};

//Stateful Class component to render App - Editor and Preview
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultText,
      tool: ""
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handlerClick(e) {
    e.preventDefault();
    this.setState({
      text: this.state.text + e.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Tools onClick={this.handlerClick} />
        <div id="app-container">
          <Editor text={this.state.text} onChange={this.handlerChange} />
          <Preview text={this.state.text} />
        </div>
        <Footer />
      </div>
    );
  }
}

const defaultText = `
# This is a h1 \n\

## This is a h2 \n
[I'm an inline-style link](https://www.google.com) \n\
* This is a list item \n\

**This is bold text** \n\

> This is for a quotation.\n\


I can add inline code like this:  \`<p></p>\`

\`\`\`javascript
// multiline code block can be added using 3 back ticks
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\` \n\
This is how to add an image:   ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") \n\
`;

export default App;



//https://marked.js.org/#/README.md#usage