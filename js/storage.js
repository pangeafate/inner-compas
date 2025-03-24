// Local storage keys
const SAVED_VALUES_KEY = 'innerCompass_savedValues';
const DISCARDED_VALUES_KEY = 'innerCompass_discardedValues';

/**
 * Save a value to localStorage
 * @param {Object} value - The value object to save
 */
function saveValue(value) {
    const savedValues = getSavedValues();
    
    // Check if the value is already saved
    if (!savedValues.some(saved => saved.id === value.id)) {
        savedValues.push(value);
        localStorage.setItem(SAVED_VALUES_KEY, JSON.stringify(savedValues));
    }
    
    // Remove from discarded values if it was previously discarded
    removeDiscardedValue(value.id);
}

/**
 * Remove a value from localStorage
 * @param {string} valueId - The ID of the value to remove
 */
function removeValue(valueId) {
    // Remove from saved values
    const savedValues = getSavedValues();
    const updatedValues = savedValues.filter(value => value.id !== valueId);
    localStorage.setItem(SAVED_VALUES_KEY, JSON.stringify(updatedValues));
}

/**
 * Get all saved values from localStorage
 * @returns {Array} - Array of saved value objects
 */
function getSavedValues() {
    const savedValues = localStorage.getItem(SAVED_VALUES_KEY);
    return savedValues ? JSON.parse(savedValues) : [];
}

/**
 * Clear all saved values from localStorage
 */
function clearSavedValues() {
    localStorage.removeItem(SAVED_VALUES_KEY);
}

/**
 * Add a value to discarded values in localStorage
 * @param {Object} value - The value object to discard
 */
function discardValue(value) {
    const discardedValues = getDiscardedValues();
    
    // Check if the value is already discarded
    if (!discardedValues.some(discarded => discarded.id === value.id)) {
        discardedValues.push(value);
        localStorage.setItem(DISCARDED_VALUES_KEY, JSON.stringify(discardedValues));
    }
}

/**
 * Remove a value from discarded values
 * @param {string} valueId - The ID of the value to remove from discarded
 */
function removeDiscardedValue(valueId) {
    const discardedValues = getDiscardedValues();
    const updatedValues = discardedValues.filter(value => value.id !== valueId);
    localStorage.setItem(DISCARDED_VALUES_KEY, JSON.stringify(updatedValues));
}

/**
 * Get all discarded values from localStorage
 * @returns {Array} - Array of discarded value objects
 */
function getDiscardedValues() {
    const discardedValues = localStorage.getItem(DISCARDED_VALUES_KEY);
    return discardedValues ? JSON.parse(discardedValues) : [];
}

/**
 * Clear all discarded values from localStorage
 */
function clearDiscardedValues() {
    localStorage.removeItem(DISCARDED_VALUES_KEY);
}

/**
 * Reset all values (both saved and discarded)
 */
function resetAllValues() {
    clearSavedValues();
    clearDiscardedValues();
}

// Export the functions
export { 
    saveValue, 
    removeValue, 
    getSavedValues, 
    clearSavedValues,
    discardValue,
    removeDiscardedValue,
    getDiscardedValues,
    clearDiscardedValues,
    resetAllValues
};
