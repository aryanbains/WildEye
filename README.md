# WildEye - Wildlife Conservation Platform

WildEye is a modern web application for wildlife conservation that uses edge computing and AI to monitor animal movements and detect potential threats in real-time.

## Features

- **Interactive Homepage**: Showcases wildlife sanctuaries and conservation efforts
- **Authentication System**: Secure login and signup functionality
- **Live Camera Monitoring**: Real-time camera feeds with motion detection
- **Real-time Alerts**: Instant notifications for detected wildlife activities
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- React Router for navigation
- Framer Motion for animations
- Font Awesome for icons
- Axios for API requests

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wild-eye.git
   cd wild-eye
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx           # Landing page with sanctuary showcase
│   ├── Auth.tsx           # Login and signup page
│   └── LiveCamera.tsx     # Live camera monitoring interface
├── components/            # Reusable UI components
├── styles/               # Global styles and themes
└── App.tsx               # Main application component
```

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint for code quality checks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Wildlife conservation organizations
- Open-source community
- Contributors and maintainers
