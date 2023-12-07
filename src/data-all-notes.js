// Add the initial notes
import { getInitialData } from "./data-initial.js";
const initNotes = getInitialData();

// New notes data & merge it with initial notes
let allNotesData = [...initNotes];

// Archived notes
let archivedNotes = [];

export default allNotesData;
export { archivedNotes };
