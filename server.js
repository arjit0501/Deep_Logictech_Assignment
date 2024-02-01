const http = require('http');
const https = require('https');

const server = http.createServer((request, respond) => {
    if (request.method === 'GET' && request.url === '/getTimeStories') {
        https.get('https://time.com', (response) => {
            let text = '';

            response.on('data', (data) => {
                text += data;
            });

            response.on('end', () => {
                // processing the html data
                const latestStories = latestStories2(text);
                respond.writeHead(200, { 'Content-Type': 'application/json' });
                respond.end(JSON.stringify(latestStories)); // converting the array of text received from html into JSON format
            });
        }).on('error', (error) => {
            respond.writeHead(500, { 'Content-Type': 'text/plain' });
            respond.end(`Internal Server Error: ${error.message}`);
        });
    } else {
        respond.writeHead(405, { 'Content-Type': 'text/plain' });
        respond.end('Method Not Allowed');
    }
});

server.listen(3002, 'localhost', () => {
    console.log("server is running on port 3000");
});

// function to extract the data from the html file
function latestStories2(htmlData) {
    const stories = [];

    const sIndex = htmlData.indexOf('latest-stories');
    const eIndex = htmlData.indexOf('</div>', sIndex);

    if (sIndex !== -1 && eIndex !== -1) {
        const content = htmlData.substring(sIndex, eIndex);
        const storyMatches = content.match(/<a\s+href="([^"]+)"[^>]>\s<h3[^>]>.?<\/h3>\s*<\/a>/g) || [];

        storyMatches.forEach((match) => {
            const linkMatch = match.match(/<a\s+href="([^"]+)"[^>]*>/);
            const link = linkMatch ? linkMatch[1] : '';

            const titleMatch = match.match(/<h3[^>]>(.?)<\/h3>/);
            const title = titleMatch ? titleMatch[1].trim() : '';
            const fullLink = 'https://time.com/' + link;

            stories.push({ title, link: fullLink });
        });

        return stories;
    }
}