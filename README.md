# WildEye - Edge Computing for Wildlife Conservation

WildEye is an edge computing platform that processes IoT sensor data in wildlife habitats to monitor animal movements and detect poaching activities. The system uses AI to provide real-time alerts and insights to conservationists.

## Features

- **Edge AI Processing**: Lightweight ML models for analyzing camera trap and motion sensor data
- **Real-Time Alerts**: Instant notifications for detected threats
- **Satellite Integration**: Environmental monitoring through satellite imagery
- **Low-Power Design**: Optimized for energy efficiency in remote areas

## Technical Stack

- Python 3.8+
- TensorFlow Lite for edge AI
- MQTT for IoT communication
- FastAPI for web services
- SQLite for local data storage

## Project Structure

```
wild-eye/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── animal_detector.py
│   ├── sensors/
│   │   ├── __init__.py
│   │   └── camera_trap.py
│   └── utils/
│       ├── __init__.py
│       └── alert_manager.py
├── config/
│   └── settings.py
├── requirements.txt
└── README.md
```

## Installation

1. Clone the repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Configure the settings in `config/settings.py`
2. Run the main application:
   ```bash
   python app/main.py
   ```

## License

MIT License 