import { createRoot } from "react-dom/client";
import { Resume } from "./Resume";

const container = document.getElementById("root")!;
const root = createRoot(container)
root.render(<Resume
    customSummary="I am seeking a Staff level software engineering position where I can grow my leadership skills."
    personalInfo={{}}
/>);