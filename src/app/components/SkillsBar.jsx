'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { poppins } from '../layout'

const categoryMeta = {
  Frontend: {
    gradient: 'from-[#7c3aed] to-[#0ea5e9]',
    glow: '#7c3aed',
    label: '🎨',
  },
  Backend: {
    gradient: 'from-[#0ea5e9] to-[#10b981]',
    glow: '#0ea5e9',
    label: '⚙️',
  },
  Tools: {
    gradient: 'from-[#e2c97e] to-[#f97316]',
    glow: '#e2c97e',
    label: '🛠️',
  },
}

export default function SkillsBar({ category, list, idx }) {
  const meta = categoryMeta[category] || categoryMeta.Frontend

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm overflow-hidden"
    >
      {/* Card glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${meta.glow}22, transparent 70%)`,
        }}
      />

      {/* Top border accent */}
      <div
        className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${meta.gradient} opacity-60`}
      />

      {/* Heading */}
      <div className="mb-7 flex items-center gap-3">
        <span className="text-xl">{meta.label}</span>
        <h3
          className={`text-lg font-bold tracking-wide text-white ${poppins.className}`}
          style={{
            backgroundImage: `linear-gradient(90deg, #fff 40%, ${meta.glow})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {category}
        </h3>
      </div>

      {/* Skills list */}
      <div className="flex flex-col gap-5">
        {list.map((skill, sIdx) => (
          <motion.div
            key={sIdx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 + sIdx * 0.08 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            {/* Icon + name + percentage */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="opacity-80">{skill.icon}</span>
                <span className="text-sm font-medium text-white/70">{skill.name}</span>
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + sIdx * 0.08 + 0.8 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tabular-nums"
                style={{ color: meta.glow }}
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* Track */}
            <div className="relative h-[5px] w-full overflow-hidden rounded-full bg-white/[0.06]">
              {/* Filled bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.15 + sIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-gradient-to-r ${meta.gradient} relative`}
              >
                {/* Shimmer on bar */}
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ backgroundPositionX: ['200%', '-200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                />
              </motion.div>

              {/* Glow dot at tip */}
              <motion.div
                initial={{ left: 0, opacity: 0 }}
                whileInView={{ left: `calc(${skill.level}% - 4px)`, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.15 + sIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full shadow-lg"
                style={{
                  backgroundColor: meta.glow,
                  boxShadow: `0 0 8px 2px ${meta.glow}99`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}