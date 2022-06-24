import React,{useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";

const Blog = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../../../assets/markdown/${props.file_name}`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  )
}

export default Blog
