import React from "react"

export default function AboutPage() {

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.6' }}>
      <h1>About Our Articles</h1>
      <p>
        Welcome to <strong>Tech Articles Hub</strong>, your go-to destination for high-quality tutorials, 
        guides, and insights on modern web development, cloud computing, and software engineering. 
        Whether you're a beginner learning React, a DevOps enthusiast exploring AWS, or a developer 
        looking to level up your skills, we’ve got you covered.
      </p>
      <p>
        Our mission is to provide **practical, easy-to-follow articles** that help developers understand 
        complex concepts and apply them in real projects. Every article is carefully crafted to include 
        clear explanations, examples, and best practices.
      </p>
      <p>
        Topics you can expect:
      </p>
      <ul>
        <li>React.js & modern front-end development</li>
        <li>State management with Redux and Context API</li>
        <li>Routing and navigation with React Router</li>
        <li>Cloud services like AWS, monitoring, and API management</li>
        <li>DevOps practices, CI/CD, and Git workflows</li>
        <li>Tips for improving developer productivity and code quality</li>
      </ul>
      <p>
        We believe learning should be **hands-on and fun**, which is why most of our articles include 
        example code and step-by-step guidance so you can follow along and build real applications.
      </p>
      <p>
        Thank you for visiting! We hope our articles inspire you to create, learn, and innovate in your 
        development journey.
      </p>
    </div>
  );
};

