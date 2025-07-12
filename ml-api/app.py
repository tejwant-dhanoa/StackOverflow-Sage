from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load compressed model and vectorizer
model = joblib.load("model/logreg_model_compressed.pkl")
vectorizer = joblib.load("model/tfidf_vectorizer.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        title = data.get("title", "")
        body = data.get("body", "")
        tags = data.get("tags", "")
        
        print("✅ Model loaded successfully")

        # Debug: Print incoming request data
        print("\n🟦 Received data:")
        print("Title:", title)
        print("Body:", body)
        print("Tags:", tags)
        
        # Custom Garbage Rule (Before Model)
        if len(title.strip()) < 20 and len(body.strip()) < 50:
            return jsonify({
                "prediction": "LQ_CLOSE"
            }), 200

        # Combine fields like during training
        combined_text = f"{title} {body} {tags}"
        
        # Transform input text
        vec = vectorizer.transform([combined_text])

        # Predict
        prediction = model.predict(vec)[0]

        print("🟢 Sending prediction:", prediction)

        return jsonify({
            "prediction": prediction
        }), 200

    except Exception as e:
        print("❌ Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route("/", methods=["GET"])
def index():
    return "Stack Overflow Sage ML API is running!", 200

if __name__ == "__main__":
    app.run(debug=False)
