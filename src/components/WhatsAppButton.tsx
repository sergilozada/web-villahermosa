import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/51910541885"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>
  );
}
