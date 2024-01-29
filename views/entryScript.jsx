import React from "react";
import ReactDOM from "react-dom";
import Entry from "./components/entry";
import { getCurrentEntry } from "../db";

// Get the current entry
const currentEntry = getCurrentEntry();

// Update the document title with the current entry information
document.title = `Entry: ${currentEntry.date}`;

// Render the Entry component
ReactDOM.render(<Entry />, document.getElementById("root"));
