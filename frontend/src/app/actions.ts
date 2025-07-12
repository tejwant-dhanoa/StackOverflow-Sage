"use server";

export async function getPrediction(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");
  const tags = formData.get("tags");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        tags,
      }),
    });

    if (!res.ok) {
      throw new Error("Prediction failed");
    }

    const data = await res.json();
    return { quality: data.prediction, error: null };
  } catch (error: any) {
    return { quality: null, error: error.message };
  }
}
