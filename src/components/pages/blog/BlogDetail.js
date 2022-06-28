import React,{useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import './Blog.css'

const BlogDetail = ({props}) => {
  const [content, setContent] = useState(null);
  const [src, setSrc] = useState(null);
  useEffect(() => {
    fetch(require(`../../../assets/markdown/This is my first blog.md`))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  
  return (
    <div className="blogDetail">
      <ReactMarkdown children={content} components={{
        p: ({ node, children }) => {
          if (node.children[0].tagName === "img") {
              const image = node.children[0].properties;
              setSrc(image.src)
              console.log(src);
              let Img = require("../../../"+String(src))

              return (
                  <div className="image">
                      <img
                          src={Img}
                          width="600"

                          layout="responsive"
                      />

                      <h2>2222222</h2>
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
