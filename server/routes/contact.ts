import { RequestHandler } from "express";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional().default(""),
  message: z.string().min(1),
});

export const handleContact: RequestHandler = (req, res) => {
  const parse = schema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const data = parse.data;
  console.log("New contact submission:", data);

  // In production, forward to email/CRM here.
  res.json({ success: true });
};
