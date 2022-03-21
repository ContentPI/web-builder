import React from 'react'
import Select from './index'

const stories = {
  component: 'Select',
  props: [
    {
      name: 'top',
      type: 'string',
      description: '',
    },
    {
      name: 'name',
      type: 'string',
      default: '',
      description: '',
    },
    {
      name: 'label',
      type: 'string',
      default: '',
      description: '',
    },
    {
      name: 'onClick',
      type: 'function',
      default: '',
      description: '',
    },
    {
      name: 'options',
      type: 'Option',
      default: '',
      description: '',
    },
  ],
  stories: [
    {
      name: 'Select',
      description: 'Language',
      render: (
        <Select
          top="125px"
          name="language"
          label="Select language"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'English',
              value: 'en',
            },
            {
              option: 'Spanish',
              value: 'es',
            },
            {
              option: 'French',
              value: 'fr',
              selected: true,
            },
            {
              option: 'German',
              value: 'ge',
            },
            {
              option: 'Japan',
              value: 'jp',
            },
            {
              option: 'Chinese',
              value: 'ch',
            },
            {
              option: 'Korean',
              value: 'kr',
            },
          ]}
        />
      ),
      prop: '',
      code: `
        <Select
          top="160px"
          name="language"
          label="Select language"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'English',
              value: 'en'
            },
            {
              option: 'Spanish',
              value: 'es'
            },
            {
              option: 'French',
              value: 'fr',
              selected: true
            },
            {
              option: 'German',
              value: 'ge'
            },
            {
              option: 'Japan',
              value: 'jp'
            },
            {
              option: 'Chinese',
              value: 'ch'
            },
            {
              option: 'Korean',
              value: 'kr'
            }
          ]}
        />
      `,
    },
    {
      name: 'Select with Booleans',
      description: 'Radio with checked prop',
      render: (
        <Select
          name="published"
          color="dark"
          label="Published"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'Yes',
              value: true,
            },
            {
              option: 'No',
              value: false,
              selected: true,
            },
          ]}
        />
      ),
      code: `
        <Select
          name="published"
          type="white"
          label="Published"
          onClick={({ option, value }: { option: string; value: any }): void => {
            console.log(option, value)
          }}
          options={[
            {
              option: 'Yes',
              value: true
            },
            {
              option: 'No',
              value: false,
              selected: true
            }
          ]}
        />
      `,
    },
  ],
}

export default stories
