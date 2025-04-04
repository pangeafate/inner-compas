// Import data from data.js
import { valuesData, getAllValues } from './data.js';
import { 
    saveValue, 
    removeValue, 
    getSavedValues, 
    clearSavedValues,
    discardValue,
    getDiscardedValues,
    clearDiscardedValues,
    resetAllValues
} from './storage.js';

// Constants
const TOTAL_VALUES = 100; // Total number of values to select
const DISCARD_TARGET = 50; // Number of cards to discard before moving to stage 2

/**
 * Show a notification with the number of discarded values
 */
function showDiscardNotification() {
    const discardedValues = getDiscardedValues();
    const discardedCount = discardedValues.length;
    
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.save-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'save-notification';
        document.body.appendChild(notification);
    }
    
    // Set the notification text
    notification.textContent = `${discardedCount} out of ${DISCARD_TARGET} discarded`;
    
    // Show the notification
    notification.classList.add('show');
    
    // Hide the notification after 1.5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        
        // Remove the element after the fade-out transition
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 1500);
    
    // Check if we've reached the discard target
    if (discardedCount >= DISCARD_TARGET) {
        // Wait for the notification to disappear before redirecting
        setTimeout(() => {
            window.location.href = 'exercise2.html';
        }, 2000);
    }
}

/**
 * Show a notification with the number of selected values
 */
function showSelectedNotification() {
    const savedValues = getSavedValues();
    const savedCount = savedValues.length;
    const TARGET = 30; // Target number of selected values
    
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.selected-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'selected-notification';
        document.body.appendChild(notification);
    }
    
    // Set the notification text
    notification.textContent = `${savedCount} out of ${TARGET} selected`;
    
    // Show the notification
    notification.classList.add('show');
    
    // Hide the notification after 1.5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        
        // Remove the element after the fade-out transition
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 1500);
}

/**
 * Update the discard counter on the exercise page
 */
function updateDiscardCounter() {
    const discardCounter = document.getElementById('discard-counter');
    if (discardCounter) {
        const discardedValues = getDiscardedValues();
        const discardedCount = discardedValues.length;
        
        discardCounter.textContent = `${discardedCount} out of ${DISCARD_TARGET}`;
        
        // Change color based on progress
        if (discardedCount >= DISCARD_TARGET) {
            discardCounter.style.color = '#18392B'; // Dark green when target reached
        } else {
            discardCounter.style.color = '#4a6fa5'; // Default color
        }
    }
}

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on based on the URL
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('exercise2.html')) {
        initExercise2Page();
    } else if (currentPath.includes('exercise.html')) {
        initExercisePage();
    } else if (currentPath.includes('values.html')) {
        initValuesPage();
    } else {
        // Default to purpose page (index.html)
        initPurposePage();
    }
});

// Initialize the Purpose page
function initPurposePage() {
    console.log('Purpose page initialized');
    // No specific functionality needed for the purpose page yet
}

// Initialize the Exercise page
function initExercisePage() {
    console.log('Exercise page initialized');
    
    // Get DOM elements
    const introPopup = document.getElementById('intro-popup');
    const beginBtn = document.getElementById('begin-btn');
    const cardsContainer = document.getElementById('cards-container');
    const purposeBtn = document.getElementById('purpose-btn');
    const resetBtn = document.getElementById('reset-btn');
    const stage2Btn = document.getElementById('stage2-btn');
    const valuesBtn = document.getElementById('values-btn');
    
    // Show intro popup
    if (introPopup) {
        // Hide the main content
        document.querySelector('.container').style.display = 'none';
        
        // Begin button click handler
        beginBtn.addEventListener('click', () => {
            // Hide the popup
            introPopup.style.display = 'none';
            
            // Show the main content
            document.querySelector('.container').style.display = 'block';
            
            // Initialize the discard counter
            updateDiscardCounter();
        });
    }
    
    // Set up navigation buttons
    purposeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    resetBtn.addEventListener('click', () => {
        resetAllValues(); // Clear both saved and discarded values
        // Reload the page to reset the grid
        window.location.reload();
    });
    
    stage2Btn.addEventListener('click', () => {
        window.location.href = 'exercise2.html';
    });
    
    valuesBtn.addEventListener('click', () => {
        window.location.href = 'values.html';
    });
    
    // Create and render the cards grid
    createCardsGrid();
    
    // Initialize the discard counter
    updateDiscardCounter();
}

// Initialize the Exercise Stage 2 page
function initExercise2Page() {
    console.log('Exercise Stage 2 page initialized');
    
    // Get DOM elements
    const cardsContainer = document.getElementById('cards-container');
    const stage1Btn = document.getElementById('stage1-btn');
    const purposeBtn = document.getElementById('purpose-btn');
    const resetBtn = document.getElementById('reset-btn');
    const valuesBtn = document.getElementById('values-btn');
    
    // Set up navigation buttons
    stage1Btn.addEventListener('click', () => {
        window.location.href = 'exercise.html';
    });
    
    purposeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    resetBtn.addEventListener('click', () => {
        resetAllValues(); // Clear both saved and discarded values
        // Reload the page to reset the grid
        window.location.reload();
    });
    
    valuesBtn.addEventListener('click', () => {
        window.location.href = 'values.html';
    });
    
    // Create and render the saved cards grid
    createSavedCardsGrid();
}

// Initialize the Values page
function initValuesPage() {
    console.log('Values page initialized');
    
    // Get DOM elements
    const valuesContainer = document.getElementById('values-container');
    const purposeBtn = document.getElementById('purpose-btn');
    const exerciseBtn = document.getElementById('exercise-btn');
    
    // Set up navigation buttons
    purposeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    exerciseBtn.addEventListener('click', () => {
        window.location.href = 'exercise.html';
    });
    
    // Render saved values by category
    renderSavedValuesByCategory();
}

// Create the grid of cards for the Exercise page
function createCardsGrid() {
    const cardsContainer = document.getElementById('cards-container');
    const allValues = getAllValues();
    const savedValues = getSavedValues();
    
    // Shuffle the values array to randomize the grid
    const shuffledValues = shuffleArray([...allValues]);
    
    // Clear the container
    cardsContainer.innerHTML = '';
    
    // Create cards and add them to the container
    shuffledValues.forEach(value => {
        const card = createCard(value);
        cardsContainer.appendChild(card);
    });
}

// Create a single card element
function createCard(value) {
    const savedValues = getSavedValues();
    const discardedValues = getDiscardedValues();
    const isSaved = savedValues.some(saved => saved.id === value.id);
    const isDiscarded = discardedValues.some(discarded => discarded.id === value.id);
    
    // Create card elements
    const card = document.createElement('div');
    card.className = `card ${isSaved ? 'saved' : ''} ${isDiscarded ? 'discarded' : ''}`;
    card.dataset.id = value.id;
    card.dataset.categoryId = value.categoryId;
    
    // Front of the card
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.style.backgroundColor = isDiscarded ? '#aaaaaa' : value.categoryColor;
    cardFront.textContent = value.name;
    // Removed dynamic font adjustment; font-size is handled via CSS
    
    // Back of the card
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    const categoryName = document.createElement('div');
    categoryName.className = 'card-category';
    categoryName.textContent = value.categoryName;
    categoryName.style.backgroundColor = value.categoryColor;
    
    const valueName = document.createElement('div');
    valueName.className = 'card-value-name';
    valueName.textContent = value.name;
    
    const valueDescription = document.createElement('div');
    valueDescription.className = 'card-description';
    valueDescription.textContent = value.description;
    
    // Create action buttons
    const cardActions = document.createElement('div');
    cardActions.className = 'card-actions';
    
    const keepBtn = document.createElement('button');
    keepBtn.className = 'card-btn keep-btn';
    keepBtn.textContent = 'Keep';
    
    const discardBtn = document.createElement('button');
    discardBtn.className = 'card-btn discard-btn';
    discardBtn.textContent = 'Discard';
    
    cardActions.appendChild(keepBtn);
    cardActions.appendChild(discardBtn);
    
    // Assemble the card
    cardBack.appendChild(categoryName);
    cardBack.appendChild(valueName);
    cardBack.appendChild(valueDescription);
    cardBack.appendChild(cardActions);
    
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    
    // Add event listeners for card interactions
    let isFlipped = false;
    let overlay;
    
    // Create overlay for when card is flipped
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        
        // Force reflow to ensure transition works
        overlay.offsetHeight;
        
        // Add active class to trigger fade in
        overlay.classList.add('active');
        
        // Click on overlay to close card
        overlay.addEventListener('click', () => {
            closeCard();
        });
    }
    
    // Function to close the flipped card
    function closeCard() {
        if (isFlipped) {
            card.classList.remove('flipped');
            card.classList.remove('discarded-flipped'); // Remove the discarded-flipped class
            isFlipped = false;
            
            // Reset any inline styles that might affect positioning
            card.style.transform = '';
            card.style.position = '';
            card.style.zIndex = '';
            
            // Remove overlay with animation
            if (overlay) {
                overlay.classList.remove('active');
                
                // Wait for transition to complete before removing from DOM
                setTimeout(() => {
                    if (overlay && overlay.parentNode) {
                        document.body.removeChild(overlay);
                        overlay = null;
                    }
                }, 300);
            }
        }
    }
    
    // Click to flip the card
    card.addEventListener('click', (e) => {
        // Allow flipping for all cards, including discarded ones
        if (!isFlipped && e.target !== keepBtn && e.target !== discardBtn) {
            // Create overlay
            createOverlay();
            
            // Flip the card
            card.classList.add('flipped');
            
            // Add special class for discarded cards
            if (isDiscarded) {
                card.classList.add('discarded-flipped');
            }
            
            isFlipped = true;
            
            // Prevent event from bubbling to overlay
            e.stopPropagation();
        }
    });
    
    // Keep button click handler
    keepBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling
        
        // Save the value
        saveValue(value);
        card.classList.add('saved');
        card.classList.remove('discarded');
        
        // Change the card front color to category color
        cardFront.style.backgroundColor = value.categoryColor;
        
        // Update the discard counter
        updateDiscardCounter();
        
        // Close the card
        setTimeout(() => {
            closeCard();
        }, 200);
    });
    
    // Discard button click handler
    discardBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling
        
        // Remove the value from saved and add to discarded
        removeValue(value.id);
        discardValue(value);
        card.classList.remove('saved');
        card.classList.add('discarded');
        
        // Change the card front color to gray
        cardFront.style.backgroundColor = '#aaaaaa';
        
        // Update the discard counter
        updateDiscardCounter();
        
        // Show the discard notification
        showDiscardNotification();
        
        // Close the card
        setTimeout(() => {
            closeCard();
        }, 200);
    });
    
    // Press Escape key to close card
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isFlipped) {
            closeCard();
        }
    });
    
    return card;
}

// Render saved values organized by category for the Values page
function renderSavedValuesByCategory() {
    const valuesContainer = document.getElementById('values-container');
    const savedValues = getSavedValues();
    
    // Clear the container
    valuesContainer.innerHTML = '';
    
    if (savedValues.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-values-message';
        emptyMessage.textContent = 'You haven\'t saved any values yet. Go to the Exercise page to discover and save your values.';
        valuesContainer.appendChild(emptyMessage);
        return;
    }
    
    // Group saved values by category
    const valuesByCategory = {};
    
    savedValues.forEach(value => {
        if (!valuesByCategory[value.categoryId]) {
            valuesByCategory[value.categoryId] = {
                name: value.categoryName,
                color: value.categoryColor,
                values: []
            };
        }
        
        valuesByCategory[value.categoryId].values.push(value);
    });
    
    // Create category sections
    Object.keys(valuesByCategory).forEach(categoryId => {
        const category = valuesByCategory[categoryId];
        
        // Create category container
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        categoryContainer.style.backgroundColor = category.color;
        
        // Create category header
        const categoryHeader = document.createElement('h3');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = category.name;
        
        // Create values list
        const valuesList = document.createElement('div');
        valuesList.className = 'values-list';
        
        // Add each value to the list
        category.values.forEach(value => {
            const valueCard = document.createElement('div');
            valueCard.className = 'value-card';
            
            const valueName = document.createElement('h4');
            valueName.className = 'value-name';
            valueName.textContent = value.name;
            
            const valueDescription = document.createElement('p');
            valueDescription.className = 'value-description';
            valueDescription.textContent = value.description;
            
            valueCard.appendChild(valueName);
            valueCard.appendChild(valueDescription);
            valuesList.appendChild(valueCard);
        });
        
        // Assemble the category section
        categoryContainer.appendChild(categoryHeader);
        categoryContainer.appendChild(valuesList);
        valuesContainer.appendChild(categoryContainer);
    });
}

// Create the grid of cards for the Exercise Stage 2 page (all non-discarded values)
function createSavedCardsGrid() {
    const cardsContainer = document.getElementById('cards-container');
    const allValues = getAllValues();
    const savedValues = getSavedValues();
    const discardedValues = getDiscardedValues();
    
    // Clear the container
    cardsContainer.innerHTML = '';
    
    // Check if there are any saved values
    if (savedValues.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-values-message';
        emptyMessage.textContent = 'You haven\'t saved any values yet. Go to Stage 1 to discover and save your values.';
        emptyMessage.style.textAlign = 'center';
        emptyMessage.style.padding = '2rem';
        emptyMessage.style.color = 'var(--light-text)';
        cardsContainer.appendChild(emptyMessage);
        return;
    }
    
    // Update discard counter
    const discardCounter = document.getElementById('discard-counter');
    if (discardCounter) {
        const needToDiscard = Math.max(0, savedValues.length - 5);
        discardCounter.textContent = `Need to discard ${needToDiscard} values`;
        discardCounter.style.color = savedValues.length > 5 ? '#5E1914' : '#18392B';
    }
    
    // Show all values in stage 2, including discarded ones
    // Create cards and add them to the container
    allValues.forEach(value => {
        const card = createCardForStage2(value);
        cardsContainer.appendChild(card);
    });
}

// Create a card for Stage 2 with original category colors and gray for discarded
function createCardForStage2(value) {
    const savedValues = getSavedValues();
    const discardedValues = getDiscardedValues();
    const isSaved = savedValues.some(saved => saved.id === value.id);
    const isDiscarded = discardedValues.some(discarded => discarded.id === value.id);
    
    // Create card elements
    const card = document.createElement('div');
    card.className = `card ${isSaved ? 'saved' : 'discarded'}`;
    card.dataset.id = value.id;
    card.dataset.categoryId = value.categoryId;
    
    // Front of the card
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.style.backgroundColor = isSaved ? value.categoryColor : '#aaaaaa';
    cardFront.textContent = value.name;
    // Removed dynamic font adjustment; font-size is handled via CSS
    
    // Back of the card
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    const categoryName = document.createElement('div');
    categoryName.className = 'card-category';
    categoryName.textContent = value.categoryName;
    categoryName.style.backgroundColor = value.categoryColor;
    
    const valueName = document.createElement('div');
    valueName.className = 'card-value-name';
    valueName.textContent = value.name;
    
    const valueDescription = document.createElement('div');
    valueDescription.className = 'card-description';
    valueDescription.textContent = value.description;
    
    // Create action buttons
    const cardActions = document.createElement('div');
    cardActions.className = 'card-actions';
    
    const keepBtn = document.createElement('button');
    keepBtn.className = 'card-btn keep-btn';
    keepBtn.textContent = 'Keep';
    
    const discardBtn = document.createElement('button');
    discardBtn.className = 'card-btn discard-btn';
    discardBtn.textContent = 'Discard';
    
    cardActions.appendChild(keepBtn);
    cardActions.appendChild(discardBtn);
    
    // Assemble the card
    cardBack.appendChild(categoryName);
    cardBack.appendChild(valueName);
    cardBack.appendChild(valueDescription);
    cardBack.appendChild(cardActions);
    
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    
    // Add event listeners for card interactions
    let isFlipped = false;
    let overlay;
    
    // Create overlay for when card is flipped
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        
        // Force reflow to ensure transition works
        overlay.offsetHeight;
        
        // Add active class to trigger fade in
        overlay.classList.add('active');
        
        // Click on overlay to close card
        overlay.addEventListener('click', () => {
            closeCard();
        });
    }
    
    // Function to close the flipped card
    function closeCard() {
        if (isFlipped) {
            card.classList.remove('flipped');
            card.classList.remove('discarded-flipped');
            isFlipped = false;
            
            card.style.transform = '';
            card.style.position = '';
            card.style.zIndex = '';
            
            if (overlay) {
                overlay.classList.remove('active');
                setTimeout(() => {
                    if (overlay && overlay.parentNode) {
                        document.body.removeChild(overlay);
                        overlay = null;
                    }
                }, 300);
            }
        }
    }
    
    // Click to flip the card
    card.addEventListener('click', (e) => {
        if (!isFlipped && e.target !== keepBtn && e.target !== discardBtn) {
            createOverlay();
            card.classList.add('flipped');
            if (isDiscarded) {
                card.classList.add('discarded-flipped');
            }
            isFlipped = true;
            e.stopPropagation();
        }
    });
    
    // Keep button click handler
    keepBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        saveValue(value);
        card.classList.add('saved');
        card.classList.remove('discarded');
        cardFront.style.backgroundColor = value.categoryColor;
        updateDiscardCounter();
        setTimeout(() => {
            closeCard();
        }, 200);
    });
    
    // Discard button click handler
    discardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeValue(value.id);
        discardValue(value);
        card.classList.remove('saved');
        card.classList.add('discarded');
        cardFront.style.backgroundColor = '#aaaaaa';
        updateDiscardCounter();
        setTimeout(() => {
            closeCard();
        }, 200);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isFlipped) {
            closeCard();
        }
    });
    
    return card;
}

// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
