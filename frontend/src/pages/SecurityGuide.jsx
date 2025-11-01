import { useState } from 'react'
import { motion } from 'framer-motion'
import DisasterCard from '../components/DisasterCard'
import FilterDropdown from '../components/FilterDropdown'

// Icons for disasters
const EarthquakeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2v20M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const FloodIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18h18M3 12h18M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 18v-6M21 18v-6" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const WildfireIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CyberAttackIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChemicalSpillIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2v6M15 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 10v12H6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14v4M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const TornadoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M8 8l4-4 4 4M8 16l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PowerOutageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PandemicIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const GasLeakIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const TsunamiIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18h18M3 12h18M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 18v-6M21 18v-6" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const HurricaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const DroughtIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const LandslideIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const VolcanicEruptionIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M8 4l4 4 4-4M8 20l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const BlizzardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const PowerFluctuationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18v4M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const TerroristAttackIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const NuclearAccidentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const WarningTriangleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Additional Icons
const AvalancheIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const HeatWaveIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const HailstormIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const ThunderstormIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 8h2M18 12h2M18 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const DataBreachIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M9 9h6M9 15h6M9 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const IndustrialAccidentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
)

const OilSpillIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.5"/>
  </svg>
)

const FireIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BuildingCollapseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 21V7l7-4 7 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21v-8h6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WaterContaminationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const TrafficAccidentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 18H17" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const IceStormIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const FogIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="8" ry="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 16h12M8 18h8M10 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const SecurityGuide = () => {
  const [selectedType, setSelectedType] = useState(null)
  const [selectedSeverity, setSelectedSeverity] = useState(null)

  // Disaster data
  const disasters = [
    // Natural Disasters - HIGH
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: EarthquakeIcon,
      title: 'Earthquake',
      description: 'A sudden shaking of the ground caused by tectonic plate movements.',
      remedies: [
        'Drop, cover, and hold on',
        'Stay away from windows and heavy furniture',
        'If indoors, stay inside until shaking stops',
        'If outdoors, move to an open area away from buildings',
        'Have an emergency kit ready with water, food, and first aid supplies'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: FloodIcon,
      title: 'Flood',
      description: 'An overflow of water that submerges normally dry land.',
      remedies: [
        'Move to higher ground immediately',
        'Avoid walking or driving through flood waters',
        'Turn off electricity and gas if flooding is imminent',
        'Keep emergency supplies ready',
        'Listen to local authorities for evacuation orders',
        'Stay away from downed power lines'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: WildfireIcon,
      title: 'Wildfire',
      description: 'An uncontrolled fire in a natural area.',
      remedies: [
        'Evacuate immediately if ordered',
        'Close all windows and doors',
        'Turn off gas and electricity',
        'Wear protective clothing and mask',
        'Keep fire extinguishers accessible',
        'Create defensible space around your property'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: TornadoIcon,
      title: 'Tornado',
      description: 'A violently rotating column of air extending from a thunderstorm to the ground.',
      remedies: [
        'Seek shelter in a basement or interior room',
        'Stay away from windows',
        'Cover yourself with a mattress or heavy blankets',
        'If in a vehicle, get out and lie flat in a low area',
        'Monitor weather alerts and warnings',
        'Have an emergency plan ready'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: TsunamiIcon,
      title: 'Tsunami',
      description: 'A series of ocean waves caused by earthquakes, volcanic eruptions, or landslides.',
      remedies: [
        'Move to high ground immediately',
        'Do not wait for official warnings',
        'Stay away from coastal areas',
        'Never return to coastal areas until authorities say it\'s safe',
        'Have an evacuation route planned',
        'Keep emergency supplies in an accessible location'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: HurricaneIcon,
      title: 'Hurricane',
      description: 'A powerful tropical storm with strong winds and heavy rainfall.',
      remedies: [
        'Evacuate if ordered by authorities',
        'Board up windows and secure outdoor items',
        'Stock up on food, water, and medications',
        'Have a battery-powered radio ready',
        'Stay indoors away from windows',
        'Do not drive through flooded areas'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: VolcanicEruptionIcon,
      title: 'Volcanic Eruption',
      description: 'An explosive release of lava, ash, and gases from a volcano.',
      remedies: [
        'Evacuate immediately if ordered',
        'Wear protective masks to avoid inhaling ash',
        'Avoid areas downwind of the volcano',
        'Protect eyes and skin from ash',
        'Stay informed about evacuation routes',
        'Cover water sources and stay indoors'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: PandemicIcon,
      title: 'Pandemic',
      description: 'Global outbreak of a contagious disease.',
      remedies: [
        'Practice good hygiene and handwashing',
        'Wear masks in public spaces',
        'Maintain social distancing',
        'Get vaccinated when available',
        'Stay home if you\'re sick',
        'Follow health authority guidelines'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: AvalancheIcon,
      title: 'Avalanche',
      description: 'A large mass of snow, ice, and rocks sliding rapidly down a mountainside.',
      remedies: [
        'Avoid avalanche-prone areas during high-risk conditions',
        'Carry avalanche safety equipment (beacon, probe, shovel)',
        'Take avalanche safety courses before venturing into mountains',
        'Travel with experienced guides in high-risk areas',
        'Check weather and avalanche forecasts',
        'Inform others of your travel plans and expected return time'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: HeatWaveIcon,
      title: 'Heat Wave',
      description: 'Extended period of excessively hot weather, often with high humidity.',
      remedies: [
        'Stay indoors during the hottest parts of the day',
        'Drink plenty of water and avoid alcohol',
        'Wear lightweight, light-colored clothing',
        'Take cool showers or baths',
        'Never leave children or pets in vehicles',
        'Check on elderly neighbors and family members'
      ]
    },
    {
      type: 'Natural',
      severity: 'HIGH',
      icon: ThunderstormIcon,
      title: 'Severe Thunderstorm',
      description: 'Intense thunderstorm with strong winds, heavy rain, and possible tornadoes.',
      remedies: [
        'Stay indoors and away from windows',
        'Avoid using electrical appliances and plumbing',
        'Do not stand under trees or tall structures',
        'If driving, pull over and wait for the storm to pass',
        'Avoid flooded roads and low-lying areas',
        'Stay away from metal objects and bodies of water'
      ]
    },
    // Natural Disasters - MEDIUM
    {
      type: 'Natural',
      severity: 'MEDIUM',
      icon: LandslideIcon,
      title: 'Landslide',
      description: 'The movement of rock, earth, or debris down a slope.',
      remedies: [
        'Evacuate the area immediately',
        'Listen for unusual sounds like trees cracking',
        'Avoid driving in landslide-prone areas during heavy rain',
        'Be aware of sudden changes in landscape',
        'Stay away from steep slopes and embankments'
      ]
    },
    {
      type: 'Natural',
      severity: 'MEDIUM',
      icon: BlizzardIcon,
      title: 'Blizzard',
      description: 'Severe snowstorm with strong winds and low visibility.',
      remedies: [
        'Stay indoors and avoid travel',
        'Keep emergency supplies stocked',
        'Dress in layers if going outside',
        'Avoid overexertion when shoveling snow',
        'Keep vehicles fueled and in good condition',
        'Monitor weather forecasts'
      ]
    },
    {
      type: 'Natural',
      severity: 'MEDIUM',
      icon: DroughtIcon,
      title: 'Drought',
      description: 'Extended period of abnormally low rainfall leading to water shortage.',
      remedies: [
        'Conserve water usage',
        'Fix leaks immediately',
        'Use water-efficient appliances',
        'Practice rainwater harvesting',
        'Follow local water restrictions',
        'Plant drought-resistant vegetation'
      ]
    },
    {
      type: 'Natural',
      severity: 'MEDIUM',
      icon: HailstormIcon,
      title: 'Hailstorm',
      description: 'Severe weather event with large hailstones falling from the sky.',
      remedies: [
        'Seek shelter immediately indoors',
        'Protect vehicles by parking in garages or covered areas',
        'Stay away from windows and skylights',
        'If driving, pull over safely and wait',
        'Protect crops with hail nets if possible',
        'Check for damage after the storm passes'
      ]
    },
    {
      type: 'Natural',
      severity: 'MEDIUM',
      icon: IceStormIcon,
      title: 'Ice Storm',
      description: 'Severe weather condition where freezing rain results in ice accumulation.',
      remedies: [
        'Stay indoors and avoid unnecessary travel',
        'Keep emergency supplies stocked',
        'Be careful when walking on icy surfaces',
        'Avoid driving unless absolutely necessary',
        'Report downed power lines immediately',
        'Use salt or sand on walkways to prevent falls'
      ]
    },
    {
      type: 'Natural',
      severity: 'MEDIUM',
      icon: FogIcon,
      title: 'Dense Fog',
      description: 'Thick fog that significantly reduces visibility.',
      remedies: [
        'Avoid driving if possible',
        'If driving, use low-beam headlights',
        'Reduce speed and increase following distance',
        'Use fog lights if available',
        'Listen for traffic at intersections',
        'Wait for conditions to improve before traveling'
      ]
    },
    // Natural Disasters - LOW
    {
      type: 'Natural',
      severity: 'LOW',
      icon: PowerFluctuationIcon,
      title: 'Minor Power Fluctuation',
      description: 'Brief interruption or variation in electrical power supply.',
      remedies: [
        'Unplug sensitive electronics',
        'Use surge protectors',
        'Keep flashlights and batteries ready',
        'Have backup power source if possible',
        'Report outages to utility company'
      ]
    },
    {
      type: 'Natural',
      severity: 'LOW',
      icon: FogIcon,
      title: 'Light Fog',
      description: 'Mild fog conditions with slightly reduced visibility.',
      remedies: [
        'Drive with caution',
        'Use low-beam headlights',
        'Increase following distance',
        'Be alert at intersections',
        'Reduce speed appropriately'
      ]
    },
    {
      type: 'Natural',
      severity: 'LOW',
      icon: HailstormIcon,
      title: 'Light Hail',
      description: 'Small hailstones with minimal damage potential.',
      remedies: [
        'Move vehicles to covered areas if possible',
        'Stay indoors until it passes',
        'Avoid unnecessary outdoor activities',
        'Protect sensitive outdoor items'
      ]
    },
    // Human-Made Disasters - HIGH
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: ChemicalSpillIcon,
      title: 'Chemical Spill',
      description: 'Accidental release of hazardous chemicals into the environment.',
      remedies: [
        'Evacuate the area immediately',
        'Call emergency services',
        'Stay upwind of the spill',
        'Avoid contact with contaminated materials',
        'Do not try to clean up without proper training',
        'Follow decontamination procedures if exposed'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: GasLeakIcon,
      title: 'Gas Leak',
      description: 'Uncontrolled release of gas from a container or pipeline.',
      remedies: [
        'Evacuate immediately',
        'Do not use electrical switches or phones',
        'Call emergency services from a safe distance',
        'Avoid open flames or sparks',
        'Do not return until authorities declare it safe',
        'Install gas detectors in your home'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: NuclearAccidentIcon,
      title: 'Nuclear Accident',
      description: 'Release of radioactive materials from a nuclear facility.',
      remedies: [
        'Follow evacuation orders immediately',
        'Stay indoors and seal windows and doors',
        'Take potassium iodide if recommended',
        'Avoid contaminated food and water',
        'Monitor official updates',
        'Follow decontamination procedures'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: TerroristAttackIcon,
      title: 'Terrorist Attack',
      description: 'Violent act intended to cause fear and harm.',
      remedies: [
        'Run, hide, or fight if attacked',
        'Follow law enforcement instructions',
        'Report suspicious activities',
        'Have an emergency communication plan',
        'Stay informed about threats',
        'Participate in community preparedness'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: FireIcon,
      title: 'Major Fire',
      description: 'Large-scale fire in buildings or industrial areas.',
      remedies: [
        'Evacuate immediately when alarm sounds',
        'Use stairs, never elevators',
        'Stay low to avoid smoke',
        'Close doors behind you',
        'Call emergency services',
        'Follow evacuation routes and assembly points'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: BuildingCollapseIcon,
      title: 'Building Collapse',
      description: 'Structural failure leading to building collapse.',
      remedies: [
        'Evacuate the building immediately if safe',
        'Call emergency services',
        'Do not use elevators',
        'Stay away from damaged structures',
        'Follow rescue team instructions',
        'Do not re-enter until cleared by authorities'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: OilSpillIcon,
      title: 'Oil Spill',
      description: 'Accidental release of petroleum products into the environment.',
      remedies: [
        'Evacuate affected areas immediately',
        'Avoid contact with contaminated water or soil',
        'Report the spill to authorities',
        'Follow health and safety guidelines',
        'Do not attempt cleanup without proper training',
        'Monitor official updates'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'HIGH',
      icon: IndustrialAccidentIcon,
      title: 'Industrial Accident',
      description: 'Serious accident at industrial facility causing harm or damage.',
      remedies: [
        'Evacuate the area immediately',
        'Follow emergency procedures',
        'Stay upwind of the incident',
        'Call emergency services',
        'Do not enter affected areas',
        'Follow decontamination procedures if exposed'
      ]
    },
    // Human-Made Disasters - MEDIUM
    {
      type: 'Human-Made',
      severity: 'MEDIUM',
      icon: CyberAttackIcon,
      title: 'Cyber Attack',
      description: 'Malicious attempt to damage or gain unauthorized access to computer systems.',
      remedies: [
        'Disconnect from the internet',
        'Back up important data',
        'Update security software',
        'Change all passwords',
        'Report the incident to authorities',
        'Use strong, unique passwords',
        'Enable two-factor authentication'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'MEDIUM',
      icon: PowerOutageIcon,
      title: 'Power Outage',
      description: 'Loss of electrical power in a specific area.',
      remedies: [
        'Keep emergency lighting ready',
        'Unplug sensitive electronics',
        'Keep refrigerator closed',
        'Have backup power source',
        'Use generators safely (outside, away from windows)',
        'Conserve battery power on devices'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'MEDIUM',
      icon: DataBreachIcon,
      title: 'Data Breach',
      description: 'Unauthorized access to personal or sensitive information.',
      remedies: [
        'Change passwords immediately',
        'Enable two-factor authentication',
        'Monitor financial accounts',
        'Freeze credit if necessary',
        'Report to relevant authorities',
        'Use identity theft protection services',
        'Review account statements regularly'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'MEDIUM',
      icon: WaterContaminationIcon,
      title: 'Water Contamination',
      description: 'Pollution or contamination of water supply.',
      remedies: [
        'Use bottled water for drinking and cooking',
        'Boil water before use if instructed',
        'Follow health authority advisories',
        'Avoid using contaminated water',
        'Report contamination to authorities',
        'Have emergency water supply ready'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'MEDIUM',
      icon: TrafficAccidentIcon,
      title: 'Major Traffic Accident',
      description: 'Serious vehicle collision causing traffic disruption.',
      remedies: [
        'Follow detour signs and instructions',
        'Avoid the area if possible',
        'Drive carefully and be patient',
        'Call emergency services if you witness an accident',
        'Do not slow down to look at accidents',
        'Use alternative routes when available'
      ]
    },
    // Human-Made Disasters - LOW
    {
      type: 'Human-Made',
      severity: 'LOW',
      icon: PowerFluctuationIcon,
      title: 'Minor Power Surge',
      description: 'Temporary increase in electrical voltage.',
      remedies: [
        'Use surge protectors',
        'Unplug sensitive devices during storms',
        'Install whole-house surge protection',
        'Replace damaged electronics'
      ]
    },
    {
      type: 'Human-Made',
      severity: 'LOW',
      icon: DataBreachIcon,
      title: 'Minor Security Alert',
      description: 'Low-level security concern requiring attention.',
      remedies: [
        'Update passwords regularly',
        'Review account activity',
        'Keep software updated',
        'Use strong, unique passwords',
        'Enable security notifications'
      ]
    },
  ]

  // Filter options
  const typeOptions = ['All Disasters', 'Natural Disasters', 'Human-Made Disasters']
  const severityOptions = ['All Severities', 'High Risk', 'Medium Risk', 'Low Risk']

  // Filter disasters based on selected filters
  const filteredDisasters = disasters.filter((disaster) => {
    const typeMatch = !selectedType || 
      (selectedType === 'Natural Disasters' && disaster.type === 'Natural') ||
      (selectedType === 'Human-Made Disasters' && disaster.type === 'Human-Made')
    
    const severityMatch = !selectedSeverity ||
      (selectedSeverity === 'High Risk' && disaster.severity === 'HIGH') ||
      (selectedSeverity === 'Medium Risk' && disaster.severity === 'MEDIUM') ||
      (selectedSeverity === 'Low Risk' && disaster.severity === 'LOW')

    return typeMatch && severityMatch
  })

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-purple-500 mb-4">
          Top Disasters and Their Remedies
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          Essential guide for emergency preparedness and response
        </p>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-4">
          <FilterDropdown
            label="All Disasters"
            icon={null}
            options={typeOptions}
            selected={selectedType || 'All Disasters'}
            onSelect={(value) => setSelectedType(value === 'All Disasters' ? null : value)}
          />
          <FilterDropdown
            label="All Severities"
            icon={WarningTriangleIcon}
            options={severityOptions}
            selected={selectedSeverity || 'All Severities'}
            onSelect={(value) => setSelectedSeverity(value === 'All Severities' ? null : value)}
          />
        </div>
      </motion.div>

      {/* Disaster Cards Grid */}
      {filteredDisasters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDisasters.map((disaster, index) => (
            <DisasterCard
              key={index}
              icon={disaster.icon}
              title={disaster.title}
              severity={disaster.severity}
              description={disaster.description}
              remedies={disaster.remedies}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">No disasters found matching the selected filters.</p>
        </div>
      )}
    </div>
  )
}

export default SecurityGuide

