import { cx } from '@web-builder/utils'
import React, { FC, ReactElement, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { Color } from '../../types'
import Icon from '../Icon'
import { BASE_CLASS_NAME, Li, SpanLink, Ul } from './Pagination.styled'

export type Props = {
  color?: Color
  page: number
  total: number
  rowsPerPage?: number
  href: string
  Link?: LinkProps | any
}

const Pagination: FC<Props> = ({
  Link,
  href,
  rowsPerPage,
  page,
  total: count,
  color = Color.primary
}) => {
  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: [color]
  })
  const maxElementsPerPage = rowsPerPage || 10
  const increment = 5

  const getCurrentPage = (start: number, end: number): number => (start === 0 ? 1 : start / end + 1)

  const getPageNav = (
    firstPage: number,
    lastPage: number,
    start: number,
    end: number
  ): ReactNode[] => {
    const pageNav: ReactElement[] = []

    for (let i = firstPage; i < lastPage; i += 1) {
      const pge = i + 1
      const next = i * end

      if (start === next) {
        if (Link) {
          pageNav.push(
            <Li key={i}>
              <a href="#">
                <SpanLink className="active">{pge}</SpanLink>
              </a>
            </Li>
          )
        } else {
          pageNav.push(
            <Li key={i}>
              <a href="#">
                <SpanLink className="active">{pge}</SpanLink>
              </a>
            </Li>
          )
        }
      } else if (Link) {
        pageNav.push(
          <Li key={i}>
            <Link to={`${href}${pge}`}>
              <SpanLink>{pge}</SpanLink>
            </Link>
          </Li>
        )
      } else {
        pageNav.push(
          <Li key={i}>
            <a href={`${href}${pge}`}>
              <SpanLink>{pge}</SpanLink>
            </a>
          </Li>
        )
      }
    }

    return pageNav
  }

  const getPageNext = (currentPage: number, pages: number): ReactNode => {
    if (currentPage <= pages - 1) {
      if (Link) {
        return (
          <Li>
            <Link to={`${href}${currentPage + 1}`}>
              <SpanLink className="next">
                <Icon type="fas fa-chevron-right" />
              </SpanLink>
            </Link>
          </Li>
        )
      }
      return (
        <Li>
          <a href={`${href}${currentPage + 1}`}>
            <SpanLink className="next">
              <Icon type="fas fa-chevron-right" />
            </SpanLink>
          </a>
        </Li>
      )
    }

    return null
  }

  const getPagePrevious = (start: number, currentPage: number) => {
    if (start > 0) {
      if (Link) {
        return (
          <Li>
            <Link to={`${href}${currentPage - 1}`}>
              <SpanLink className="previous">
                <Icon type="fas fa-chevron-left" />
              </SpanLink>
            </Link>
          </Li>
        )
      }

      return (
        <Li>
          <a href={`${href}${currentPage - 1}`}>
            <SpanLink className="previous">
              <Icon type="fas fa-chevron-left" />
            </SpanLink>
          </a>
        </Li>
      )
    }

    return null
  }

  const getPaginationStart = (pg: number): number => {
    const paginationPage = pg > 0 ? pg : 0
    return paginationPage > 0 ? paginationPage * maxElementsPerPage - maxElementsPerPage : 0
  }

  const buildPagination = (
    total: number,
    end: number,
    start: number,
    elementsPerPage?: number
  ): ReactElement => {
    const limit = elementsPerPage || maxElementsPerPage

    let currentPage: number
    let firstPage: number
    let lastPage: number
    let pageNav: ReactNode
    let pageNext: ReactNode
    let pagePrevious: ReactNode
    let pages: number
    let rest: number

    if (total > end) {
      rest = total % end
      pages = rest === 0 ? total / end : (total - rest) / end + 1
      currentPage = start / end + 1

      if (pages > limit) {
        if (start === 0) {
          firstPage = 0
          lastPage = limit
        }

        if (currentPage < increment) {
          firstPage = 0
          lastPage = currentPage + increment + (increment - currentPage)
        } else {
          firstPage = currentPage - increment - (currentPage + increment - pages)
          lastPage = pages
        }

        if (currentPage >= increment && currentPage <= pages - increment) {
          firstPage = currentPage - increment
          lastPage = currentPage + increment
        }
      } else {
        firstPage = 0
        lastPage = pages
      }

      pageNav = getPageNav(firstPage, lastPage, start, end)
      currentPage = getCurrentPage(start, end)
      pageNext = getPageNext(currentPage, pages)
      pagePrevious = getPagePrevious(start, currentPage)
    }

    return (
      <Ul className={classNames}>
        {pagePrevious}
        {pageNav}
        {pageNext}
      </Ul>
    )
  }

  const start = getPaginationStart(page)

  if (count > maxElementsPerPage) {
    return buildPagination(count, maxElementsPerPage, start)
  }

  return null
}

export default Pagination
