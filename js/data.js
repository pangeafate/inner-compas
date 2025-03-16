// Values and categories data
const valuesData = {
    categories: [
        {
            id: "inner-wisdom",
            name: "Inner Wisdom & Reflection",
            color: "var(--wisdom-color)",
            values: [
                {
                    id: "self-awareness",
                    name: "Self-Awareness",
                    description: "Recognizing your thoughts, emotions, and motives"
                },
                {
                    id: "introspection",
                    name: "Introspection",
                    description: "Delving deeply into your inner experiences"
                },
                {
                    id: "reflection",
                    name: "Reflection",
                    description: "Regularly examining your life experiences to foster growth"
                },
                {
                    id: "inquiry",
                    name: "Inquiry",
                    description: "Questioning assumptions to uncover deeper truths"
                },
                {
                    id: "curiosity",
                    name: "Curiosity",
                    description: "Maintaining a passionate desire to learn and explore"
                },
                {
                    id: "learning",
                    name: "Learning",
                    description: "Embracing continuous education about yourself and the world"
                },
                {
                    id: "knowledge",
                    name: "Knowledge",
                    description: "Valuing the accumulation and application of understanding"
                },
                {
                    id: "insight",
                    name: "Insight",
                    description: "Gaining clarity about your inner life and circumstances"
                },
                {
                    id: "wisdom",
                    name: "Wisdom",
                    description: "Applying deep understanding drawn from experience and reflection"
                },
                {
                    id: "open-mindedness",
                    name: "Open-Mindedness",
                    description: "Being receptive to new ideas and perspectives"
                },
                {
                    id: "growth-mindset",
                    name: "Growth Mindset",
                    description: "Believing that abilities can be developed through dedication and effort"
                },
                {
                    id: "growth",
                    name: "Growth",
                    description: "Embracing lifelong personal development"
                },
                {
                    id: "mindfulness",
                    name: "Mindfulness",
                    description: "Staying fully present and aware without judgment"
                },
                {
                    id: "presence",
                    name: "Presence",
                    description: "Fully inhabiting the \"here and now\""
                },
                {
                    id: "self-acceptance",
                    name: "Self-Acceptance",
                    description: "Embracing all parts of yourself without harsh judgment"
                },
                {
                    id: "balance",
                    name: "Balance",
                    description: "Cultivating internal equilibrium and harmony"
                },
                {
                    id: "flexibility",
                    name: "Flexibility",
                    description: "Adapting your thoughts and attitudes in light of new information"
                },
                {
                    id: "adaptability",
                    name: "Adaptability",
                    description: "Adjusting gracefully to change and unforeseen circumstances"
                }
            ]
        },
        {
            id: "personal-strength",
            name: "Personal Strength & Authentic Expression",
            color: "var(--growth-color)",
            values: [
                {
                    id: "authenticity",
                    name: "Authenticity",
                    description: "Living in alignment with your true self without pretense"
                },
                {
                    id: "integrity",
                    name: "Integrity",
                    description: "Consistently honoring your moral principles through action"
                },
                {
                    id: "courage",
                    name: "Courage",
                    description: "Facing fears and uncertainties with bold determination"
                },
                {
                    id: "vulnerability",
                    name: "Vulnerability",
                    description: "Willingly exposing your true feelings to foster deeper connection"
                },
                {
                    id: "self-respect",
                    name: "Self-Respect",
                    description: "Valuing your intrinsic worth and setting healthy boundaries"
                },
                {
                    id: "self-care",
                    name: "Self-Care",
                    description: "Prioritizing your physical, emotional, and mental well-being"
                },
                {
                    id: "resilience",
                    name: "Resilience",
                    description: "Bouncing back from setbacks with strength"
                },
                {
                    id: "discipline",
                    name: "Discipline",
                    description: "Exercising self-control to remain focused on long-term goals"
                },
                {
                    id: "commitment",
                    name: "Commitment",
                    description: "Dedicating yourself to your personal aspirations and values"
                },
                {
                    id: "self-expression",
                    name: "Self-Expression",
                    description: "Freely sharing your inner voice and creativity"
                },
                {
                    id: "empowerment",
                    name: "Empowerment",
                    description: "Cultivating the confidence to shape your own life"
                },
                {
                    id: "adventure",
                    name: "Adventure",
                    description: "Embracing new experiences and the thrill of discovery"
                },
                {
                    id: "freedom",
                    name: "Freedom",
                    description: "Valuing autonomy and the power to choose your own path"
                },
                {
                    id: "autonomy",
                    name: "Autonomy",
                    description: "Exercising independent thought and self-governance"
                },
                {
                    id: "independence",
                    name: "Independence",
                    description: "Fostering self-reliance while honoring interdependence"
                },
                {
                    id: "security",
                    name: "Security",
                    description: "Valuing a sense of safety—both emotionally and physically"
                },
                {
                    id: "comfort",
                    name: "Comfort",
                    description: "Creating environments and habits that nurture well-being"
                },
                {
                    id: "serenity",
                    name: "Serenity",
                    description: "Cultivating an inner state of calm and tranquility"
                }
            ]
        },
        {
            id: "interpersonal",
            name: "Interpersonal & Emotional",
            color: "var(--relationships-color)",
            values: [
                {
                    id: "compassion",
                    name: "Compassion",
                    description: "Offering heartfelt care toward others' suffering"
                },
                {
                    id: "empathy",
                    name: "Empathy",
                    description: "Deeply understanding and sharing the emotions of others"
                },
                {
                    id: "love",
                    name: "Love",
                    description: "Nurturing profound, unconditional care for self and others"
                },
                {
                    id: "connection",
                    name: "Connection",
                    description: "Building genuine, meaningful relationships"
                },
                {
                    id: "respect",
                    name: "Respect",
                    description: "Honoring the inherent dignity of every individual"
                },
                {
                    id: "responsibility",
                    name: "Responsibility",
                    description: "Owning your actions within relationships"
                },
                {
                    id: "accountability",
                    name: "Accountability",
                    description: "Being answerable for your commitments and behaviors"
                },
                {
                    id: "honesty",
                    name: "Honesty",
                    description: "Valuing truthfulness in your words and actions"
                },
                {
                    id: "transparency",
                    name: "Transparency",
                    description: "Sharing openly without hidden agendas"
                },
                {
                    id: "gratitude",
                    name: "Gratitude",
                    description: "Recognizing and appreciating life's blessings"
                },
                {
                    id: "humility",
                    name: "Humility",
                    description: "Acknowledging your limitations and valuing others' contributions"
                },
                {
                    id: "forgiveness",
                    name: "Forgiveness",
                    description: "Letting go of past hurts to heal and move forward"
                },
                {
                    id: "patience",
                    name: "Patience",
                    description: "Enduring delays and challenges with calm perseverance"
                },
                {
                    id: "perseverance",
                    name: "Perseverance",
                    description: "Persisting emotionally through life's obstacles"
                },
                {
                    id: "determination",
                    name: "Determination",
                    description: "Committing to overcome relational and personal challenges"
                },
                {
                    id: "optimism",
                    name: "Optimism",
                    description: "Maintaining a hopeful outlook even in adversity"
                },
                {
                    id: "hope",
                    name: "Hope",
                    description: "Believing in the possibility of positive change"
                },
                {
                    id: "joy",
                    name: "Joy",
                    description: "Celebrating moments of happiness and connection"
                },
                {
                    id: "playfulness",
                    name: "Playfulness",
                    description: "Embracing spontaneity and fun in interactions"
                },
                {
                    id: "emotional-intelligence",
                    name: "Emotional Intelligence",
                    description: "Recognizing, understanding, and managing emotions"
                },
                {
                    id: "emotional-balance",
                    name: "Emotional Balance",
                    description: "Harmonizing the full range of your feelings"
                },
                {
                    id: "sincerity",
                    name: "Sincerity",
                    description: "Expressing genuine thoughts and emotions"
                },
                {
                    id: "openness",
                    name: "Openness",
                    description: "Being authentic and receptive in your interactions"
                },
                {
                    id: "reliability",
                    name: "Reliability",
                    description: "Consistently being a dependable presence"
                },
                {
                    id: "trustworthiness",
                    name: "Trust- worthiness",
                    description: "Earning and maintaining the confidence of others"
                },
                {
                    id: "dependability",
                    name: "Dependability",
                    description: "Being a steadfast support for those around you"
                },
                {
                    id: "modesty",
                    name: "Modesty",
                    description: "Appreciating your achievements without arrogance"
                }
            ]
        },
        {
            id: "community",
            name: "Community & Social",
            color: "var(--community-color)",
            values: [
                {
                    id: "cooperation",
                    name: "Cooperation",
                    description: "Working together toward shared goals"
                },
                {
                    id: "collaboration",
                    name: "Collaboration",
                    description: "Combining strengths with others for mutual success"
                },
                {
                    id: "community",
                    name: "Community",
                    description: "Building supportive networks and fostering shared belonging"
                },
                {
                    id: "belonging",
                    name: "Belonging",
                    description: "Creating spaces where everyone feels valued and included"
                },
                {
                    id: "justice",
                    name: "Justice",
                    description: "Upholding fairness and ethical treatment for all"
                },
                {
                    id: "equality",
                    name: "Equality",
                    description: "Advocating for equal rights and opportunities for everyone"
                },
                {
                    id: "fairness",
                    name: "Fairness",
                    description: "Ensuring impartial treatment in decisions and actions"
                },
                {
                    id: "service",
                    name: "Service",
                    description: "Contributing selflessly to the well-being of others"
                },
                {
                    id: "generosity",
                    name: "Generosity",
                    description: "Sharing your time, resources, and compassion freely"
                },
                {
                    id: "altruism",
                    name: "Altruism",
                    description: "Acting with selfless concern for the welfare of others"
                },
                {
                    id: "kindness",
                    name: "Kindness",
                    description: "Demonstrating warmth and care in everyday actions"
                },
                {
                    id: "acceptance",
                    name: "Acceptance (of others)",
                    description: "Embracing people as they are"
                },
                {
                    id: "tolerance",
                    name: "Tolerance",
                    description: "Respecting differences and diverse viewpoints"
                },
                {
                    id: "inclusivity",
                    name: "Inclusivity",
                    description: "Actively welcoming and valuing diversity"
                },
                {
                    id: "cultural-sensitivity",
                    name: "Cultural Sensitivity",
                    description: "Respecting and appreciating different traditions and backgrounds"
                },
                {
                    id: "environmental-stewardship",
                    name: "Environmental Stewardship",
                    description: "Caring for and protecting the natural world"
                },
                {
                    id: "sustainability",
                    name: "Sustainability",
                    description: "Supporting practices that ensure long-term well-being"
                },
                {
                    id: "stewardship",
                    name: "Stewardship",
                    description: "Responsibly managing resources and relationships"
                },
                {
                    id: "legacy",
                    name: "Legacy",
                    description: "Creating a lasting, positive impact for future generations"
                },
                {
                    id: "generativity",
                    name: "Generativity",
                    description: "Contributing to the growth and betterment of others"
                },
                {
                    id: "contribution",
                    name: "Contribution",
                    description: "Actively adding value to your community"
                },
                {
                    id: "impact",
                    name: "Impact",
                    description: "Making a measurable, positive difference in society"
                }
            ]
        },
        {
            id: "excellence",
            name: "Excellence & Achievement",
            color: "var(--creativity-color)",
            values: [
                {
                    id: "creativity",
                    name: "Creativity",
                    description: "Generating original ideas and expressions"
                },
                {
                    id: "innovation",
                    name: "Innovation",
                    description: "Embracing novel approaches to challenges"
                },
                {
                    id: "imagination",
                    name: "Imagination",
                    description: "Envisioning possibilities beyond your current reality"
                },
                {
                    id: "inventiveness",
                    name: "Inventiveness",
                    description: "Crafting unique solutions to problems"
                },
                {
                    id: "resourcefulness",
                    name: "Resourcefulness",
                    description: "Finding effective ways to overcome obstacles"
                },
                {
                    id: "diligence",
                    name: "Diligence",
                    description: "Applying persistent, careful effort in all pursuits"
                },
                {
                    id: "efficiency",
                    name: "Efficiency",
                    description: "Valuing productivity without sacrificing quality"
                },
                {
                    id: "pragmatism",
                    name: "Pragmatism",
                    description: "Focusing on practical, effective solutions"
                },
                {
                    id: "progress",
                    name: "Progress",
                    description: "Striving for continuous improvement"
                },
                {
                    id: "excellence",
                    name: "Excellence",
                    description: "Pursuing high standards in every endeavor"
                },
                {
                    id: "quality",
                    name: "Quality",
                    description: "Valuing craftsmanship, care, and attention to detail"
                }
            ]
        },
        {
            id: "spiritual",
            name: "Spiritual & Transcendent",
            color: "var(--spirituality-color)",
            values: [
                {
                    id: "faith",
                    name: "Faith",
                    description: "Trusting in a guiding force beyond the material"
                },
                {
                    id: "spirituality",
                    name: "Spirituality",
                    description: "Seeking deeper meaning and connection through transcendent experiences"
                },
                {
                    id: "reverence",
                    name: "Reverence",
                    description: "Holding a deep, respectful awe for life and its mysteries"
                },
                {
                    id: "transcendence",
                    name: "Transcendence",
                    description: "Pursuing experiences that elevate you beyond everyday concerns"
                }
            ]
        }
    ]
};

// Function to get all values as a flat array
function getAllValues() {
    return valuesData.categories.flatMap(category => 
        category.values.map(value => ({
            ...value,
            categoryId: category.id,
            categoryName: category.name,
            categoryColor: category.color
        }))
    );
}

// Export the data and helper functions
export { valuesData, getAllValues };
