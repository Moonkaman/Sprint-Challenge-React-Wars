# Answers

1.  What is React JS and what problems does it try and solve?
  - React is a javascript library that allows us to create web applications in terms of reusable lightweight components each
    in charge of their own state(data), and rendering to the screen via the virtual DOM. The problems it tries to solve are more complex
    web applications with a lot of data can become very slow due to the normal Dom being very heavy to use so react uses its own
    virtual DOM to only update what it needs to thus saving a lot of performance. Also bigger web applications can become hard to
    scale as it grows, react helps you scale the app as you go by managing data and keeping things compartmentalized in their
    respective components. 

2.  What does it mean to _think_ in react?
  - It means when you see a design file or you have something you want to build you should think of it broken down into components
    like a sidebar for example you should think about the overall container that will probably manage all the state and then all the
    buttons that would likely be functional components and whatever other presentational components you could break it down into.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  - A class or stateful component is a component that is declared using the class syntax and therefore has access to state and the this keyword
    using a constructor and super() along with props if it needs any. A funcitonal or presentational component does not have access to state but
    it does have access to props. One last difference between the two is that usually the class components will do all the data changing and the
    functional components will use methods passed down from the class components to do things. 

4.  Describe state.
  - State is something that class components have access to and its used to keep track of data relavent to that component. It can be changed but
    only using the this.setState() function which triggers a re-render of the relavent components. Usually state is used to keep track things
    like a list of users or input text or any other things that the component needs to keep track of and modify.

5.  Describe props.
  - Props are pieces of data passed down from a parent component to a child component. They are passed in JSX like a custom data attribute and they,
  cannot be changed only read. usually they are used to pass functions or text or any other relavent data down to presentational components.
