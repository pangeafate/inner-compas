// Local storage key for saved values
const STORAGE_KEY = 'innerCompass_savedValues';

/**
 * Save a value to localStorage
 * @param {Object} value - The value object to save
 */
function saveValue(value) {
    const savedValues = getSavedValues();
    
    // Check if the value is already saved
    if (!savedValues.some(saved => saved.id === value.id)) {
        savedValues.push(value);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedValues));
    }
}

/**
 * Remove a value from localStorage
 * @param {string} valueId - The ID of the value to remove
 */
function removeValue(valueId) {
    const savedValues = getSavedValues();
    const updatedValues = savedValues.filter(value => value.id !== valueId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedValues));
}

/**
 * Get all saved values from localStorage
 * @returns {Array} - Array of saved value objects
 */
function getSavedValues() {
    const savedValues = localStorage.getItem(STORAGE_KEY);
    return savedValues ? JSON.parse(savedValues) : [];
}

/**
 * Clear all saved values from localStorage
 */
function clearSavedValues() {
    localStorage.removeItem(STORAGE_KEY);
}

// No export, make functions globally available
