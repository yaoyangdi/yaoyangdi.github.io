import React,{useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";

const BlogDetail = (props) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch(require(`./markdown/${props.fileName}.md`))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  // function to import all images at run time so that dynamically importinng image using require is wokring  
  // since require is executed at compile time, not at runtime
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  importAll(require.context('./markdown/images', false, /\.(png|jpe?g|svg)$/));
  
  
  return (
    <div className="blogDetail container">
      <div className='blogDetail metadata'>
        <h1>{props.title}</h1>
        <p>{ `POST ON: ${props.date}`}</p>
      </div>


      <ReactMarkdown children={content} components={{
        p: ({ node, children }) => {
          if (node.children[0].tagName === "img") {
              const image = node.children[0].properties;

              return (
                  <div className="blogDetail image">
                    <img src={require(`./markdown/${image.src}`)} />                         
                  </div>

              );
          }
          // Return default child if it's not an image
          return <p>{children}</p>;
      },
      }}
      escapeHtml={false}
      />    
    </div>
  )
}

export default BlogDetail
