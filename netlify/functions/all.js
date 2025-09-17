// /.netlify/functions/all
export async function handler() {
  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ok: true, msg: "API is alive via Netlify Functions" })
  };
}
