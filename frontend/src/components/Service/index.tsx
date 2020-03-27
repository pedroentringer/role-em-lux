import React from 'react'

import * as Icons from 'react-icons/fa'
import { IconType } from 'react-icons/lib/cjs'

import { Container, IconCard } from './styles'
import Button from '../Button'

interface Props {
  service: {
    id: number;
    icon: string;
    name: string;
    description: string;
  };
}

const getIcon = (name: string): IconType => {
  const icons = Object.values(Icons)
  const icon = icons.find(icon => icon.name === name)

  if (icon) return icon

  return Icons.FaExclamationCircle
}

const Service: React.FC<Props> = props => {
  const Icon = getIcon(props.service.icon)

  return (
    <Container className="col">
      <IconCard>
        <Icon />
      </IconCard>
      <h3>{props.service.name}</h3>
      <p>{props.service.description}</p>
      <Button text="Quero saber mais" icon />
    </Container>
  )
}

export default Service
