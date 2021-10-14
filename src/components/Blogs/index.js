import React, { useState, useEffect } from 'react'
import { Box, Button, Card, CardActionArea, CardHeader, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'

const BLOG_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maryann-navarrete'

const Blogs = () => {
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		fetch(BLOG_URL)
			.then((response) => response.json())
			.then((data) => {
				setBlogs(data.items)
			})
	})

	console.log(blogs)

	return (
		<Container maxWidth="lg">
			<Grid container sx={{ px: 5 }}>
				<Grid item sx={{ px: 20 }}>
					<Grid item sx={{ mb: 4 }}>
						<Typography>My Blogs</Typography>
					</Grid>
					<Grid item>
						<Grid container spacing={4} sx={{}}>
							{blogs.map((blog) => (
								<Grid item md={4} lg={4} xs={12} sx={{ mb: 2 }}>
									<Card sx={{}}>
										<CardMedia component="img" height="160" image={blog.thumbnail} alt={blog.title} />

										<CardHeader>
											<Typography gutterBottom variant="h5" component="div" color="black">
												{blog.title}
											</Typography>
										</CardHeader>
										<CardActionArea>
											<Button href={blog.link}>Read More</Button>
										</CardActionArea>
									</Card>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Blogs
