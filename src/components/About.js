import React from 'react';

export default function About() {
    // const [darkMode, setDarkMode] = useState(false);

    // const handleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     if (darkMode) {
    //         document.body.style.backgroundColor = '#fff'; // Light mode background color
    //         document.body.style.color = '#000'; // Light mode text color
            
    //     } else {
    //         document.body.style.backgroundColor = '#333'; // Dark mode background color
    //         document.body.style.color = '#fff'; // Dark mode text color
    //     }
    // };

    return (
        <div className="container">
        <h1 style={{color: '#007bff'}}>About Our App: Text Formatting Tool</h1>
        <p>Welcome to our text formatting tool! Our app is designed to make text formatting easy and convenient for all users. Whether you need to convert text to uppercase, lowercase, capitalize words, or remove extra spaces, our app has you covered. Here's a bit more about what our app offers and what makes it special:</p>
        <h2 style={{color: '#17a2b8'}}>Features:</h2>
        <ul>
          <li><strong>Text Case Conversion:</strong> Easily convert your text to uppercase, lowercase, or capitalize the first letter of each word with just a click.</li>
          <li><strong>Space Removal:</strong> Say goodbye to extra spaces in your text. Our app can quickly remove unnecessary spaces, making your text clean and tidy.</li>
          <li><strong>Word Count:</strong> Need to know how many words are in your text? Our app provides an accurate word count, helping you keep track of your content's length.</li>
          <li><strong>Reading Time Estimate:</strong> Get an estimated reading time for your text, so you can plan your presentations, speeches, or articles accordingly.</li>
        </ul>
        <h2 style={{color: '#17a2b8'}}>Why Choose Our App?</h2>
        <ul>
          <li><strong>Simplicity:</strong> Our app is designed with user-friendliness in mind. With a clean and intuitive interface, formatting your text is a breeze.</li>
          <li><strong>Efficiency:</strong> Save time and effort with our quick and efficient text formatting features. Whether you're working on a document, email, or social media post, our app helps you get the job done faster.</li>
          <li><strong>Accuracy:</strong> Trust our app to provide accurate results every time. Whether it's converting text case or calculating word count, you can rely on our app for precise outcomes.</li>
          <li><strong>Versatility:</strong> From students and professionals to writers and bloggers, our app caters to a wide range of users with diverse formatting needs.</li>
        </ul>
        <h2 style={{color: '#17a2b8'}}>Feedback and Support:</h2>
        <p>We value your feedback and are constantly striving to improve our app. If you have any suggestions, questions, or concerns, please don't hesitate to reach out to us. Your input helps us make our app even better.</p>
        <p>Thank you for choosing our text formatting tool. We hope it helps streamline your writing process and enhances your overall experience. Happy formatting!</p>
      </div>    );
}
