import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #4ecca3;
  text-decoration: none;
  margin-bottom: 2rem;
  font-size: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const BlogHeader = styled.div`
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #e6f1ff;
  margin-bottom: 0.5rem;
`;

const BlogDate = styled.span`
  color: #4ecca3;
  font-size: 1rem;
  display: block;
  margin-bottom: 1.5rem;
`;

const BlogImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #172a45;
  border-radius: 5px;
  margin-bottom: 2rem;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  background-color: #172a45;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  
  p {
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  h2 {
    color: #e6f1ff;
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    color: #e6f1ff;
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
  
  ul, ol {
    color: #8892b0;
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  code {
    background-color: #1d3557;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }
  
  pre {
    background-color: #1d3557;
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
`;

const ShareSection = styled.div`
  margin-top: 2rem;
  
  h3 {
    font-size: 1.2rem;
    color: #e6f1ff;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #8892b0;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4ecca3;
    background-color: rgba(78, 204, 163, 0.1);
  }
`;

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  link: string;
  imageColor: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    date: 'June 15, 2023',
    excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state more effectively.',
    content: `
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to "hook into" React state and lifecycle features from function components.</p>
      
      <h2>Why Hooks?</h2>
      <p>Before Hooks, React didn't offer a way to "attach" reusable behavior to a component (for example, connecting it to a store). Patterns like render props and higher-order components tried to solve this, but they made the code harder to follow.</p>
      <p>Hooks solve many problems in React:</p>
      <ul>
        <li>Reusing stateful logic between components</li>
        <li>Splitting complex components into smaller functions</li>
        <li>Using React features without classes</li>
      </ul>
      
      <h2>Basic Hooks</h2>
      
      <h3>useState</h3>
      <p>The useState hook lets you add state to functional components:</p>
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h3>useEffect</h3>
      <p>The useEffect hook lets you perform side effects in function components:</p>
      <pre><code>import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \\\`You clicked \\\${count} times\\\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}</code></pre>
      
      <h3>useContext</h3>
      <p>The useContext hook lets you subscribe to React context without introducing nesting:</p>
      <pre><code>import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button theme={theme}>I am styled by theme context!</button>;
}</code></pre>
      
      <h2>Additional Hooks</h2>
      <p>React also provides several additional hooks like useReducer, useCallback, useMemo, useRef, and more. These hooks provide more specialized functionality for specific use cases.</p>
      
      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They make it easier to reuse stateful logic between components and make your code more readable and maintainable.</p>
    `,
    link: '/blog/react-hooks',
    imageColor: '#3182ce'
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    date: 'May 22, 2023',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, with practical examples of when to use each layout system.',
    content: `
      <p>CSS Grid and Flexbox are two powerful layout systems in CSS. While they share some similarities, they're designed for different use cases. Understanding when to use each can significantly improve your web development workflow.</p>
      
      <h2>Flexbox: One-Dimensional Layout</h2>
      <p>Flexbox is designed for one-dimensional layouts - either a row or a column. It's perfect for:</p>
      <ul>
        <li>Navigation menus</li>
        <li>Card layouts with equal heights</li>
        <li>Centering elements vertically and horizontally</li>
        <li>Distributing space between items</li>
      </ul>
      
      <p>Here's a basic example of Flexbox:</p>
      <pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin: 10px;
}</code></pre>
      
      <h2>CSS Grid: Two-Dimensional Layout</h2>
      <p>CSS Grid is designed for two-dimensional layouts - rows and columns together. It's ideal for:</p>
      <ul>
        <li>Overall page layouts</li>
        <li>Complex grid systems</li>
        <li>Placing items in exact positions</li>
        <li>Creating overlapping elements</li>
      </ul>
      
      <p>Here's a basic example of CSS Grid:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.item {
  grid-column: span 2;
}</code></pre>
      
      <h2>When to Use Flexbox</h2>
      <p>Use Flexbox when:</p>
      <ul>
        <li>You need to align items within a container</li>
        <li>You're working with a single row or column</li>
        <li>You need flexible widths/heights that adapt to content</li>
        <li>You want to distribute space between items</li>
      </ul>
      
      <h2>When to Use CSS Grid</h2>
      <p>Use CSS Grid when:</p>
      <ul>
        <li>You need to create a layout with both rows and columns</li>
        <li>You want precise control over placement of items</li>
        <li>You're creating a complex, asymmetrical layout</li>
        <li>You need to overlap elements</li>
      </ul>
      
      <h2>Using Them Together</h2>
      <p>The real power comes when you use both together:</p>
      <ul>
        <li>Use Grid for the overall page layout</li>
        <li>Use Flexbox for components within the grid</li>
      </ul>
      
      <p>For example, you might use Grid to create a page with header, sidebar, main content, and footer areas. Then within the header, you might use Flexbox to align the logo, navigation, and user controls.</p>
      
      <h2>Conclusion</h2>
      <p>Both Flexbox and CSS Grid are powerful tools in modern web development. By understanding their strengths and appropriate use cases, you can create more efficient, responsive, and maintainable layouts. Remember: Flexbox for one-dimensional layouts, Grid for two-dimensional layouts, and often the best approach is to use them together.</p>
    `,
    link: '/blog/css-grid-flexbox',
    imageColor: '#805ad5'
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for React Developers',
    date: 'April 10, 2023',
    excerpt: 'Discover the best practices for using TypeScript in your React projects to improve code quality and developer experience.',
    content: `
      <p>TypeScript has become increasingly popular in the React ecosystem, offering type safety and improved developer experience. Here are some best practices for using TypeScript with React.</p>
      
      <h2>Typing Component Props</h2>
      <p>Always define interfaces for your component props:</p>
      <pre><code>interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  disabled = false, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};</code></pre>
      
      <h2>Use Type Inference When Possible</h2>
      <p>Let TypeScript infer types when it can to reduce verbosity:</p>
      <pre><code>// Instead of this
const [count, setCount] = useState<number>(0);

// Do this when initializing with a value
const [count, setCount] = useState(0); // TypeScript infers number</code></pre>
      
      <h2>Type React Event Handlers Properly</h2>
      <p>Use the correct event types for handlers:</p>
      <pre><code>const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // form submission logic
};</code></pre>
      
      <h2>Create Reusable Type Definitions</h2>
      <p>For types used across multiple components, create separate type definition files:</p>
      <pre><code>// types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
}</code></pre>
      
      <h2>Use Discriminated Unions for State</h2>
      <p>For complex state with different modes, use discriminated unions:</p>
      <pre><code>type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; error: string };

const [state, setState] = useState<State>({ status: 'idle' });

// Later in your code
if (state.status === 'success') {
  // TypeScript knows that state.data exists here
  return <UserList users={state.data} />;
}</code></pre>
      
      <h2>Type Custom Hooks Properly</h2>
      <p>Ensure your custom hooks have proper return type annotations:</p>
      <pre><code>function useUser(userId: string): { user: User | null; loading: boolean; error: Error | null } {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Fetch user logic
  }, [userId]);
  
  return { user, loading, error };
}</code></pre>
      
      <h2>Use Generics for Reusable Components</h2>
      <p>Make components more flexible with generics:</p>
      <pre><code>interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Using TypeScript with React improves code quality, catches errors early, and enhances the developer experience. By following these best practices, you can make the most of TypeScript in your React projects while avoiding common pitfalls.</p>
    `,
    link: '/blog/typescript-react',
    imageColor: '#dd6b20'
  },
  {
    id: 4,
    title: 'Building Accessible Web Applications',
    date: 'March 5, 2023',
    excerpt: 'Learn how to make your web applications more accessible to users with disabilities and improve overall user experience.',
    content: `
      <p>Web accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites and tools. Here's how to build more accessible web applications.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Accessibility is important for several reasons:</p>
      <ul>
        <li>It's a legal requirement in many countries</li>
        <li>It expands your potential user base</li>
        <li>It improves usability for all users</li>
        <li>It's the right thing to do</li>
      </ul>
      
      <h2>Semantic HTML</h2>
      <p>Use semantic HTML elements that clearly describe their meaning to browsers and assistive technologies:</p>
      <pre><code><!-- Instead of this -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>

<!-- Do this -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header></code></pre>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure all interactive elements are keyboard accessible:</p>
      <ul>
        <li>Use proper focus management</li>
        <li>Implement logical tab order</li>
        <li>Provide visible focus indicators</li>
        <li>Ensure custom components can be operated with keyboard</li>
      </ul>
      
      <h2>ARIA Attributes</h2>
      <p>Use ARIA (Accessible Rich Internet Applications) attributes when necessary:</p>
      <pre><code><!-- Example of ARIA labels -->
<button aria-label="Close dialog" onClick={closeDialog}>
  X
</button>

<!-- Example of ARIA roles -->
<div role="alert">
  Your form has been submitted successfully.
</div></code></pre>
      
      <h2>Color and Contrast</h2>
      <p>Ensure sufficient color contrast between text and background:</p>
      <ul>
        <li>Aim for a contrast ratio of at least 4.5:1 for normal text</li>
        <li>Don't rely on color alone to convey information</li>
        <li>Provide alternative visual indicators (icons, patterns, etc.)</li>
      </ul>
      
      <h2>Images and Media</h2>
      <p>Make images and media accessible:</p>
      <pre><code><!-- Add alt text to images -->
<img src="logo.png" alt="Company Logo" />

<!-- For decorative images -->
<img src="decoration.png" alt="" role="presentation" />

<!-- Provide captions for videos -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
</video></code></pre>
      
      <h2>Forms</h2>
      <p>Create accessible forms:</p>
      <pre><code><!-- Use labels for form controls -->
<label for="name">Name:</label>
<input id="name" type="text" />

<!-- Group related form elements -->
<fieldset>
  <legend>Contact Information</legend>
  <!-- form fields here -->
</fieldset>

<!-- Provide error messages -->
<input 
  id="email" 
  type="email" 
  aria-invalid="true" 
  aria-describedby="email-error" 
/>
<div id="email-error" role="alert">Please enter a valid email address.</div></code></pre>
      
      <h2>Testing Accessibility</h2>
      <p>Regularly test your application for accessibility:</p>
      <ul>
        <li>Use automated tools like Lighthouse, axe, or WAVE</li>
        <li>Test with keyboard navigation</li>
        <li>Test with screen readers (NVDA, JAWS, VoiceOver)</li>
        <li>Conduct user testing with people with disabilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is not just about compliance—it's about creating better experiences for all users. By incorporating these practices into your development workflow, you can ensure your applications are usable by as many people as possible.</p>
    `,
    link: '/blog/web-accessibility',
    imageColor: '#38a169'
  },
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === Number(id));
  
  if (!post) {
    return (
      <BlogDetailContainer>
        <BackLink to="/blog">Back to Blog</BackLink>
        <h2>Blog post not found</h2>
      </BlogDetailContainer>
    );
  }
  
  return (
    <BlogDetailContainer>
      <BackLink to="/blog">Back to Blog</BackLink>
      
      <BlogHeader>
        <BlogTitle>{post.title}</BlogTitle>
        <BlogDate>{post.date}</BlogDate>
      </BlogHeader>
      
      <BlogImage style={{ backgroundColor: post.imageColor }} />
      
      <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <ShareSection>
        <h3>Share this post</h3>
        <SocialLinks>
          <SocialLink href={`https://www.instagram.com/create/story?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            Instagram
          </SocialLink>
          <SocialLink href={`https://www.youtube.com/share?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            YouTube
          </SocialLink>
          <SocialLink href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </SocialLink>
          <SocialLink href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">
            Facebook
          </SocialLink>
        </SocialLinks>
      </ShareSection>
    </BlogDetailContainer>
  );
};

export default BlogDetail;