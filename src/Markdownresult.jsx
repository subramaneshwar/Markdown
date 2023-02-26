import React from 'react'
import ReactMarkdown from 'react-markdown'
import './mark.css'
function Markdownresult({input}) {
  return (
    <div className='marks'>
        <ReactMarkdown>{input}</ReactMarkdown>
    </div>
  )
}

export default Markdownresult