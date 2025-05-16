import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #e6f1ff;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 4px;
    background-color: #4ecca3;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background-color: #172a45;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-color: #2d3748;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogDate = styled.span`
  color: #4ecca3;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #e6f1ff;
  margin-bottom: 0.5rem;
`;

const BlogExcerpt = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled.a`
  color: #4ecca3;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      date: 'May 16, 2025',
      excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state more effectively.',
      link: '/blog/react-hooks',
      imageBackground: '/hook2.jpg'
    },
    {
      id: 4,
      title: 'Building Accessible Web Applications',
      date: 'May 16, 2025',
      excerpt: 'Learn how to make your web applications more accessible to users with disabilities and improve overall user experience.',
      link: '/blog/web-accessibility',
      imageBackground: '/web.jpg'
    },
  ];

  return (
    <BlogContainer>
      <SectionTitle>My Blog</SectionTitle>
      <BlogGrid>
        {blogPosts.map(post => (
          <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }} key={post.id}>
            <BlogCard>
              <BlogImage style={{ backgroundImage: `url(${post.imageBackground})` }} />
              <BlogContent>
                <BlogDate>{post.date}</BlogDate>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreLink as="span">Read More →</ReadMoreLink>
              </BlogContent>
            </BlogCard>
          </Link>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;