import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import project1 from './assets/project_img_1.jpg'
import project2 from './assets/project_img_2.jpg'
import project3 from './assets/project_img_3.jpg'
import project4 from './assets/project_img_4.jpg'
import project5 from './assets/project_img_5.jpg'
import project6 from './assets/project_img_6.jpg'

const collections = [
  {
    id: 'residences',
    title: 'Considered residences',
    category: 'Residential',
    location: 'Benin City, Edo State',
    description: 'Explore the possibilities for a home shaped around the way you want to live.',
    image: project2,
    alt: 'Minimal contemporary residence surrounded by greenery',
  },
  {
    id: 'private-homes',
    title: 'Private homes',
    category: 'Residential',
    location: 'Benin City, Edo State',
    description: 'A considered starting point for finding a place that feels distinctly yours.',
    image: project4,
    alt: 'Contemporary home with clean architectural lines',
  },
  {
    id: 'stays',
    title: 'A more personal stay',
    category: 'Hospitality',
    location: 'Benin City, Edo State',
    description: 'Discover the kind of hospitality that makes a visit feel like an experience.',
    image: project5,
    alt: 'Warmly designed contemporary property',
  },
  {
    id: 'gathering',
    title: 'Places to gather',
    category: 'Hospitality',
    location: 'Benin City, Edo State',
    description: 'Find space for connection, celebration and the moments worth remembering.',
    image: project6,
    alt: 'Welcoming residential exterior in soft natural light',
  },
  {
    id: 'development',
    title: 'Room to grow',
    category: 'Development',
    location: 'Benin City, Edo State',
    description: 'Explore development possibilities and start a conversation about what comes next.',
    image: project1,
    alt: 'Modern architectural detail against a deep blue sky',
  },
  {
    id: 'opportunity',
    title: 'New possibilities',
    category: 'Development',
    location: 'Benin City, Edo State',
    description: 'Tell us what you are looking for; our team can help you explore the options.',
    image: project3,
    alt: 'Modern property at dusk',
  },
]

const categories = ['All spaces', 'Residential', 'Hospitality', 'Development']

export default function Properties() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All spaces')
  const [location, setLocation] = useState('')
  const carouselRef = useRef(null)

  const filteredSpaces = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return collections.filter(space => {
      const matchesCategory = category === 'All spaces' || space.category === category
      const matchesLocation = !location || space.location === location
      const searchable = `${space.title} ${space.category} ${space.location} ${space.description}`.toLowerCase()
      return matchesCategory && matchesLocation && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [category, location, query])

  const slide = direction => {
    const carousel = carouselRef.current
    if (!carousel) return
    const firstCard = carousel.querySelector('.space-card')
    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0
    const distance = firstCard ? firstCard.getBoundingClientRect().width + gap : carousel.clientWidth
    carousel.scrollBy({ left: distance * direction, behavior: 'smooth' })
  }

  return (
    <section id="properties" className="section spaces-section">
      <div className="page-shell">
        <motion.div
          className="spaces-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> FIND YOUR NEXT CHAPTER</span>
            <h2>Explore the <em>possibilities.</em></h2>
          </div>
          <p>Tell us what you have in mind. We’ll help you explore residential and hospitality opportunities with Zumera.</p>
        </motion.div>

        <motion.div
          className="search-panel glass-panel"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          <label className="search-field">
            <span aria-hidden="true" className="search-icon">⌕</span>
            <span className="sr-only">Search by property type or location</span>
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Try “residential” or “Benin City”"
            />
          </label>
          <span className="search-divider" aria-hidden="true" />
          <label className="location-field">
            <span className="location-pin" aria-hidden="true">⌖</span>
            <span className="sr-only">Filter by location</span>
            <select value={location} onChange={event => setLocation(event.target.value)}>
              <option value="">All locations</option>
              <option value="Benin City, Edo State">Benin City, Edo State</option>
            </select>
          </label>
          <a href="#space-results" className="button button-blue search-button">Find a space <span aria-hidden="true">↗</span></a>
        </motion.div>

        <div className="space-toolbar">
          <div className="category-tabs" role="group" aria-label="Filter by property category">
            {categories.map(item => (
              <button
                type="button"
                key={item}
                className={category === item ? 'category-tab active' : 'category-tab'}
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item)
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="carousel-controls">
            <span className="results-count" aria-live="polite">{filteredSpaces.length} curated spaces</span>
            <button type="button" onClick={() => slide(-1)} aria-label="Slide to previous properties" className="carousel-arrow">←</button>
            <button type="button" onClick={() => slide(1)} aria-label="Slide to next properties" className="carousel-arrow">→</button>
          </div>
        </div>

        {filteredSpaces.length > 0 ? (
          <motion.div
            id="space-results"
            ref={carouselRef}
            className="spaces-track"
            aria-label="Scrollable property and hospitality collection"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65 }}
          >
            {filteredSpaces.map((space, index) => (
              <motion.article
                key={space.id}
                className="space-card"
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                whileHover={{ y: -7 }}
              >
                <div className="space-image-wrap">
                  <img src={space.image} alt={space.alt} loading="lazy" />
                  <span className="space-category glass-panel">{space.category}</span>
                  <span className="image-disclaimer">Illustrative image</span>
                </div>
                <div className="space-card-copy">
                  <span className="space-location"><span aria-hidden="true">⌖</span> {space.location}</span>
                  <h3>{space.title}</h3>
                  <p>{space.description}</p>
                  <a href="#contact" className="card-link">Enquire for current options <span aria-hidden="true">↗</span></a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div id="space-results" className="empty-results" role="status">
            <h3>No spaces match that search just yet.</h3>
            <p>Try another property type or location, or message us and tell us what you’re looking for.</p>
            <button type="button" className="text-link" onClick={() => { setQuery(''); setCategory('All spaces'); setLocation('') }}>Clear filters <span aria-hidden="true">↗</span></button>
          </div>
        )}

        <p className="listing-disclaimer">Images are for inspiration. Contact Zumera for current availability and specific property details.</p>
      </div>
    </section>
  )
}
