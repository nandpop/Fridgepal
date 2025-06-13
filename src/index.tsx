import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { SignIn } from "./screens/SignIn/SignIn";
import { Homepage } from "./screens/Homepage/Homepage";
import { Inventory } from "./screens/Inventory/Inventory";
import { ToBuy } from "./screens/ToBuy/ToBuy";

export default function App() {
  const [page, setPage] = useState<'signin' | 'home' | 'inventory' | 'tobuy'>("signin");

  if (page === "signin") {
    return <SignIn onContinue={() => setPage("home")} />;
  }
  if (page === "home") {
    return <Homepage onNavigate={setPage} />;
  }
  if (page === "inventory") {
    return <Inventory onNavigate={setPage} />;
  }
  if (page === "tobuy") {
    return <ToBuy onNavigate={setPage} />;
  }
  return null;
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
