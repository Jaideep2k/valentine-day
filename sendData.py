import websocket

ESP32_IP = "192.168.1.249"  # Replace with your ESP32 IP
ws = websocket.WebSocket()
ws.connect(f"ws://{ESP32_IP}:81")
ws.send("NO_CLICKED")
ws.close()