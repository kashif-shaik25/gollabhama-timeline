const phaseConfig = {
  topic:    { label: 'TOPIC',    color: 'text-brand-primary',  border: 'border-brand-primary' },
  issues:   { label: 'ISSUES',   color: 'text-brand-interaction', border: 'border-brand-interaction' },
  solution: { label: 'SOLUTION', color: 'text-brand-success',  border: 'border-brand-success' },
}

const SectionLabel = ({ phase }) => {
  const config = phaseConfig[phase] || phaseConfig.topic

  return (
    <span
      className={`inline-block font-body font-medium text-xs uppercase tracking-[0.18em] px-3 py-1 border ${config.color} ${config.border}`}
    >
      {config.label}
    </span>
  )
}

export default SectionLabel
