const http = require('http');

const blogs = [{
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.'
}]

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    }
    else if( req.method === 'GET' && req.url === '/blog') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(blogs));
    }
    else if( req.method === 'POST' && req.url === '/blog') {
        const title = 'New Blog Post';
        const content = 'This is the content of the new blog post.';
        blogs.push({ id: blogs.length + 1, title, content });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Blog created successfully', blog: { id: blogs.length, title, content } }));
    }
});

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});