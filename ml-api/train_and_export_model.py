import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
import joblib

# 1. Load Dataset
df = pd.read_csv("cleaned_stackoverflow_questions.csv") 

# 2. Preprocess
df.dropna(subset=['Title', 'Body', 'Tags', 'Y'], inplace=True)
X = df['Title'] + " " + df['Body'] + " " + df['Tags']
y = df['Y']

# ✅ Check class distribution
print("Class distribution:")
print(y.value_counts())

# 3. Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. TF-IDF Vectorization
vectorizer = TfidfVectorizer(max_features=10000 , ngram_range=(1,2))
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# 5. Train Model (with Class Balancing)
model = RandomForestClassifier(n_estimators=200, class_weight="balanced", random_state=42)
model.fit(X_train_vec, y_train)

# 6. Evaluate
y_pred = model.predict(X_test_vec)
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# 7. Save model and vectorizer
joblib.dump(model, "model/logreg_model.pkl")
joblib.dump(vectorizer, "model/tfidf_vectorizer.pkl")
