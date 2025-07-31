"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return toast.error("Message cannot be empty");

    setLoading(true);
    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      toast.success("Feedback submitted!");
      setMessage("");
      setEmail("");
    } else {
      toast.error(data.error || "Failed to submit feedback");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='font-bold flex items-center justify-center'>Give Feedback</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your feedback..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
          <Button type="submit" disabled={loading} className="w-full flex items-center justify-center">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
