// Add the initial notes
import { getInitialData } from "../initial-data.js";
const initNotes = getInitialData();

// New notes data & merge it with initial notes
let allNotesData = [...initNotes];

export default allNotesData;
