import React from 'react'

const SkillSection = (props) => {
  return (
    <section className='skill-set'>
        <div className="skill-set-head">{props.head}</div>
        <div className="skill-set-body">{props.body}</div>
    </section>
  )
}

export default SkillSection