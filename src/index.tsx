import React from 'react'
import { Table, Tag } from 'antd'
import './style'

interface Props {
  data: Array<Data>
}

interface Data {
  key: string
  name: string
  age: number
  address: string
  tags: Array<string>
}

function RenderTable(props: Props): JSX.Element {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render(text: string): JSX.Element {
        return <a>{text}</a>
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render(tags: Array<string>): JSX.Element {
        return (
          <span>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green'
              if (tag === 'loser') {
                color = 'volcano'
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              )
            })}
          </span>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render(text: string, record: Data): JSX.Element {
        return (
          <span>
            <a style={{ marginRight: 16 }}>Invite {record.name}</a>
            <a>Delete</a>
          </span>
        )
      },
    },
  ]

  return (
    <Table className="table-class" columns={columns} dataSource={props.data} />
  )
}

export default RenderTable
