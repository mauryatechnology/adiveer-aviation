import { ContactInfo } from "@/types";
import { MapPin, Mail, Phone } from "lucide-react";

export const contactDetails: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Headquarters",
    content: "1, Adi Parisar, Bagsewaniya, Bhopal",
    sub: "Madhya Pradesh 462026, India"
  },
  {
    icon: Mail,
    title: "Operations & Sales",
    content: "connect@adiveeraviations.com",
    sub: "24/7 Monitoring & Support"
  },
  {
    icon: Phone,
    title: "Support Line",
    content: "+91 70003 02682",
    sub: "Mon-Sat, 9AM-7PM IST"
  }
];

export const inquiryTypes = [
  "Partnership Inquiry",
  "Custom Solution Request",
  "Career Opportunities",
  "Media & Press",
  "General Inquiry"
];
