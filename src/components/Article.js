import React from 'react'

const Article = ({title, date="January 1, 1970", preview, minutes}) => {
  const emoji = {};
  emoji.numberOfEmojis = minutes < 30 ? (minutes/5)+(minutes%5>=1?1:0): (minutes/10)+(minutes%10>=1?1:0);
  emoji.type = minutes < 30 ? "☕️": "🍱";

  return (
    <article>
        <h3>{title}</h3>
        <small>{date} • {emoji.type.repeat(emoji.numberOfEmojis)} {minutes} min read</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article