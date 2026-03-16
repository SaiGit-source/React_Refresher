// article-content.js

export const articles = [
  {
    name: "react-hooks-intro",
    title: "Introduction to React Hooks",
    content: `
React Hooks are functions that let you use state and other React features without writing a class. 
They were introduced in React 16.8 and simplify the management of component logic. 
The most common hooks are useState, useEffect, useContext, and useRef. 
Hooks allow you to share logic across components without HOCs or render props.
`
  },
  {
    name: "react-router-basics",
    title: "Getting Started with React Router",
    content: `
React Router is the standard library for routing in React applications. 
It allows you to navigate between pages, create nested routes, and handle dynamic URL parameters. 
Key components include BrowserRouter, Routes, Route, Link, and useNavigate. 
React Router makes single-page applications feel like multi-page apps with smooth navigation.
`
  },
  {
    name: "redux-toolkit-overview",
    title: "Overview of Redux Toolkit",
    content: `
Redux Toolkit is the official, recommended way to write Redux logic. 
It simplifies store setup, reducer creation, and state management. 
Core functions include configureStore, createSlice, and createAsyncThunk. 
Using Redux Toolkit reduces boilerplate and makes Redux easier to maintain in large applications.
`
  },
  {
    name: "typescript-react-intro",
    title: "Using TypeScript with React",
    content: `
TypeScript adds static type checking to JavaScript, which helps catch errors at compile time. 
When used with React, it improves code safety and developer experience. 
You can type props, state, and hooks like useState and useReducer. 
TypeScript is widely adopted in React projects for large-scale maintainable codebases.
`
  },
  {
    name: "aws-cloudwatch-intro",
    title: "Introduction to AWS CloudWatch",
    content: `
AWS CloudWatch is a monitoring and observability service for AWS resources and applications. 
It collects metrics, logs, and events, and can trigger alarms based on thresholds. 
CloudWatch helps you maintain system reliability and performance by providing actionable insights and visual dashboards.
`
  }
];

export default articles;