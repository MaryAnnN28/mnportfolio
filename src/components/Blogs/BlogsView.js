import React, { useState, useEffect } from 'react'

const BlogsView = () => {
	const BLOG_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maryann-navarrete'

	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch(BLOG_URL)
			.then((response) => response.json())
			.then((data) => {
				setBlogs(data.items)
			})
	}, [])

	console.log(blogs)

	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				color: '#ffffff',
			}}
		>
			<div className="blog-container">
				<div className="row">
					<div className="column">
						<h1 className="blog-header">Latest Blog Posts</h1>
						{blogs.map((blog) => {
							return (
								<div className="card">
									<img src={blog.thumbnail} alt={blog.title} width="300px" />
									<h3>{blog.title}</h3>
									<p>{blog.pubDate}</p>
									<p>{blog.categories}</p>
									<a href={blog.link} target="_blank" rel="noopener norefer">
										View Blog Post
									</a>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogsView
