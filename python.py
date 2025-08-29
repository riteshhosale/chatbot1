from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/attendance")
def attendance():
    # Example data (can come from database)
    return jsonify({
        "percentage": 92,
        "present": 46,
        "total": 50
    })

if __name__ == "__main__":
    app.run(debug=True)
