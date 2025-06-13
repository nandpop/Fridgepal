import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { SignIn } from "./screens/SignIn/SignIn";
import { Homepage } from "./screens/Homepage/Homepage";
import { Inventory } from "./screens/Inventory/Inventory";
import { ToBuy } from "./screens/ToBuy/ToBuy";
import { Activity } from "./screens/Activity/Activity";
import { Profile } from "./screens/Profile/Profile";
import { Checkout } from "./screens/Checkout/Checkout";

export default function App() {
  const [page, setPage] = useState<'signin' | 'home' | 'inventory' | 'tobuy' | 'activity' | 'profile' | 'checkout'>("signin");
  const [shoppingAt, setShoppingAt] = useState<"Zepto" | "Blinkit" | null>(null);

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
    return <ToBuy onNavigate={setPage} setShoppingAt={setShoppingAt} />;
  }
  if (page === "activity") {
    return <Activity onNavigate={setPage} />;
  }
  if (page === "profile") {
    return <Profile onNavigate={setPage} />;
  }
  if (page === "checkout") {
    return <Checkout shoppingAt={shoppingAt} onNavigate={setPage} />;
  }
  return null;
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
