// Dependencies
import React, { FC, useState, useEffect } from 'react'
import slug from 'slug'

// Components
import Icon from '../Icon'

// Styles
import { Tags } from './Tags.styled'

type Tag = {
  option: string
  value: string
}

interface IProps {
  label?: string
  tags: Tag[]
  getTags(tags: Tag[]): void
}

const TagsComponent: FC<IProps> = props => {
  const { tags = [], getTags, label = 'Add new tag' } = props
  const [tagsArr, setTags] = useState(tags)
  const [newTag, setTag] = useState('')
  const [fetchTags, setFetchTags] = useState(true)

  useEffect(() => {
    if (fetchTags) {
      getTags(tagsArr)
    }
  })

  const findTagIndex = (tagValue: string): number => tagsArr.findIndex(t => t.value === tagValue)

  const onKeyPressed = ({ key }: { key: string }): void => {
    if (key === 'Enter') {
      const tagIndex = findTagIndex(newTag)

      if (tagIndex === -1 && newTag.trim() !== '') {
        const newVal = slug(newTag, { lower: true })
        const newTags = [...tagsArr, { option: newTag, value: newVal }]

        setTags(newTags)
        setTag('')
        setFetchTags(true)
      }
    }
  }

  const onChange = ({ target: { value } }: { target: { value: string } }): void => {
    setTag(value)
    setFetchTags(false)
  }

  const onClick = (tag: string): void => {
    const tagIndex = findTagIndex(tag)

    if (tagIndex > -1) {
      tagsArr.splice(tagIndex, 1)

      setTags([...tagsArr])
      setFetchTags(true)
    }
  }

  return (
    <div style={{ marginTop: '5px', marginBottom: '20px' }}>
      <Tags className="Tags">
        <div className="container">
          {tagsArr.map((tag, index) => (
            <div key={`${tag.value}-${index}`} className="tag">
              <span title={tag.option}>{tag.option}</span>
              <Icon title="Remove" type="fas fa-times" onClick={(): void => onClick(tag.value)} />
            </div>
          ))}

          <input
            name="tag"
            placeholder={label}
            onKeyPress={onKeyPressed}
            onChange={onChange}
            value={newTag}
          />
        </div>
      </Tags>
    </div>
  )
}

export default TagsComponent
