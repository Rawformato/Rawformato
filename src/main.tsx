
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { reportVitals } from "./app/lib/vitals";

  createRoot(document.getElementById("root")!).render(<App />);

  reportVitals();
  