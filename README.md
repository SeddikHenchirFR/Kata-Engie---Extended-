# Rate Exchange Publishing Application

## Overview

The Price Publishing Application is a real-time dashboard that displays live price updates for currency pairs (EUR/USD, EUR/GBP, and USD/GBP). 
It consists of a back-end service built with C# (ASP.NET Core) that generates random price updates and broadcasts them via WebSockets. 
The front-end, built with Angular, connects to the WebSocket server to receive and display these updates continuously in a responsive dashboard.

## Features

- **Real-time Price Updates**: Continuously receive and display live price updates for currency pairs.
- **Random Interval Updates**: Prices are updated at random intervals between 1 ms and 100 ms.
- **Standalone Angular Components**: The application leverages Angular’s standalone components for a modular and efficient structure.
- **WebSocket Communication**: Utilizes WebSocket for efficient, low-latency data streaming between the server and the client.

## Technologies Used

- **Back-End**: C# (ASP.NET Core) for WebSocket server and price generation.
- **Front-End**: Angular with standalone components.
- **WebSocket**: Real-time communication protocol used for streaming data.
- **GRPC**: gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment.
- **ProtoBuf**: Protocol Buffers are language-neutral, platform-neutral extensible mechanisms for serializing structured data.
- **Random Data Generation**: Simulates realistic price changes with random intervals.


### Prerequisites

- **Node.js** (v16 or later) and npm: For running the Angular front-end.
- **.NET SDK** (v6 or later): For building and running the ASP.NET Core back-end.
- **Angular CLI**: For creating and managing Angular projects.
