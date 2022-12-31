import json
import random
import time

# List of possible earthquake magnitudes
magnitudes = [2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0]

# List of possible earthquake depths (in kilometers)
depths = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


def start_streaming():
    while True:
        # Generate mock earthquake data
        magnitude = random.choice(magnitudes)
        depth = random.choice(depths)
        location = [random.uniform(-90, 90), random.uniform(-180, 180)]
        timestamp = int(time.time() * 1000)

        # Construct earthquake data dictionary
        earthquake_data = {
            "properties": {
                "mag": magnitude,
                "time": timestamp,
                },
            "coordinates": {
                    "latitude": location[1],
                    "longitude": location[0],
                    "depth": depth
            }
        }

        # Print mock earthquake data as JSON
        print(json.dumps(earthquake_data), flush=True)

        # Sleep for a random amount of time before generating the next earthquake
        time.sleep(random.uniform(0, 25))

if __name__ == "__main__":
    start_streaming()
