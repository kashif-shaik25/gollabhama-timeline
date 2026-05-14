import { useState } from 'react'
import { timelineData } from '../data/timelineData'
import TimelineNode from './TimelineNode'
import DetailModal from './DetailModal'
import ScrollReveal from './ScrollReveal'

const TimelineManager = () => {
  const [activeModal, setActiveModal] = useState(null)
  const [activeNodeId, setActiveNodeId] = useState(null)

  const handleNodeClick = (node) => {
    setActiveNodeId(node.id)
    setActiveModal({ isOpen: true, nodeData: node })
  }

  const handleModalClose = () => {
    setActiveModal(null)
    setActiveNodeId(null)
  }

  // Group nodes by phase for phase-change dividers
  const solutionNodes = timelineData.filter((n) => n.phase === 'solution')

  return (
    <section className="relative" aria-label="Design thinking timeline">
      {/* Timeline spine — mobile: left-8, desktop: center */}
      <div
        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-primary opacity-20 -translate-x-1/2"
        aria-hidden="true"
      />

      {/* Phase section: Topic + Issues */}
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {timelineData
          .filter((n) => n.phase !== 'solution')
          .map((node, index) => (
            <TimelineNode
              key={node.id}
              node={node}
              isActive={activeNodeId === node.id}
              onNodeClick={handleNodeClick}
              index={index}
            />
          ))}
      </div>

      {/* Phase section: Solution — subtle mint tint bg */}
      {solutionNodes.length > 0 && (
        <div className="bg-[#66C19210] border-t border-brand-success/20">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            {/* Solution section header */}
            <ScrollReveal threshold={0.1} delay={0}>
              <div className="pt-16 pb-4 text-center">
                <span className="font-body font-medium text-xs uppercase tracking-[0.25em] text-brand-success block mb-3">
                  Design Response
                </span>
                <h2 className="font-display font-black text-4xl md:text-5xl text-[#0A0A0A] leading-tight">
                  The Solution
                </h2>
                <div className="mt-4 mx-auto w-16 h-px bg-brand-success" />
              </div>
            </ScrollReveal>

            {solutionNodes.map((node, index) => (
              <TimelineNode
                key={node.id}
                node={node}
                isActive={activeNodeId === node.id}
                onNodeClick={handleNodeClick}
                index={timelineData.filter((n) => n.phase !== 'solution').length + index}
              />
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {activeModal?.isOpen && (
        <DetailModal node={activeModal.nodeData} onClose={handleModalClose} />
      )}
    </section>
  )
}

export default TimelineManager
