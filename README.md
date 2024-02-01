# TimeStories Server

A simple Node.js server that fetches the latest stories from [time.com](https://time.com) and provides them through a RESTful API.

## Features

- Retrieve the latest stories in JSON format.
- Simple HTTP server with error handling.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/time-stories-server.git
    ```

2. **Install dependencies:**

    ```bash
    cd time-stories-server
    npm install
    ```

## Usage

1. **Start the server:**

    ```bash
    node server.js
    ```

2. **Access the latest stories API:**

    Open your browser and go to [http://localhost:3000/getTimeStories](http://localhost:3000/getTimeStories)

## API Endpoints

- **GET /getTimeStories**: Retrieve the latest stories in JSON format.

## Configuration

- `TIME_API_URL`: The URL of the Time website API.
- `SERVER_PORT`: Port on which the server will listen.
- `SERVER_HOST`: Hostname on which the server will run.

## Contributing

Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
