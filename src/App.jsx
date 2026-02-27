import { useState } from "react";
import SignatureForm from "./components/SignatureForm";
import SignaturePreview from "./components/SignaturePreview";

export default function App() {
  const [template, setTemplate] = useState("minimal");

  const [data, setData] = useState({
    name: "Alex Designer",
    title: "Senior Product Designer",
    email: "alex@creative-studio.com",
    phone: "+1 (555) 987-6543",
    company: "Creative Studio",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logo: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
    website: "https://creative-studio.com",
    address: "456 Design Blvd, CA 90210",
    socials: [
      { id: "1", platform: "linkedin", url: "https://linkedin.com/in/alexdesigner" },
      { id: "2", platform: "twitter", url: "https://twitter.com/alexdesigner" },
      { id: "3", platform: "github", url: "https://github.com/alexdesigner" }
    ]
  });

  return (
    <div className="container">
      <div className="header">
        <h1>Email Signature Generator</h1>
        <p>Create professional, minimalist email signatures in seconds</p>
      </div>

      <div className="grid">
        <SignatureForm
          data={data}
          setData={setData}
        />

        <SignaturePreview
          data={data}
          template={template}
          setTemplate={setTemplate}
        />
      </div>
    </div>
  );
}
