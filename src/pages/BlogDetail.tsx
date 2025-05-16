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
  imageBackground?: string; // <-- Add this line
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

  });
      
      <h3>useContext</h3>
      <p>The useContext hook lets you subscribe to React context without introducing nesting:</p>
      <pre><code>import React, { useContext } from 'react';     
      <h2>Additional Hooks</h2>
      <p>React also provides several additional hooks like useReducer, useCallback, useMemo, useRef, and more. These hooks provide more specialized functionality for specific use cases.</p>
      
      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They make it easier to reuse stateful logic between components and make your code more readable and maintainable.</p>
    `,
    link: '/blog/react-hooks',
    imageBackground: 'web.jpg'
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
    imageBackground: 'hook2.jpg'
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