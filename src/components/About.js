import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }


  return (
    <div className="container" style={myStyle}>
        <h2 className="my-2">About Us</h2>
        <p>Welcome to the FlipCase which is Text Transformer tool! This simple and easy-to-use web application allows you to quickly convert your text into uppercase or lowercase with just a click of a button. Whether you need to adjust the case for a document, message, or code, this tool makes it effortless. Additionally, if you want to start fresh, you can easily clear the text in the input box. Perfect for anyone who needs to manipulate text on the fly, this tool is both intuitive and fast, helping you get your work done more efficiently. Try it out and see how easy it is to transform your text!</p>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        FlipCase gives you a way to analyze your text quickly and eficienctly. It can change the cases from uppercase to lowercase and vice-versa.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        FlipCase is a free character counter tool that provides instant character count & word count statistics for a given text. FlipCase reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" style={myStyle}>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any browsers such as Chrome, Firefox, Internet Explore, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}