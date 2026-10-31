export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "اكتب رسالة أولاً." });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: "الرسالة طويلة جدًا." });
  }

  return res.status(200).json({
    reply: "وصلت رسالتك بنجاح! نحن نجهّز ORALE AI للذكاء الاصطناعي الحقيقي. ✨"
  });
}
